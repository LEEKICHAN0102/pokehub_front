import { WriteForm, WriteTitle, WriteContentContainer, WriteContent, WriteContentButton, WritePosting, ErrorSpan } from "./write.style";
import { Navigate, useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "../Loader";
import axios from "axios";
import useDetailPostData from "../../hooks/post/usePostDetailData";
import { backEndUrl } from "../../constant/constant";
import { useEffect } from "react";

export default function EditCard() {
  const postId = useParams().postId;
  const outletContext = useOutletContext();
  const { data, isLoading } = useDetailPostData(postId);
  const navigate = useNavigate();

  const { user } = outletContext;
  const {
    register: editPostRegister,
    handleSubmit: editPostHandleSubmit,
    setValue: editPostSetValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (data.detail) {
      editPostSetValue("editTitle", data.detail.findByPostId.title);
      editPostSetValue("editContent", data.detail.findByPostId.content);
    }
  }, [data.detail, editPostSetValue]);

  const onEditSubmit = async (putData) => {
    try {
      await axios.put(`${backEndUrl}/board/edit/${postId}`, putData, { withCredentials: true });
      navigate(`/board/detail/${postId}`);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  if (!user.userData) {
    return <Navigate to="/login" replace />;
  }

  if(isLoading ){
    return <Loader />
  }

  return (
    <WriteForm onSubmit={editPostHandleSubmit(onEditSubmit)}>
      <WriteTitle
        type="editTitle"
        {...editPostRegister("editTitle", {
          required: "글 제목을 작성해주세요!",
          maxLength: {
            value: 16,
            message: "제목은 16글자 까지만 작성 가능해요!"
          }
        })}
      />
      {errors.editTitle && <ErrorSpan>{errors.editTitle.message}</ErrorSpan>}
      <WriteContentContainer>
        <WriteContent
          type="editContent"
          {...editPostRegister("editContent", {
            required: "글 내용을 작성해주세요!",
            maxLength: {
              value: 300,
              message: "최대 300글자 까지만 작성 가능해요!"
            }
          })}
        />
        {errors.editContent && <ErrorSpan>{errors.editContent.message}</ErrorSpan>}
        <WriteContentButton>
          <WritePosting type="submit">수정</WritePosting>
        </WriteContentButton>
      </WriteContentContainer>
    </WriteForm>
  )
}