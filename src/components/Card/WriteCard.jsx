// WriteCard.jsx

import { WriteForm, WriteTitle, WriteContentContainer, WriteContent, WriteContentButton, WriteContentTool, WritePosting } from "./write.style";
import { FaFileImage, FaBold, FaUnderline } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImagePreview from "../Preview";

export default function WriteCard() {
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const onSubmit = async (data) => {
    // try {
    //   const response = await axios.post(`http://localhost:8080/board/write`, data, { withCredentials: true });
    //   console.log("서버 응답:", response.data);
    //   console.log("상태 코드:", response.status);
      
    //   if (response.status === 200) {
    //     navigate("/board");
    //   }
    // } catch (error) {
    //   console.error("에러 발생:", error);
    // }
    console.log(data);
  };

  const handleContentChange = (e) => {
    const updatedContent = e.target.innerText;
    setContent(updatedContent);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  return (
    <WriteForm onSubmit={handleSubmit(onSubmit)}>
      <WriteTitle
        placeholder="글 제목을 작성해주세요!"
        type="title"
        {...register("title", { required: "글 제목을 작성해주세요!" })}
      />
      <WriteContentContainer>
        <WriteContent
          placeholder="글 내용을 작성해주세요!"
          type="content"
          contentEditable="true"
          onInput={handleContentChange}
        >
          <ImagePreview images={images} />
        </WriteContent>
        <WriteContentButton>
          <WriteContentTool>
            <label htmlFor="images">
              <FaFileImage />
            </label>
            <input
              id="images"
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onInput={handleImageChange}
              {...register("images")}
            />
            <FaBold />
            <FaUnderline />
            <RxLetterCaseCapitalize />
          </WriteContentTool>
          <WritePosting type="submit">작성</WritePosting>
        </WriteContentButton>
      </WriteContentContainer>
    </WriteForm>
  );
}