import { WriteForm, WriteTitle, WriteContentContainer, WriteContent, WriteContentButton, WritePosting, ErrorSpan } from "./write.style";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export default function WriteCard() {
  const outletContext = useOutletContext();
  const { user } = outletContext;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/board/write`, data, { withCredentials: true });
      
      if (response.status === 200) {
        navigate("/board/1");
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  if (!user.userData) {
    return <Navigate to="/login" replace />;
  }

  return (
    <WriteForm onSubmit={handleSubmit(onSubmit)}>
      <WriteTitle
        placeholder="글 제목을 작성해주세요!"
        type="title"
        {...register("title", {
          required: "글 제목을 작성해주세요!",
          maxLength: {
            value: 16,
            message: "제목은 16글자 까지만 작성 가능해요!"
          }
        })}
      />
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <WriteContentContainer>
        <WriteContent
          placeholder="글 내용을 작성해주세요!"
          type="content"
          {...register("content", {
            required: "글 내용을 작성해주세요!",
            maxLength: {
              value: 300,
              message: "최대 300글자 까지만 작성 가능해요!"
            }
          })}
        />
        {errors.content && <ErrorSpan>{errors.content.message}</ErrorSpan>}
        <WriteContentButton>
          <WritePosting type="submit">작성</WritePosting>
        </WriteContentButton>
      </WriteContentContainer>
    </WriteForm>
  )
}