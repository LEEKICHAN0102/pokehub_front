import { useForm  } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/authHeader";
import { useState } from "react";
import { backEndUrl } from "../constant/constant";

export default function Join(){
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: "onChange"});
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageUserName, setErrorMessageUsername] = useState("");

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${backEndUrl}/join`, data);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessageUsername(error.response.data);
      }else if (error.response && error.response.status === 401) {
        setErrorMessage(error.response.data);
      } else {
        console.error("에러 발생:", error);
      }
    }
  };

  return(
    <Container>
      <AuthHeader title="회원 가입" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          iserror={errors.username}
          placeholder="닉네임"
          autoComplete="new-username"
          {...register(
            "username",
            {
              required: "사용할 유저명을 입력해주세요",
              pattern: {
                value: /^[\wㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/,
                message: "공백을 포함하지 않은 영,한문 8자리의 닉네임만이 사용 가능 합니다."
              }
            }
          )}
        />
        {errors.username && <ErrorSpan>{errors.username.message}</ErrorSpan>}
        {errorMessageUserName && <ErrorSpan>{errorMessageUserName}</ErrorSpan>}
        <InputField
          type="email"
          placeholder="E-mail"
          autoComplete="new-Email"
          iserror={errors.email}
          {...register(
            "email",
            {
              required: "이메일을 입력해주세요",
              pattern: { 
                value: /\S+@\S+\.\S+/, 
                message: "올바른 이메일 형식이 아닙니다."
              },
            }
          )}
        />
        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        {errorMessage && <ErrorSpan>{errorMessage}</ErrorSpan>}
        <InputField
          type="password"
          placeholder="비밀 번호"
          autoComplete="new-password"
          iserror={errors.password}
          {...register(
            "password",
            {
              required: "비밀번호를 입력해주세요",
              minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다."},
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: "하나 이상의 특수 문자가 포함되어야 합니다.",
              },
            }
          )}
        />
        {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
        <InputField
          type="password"
          placeholder="비밀 번호 재확인"
          autoComplete="new-password"
          iserror={errors.password_confirm}
          {...register(
            "password_confirm",
            {
              required: "비밀번호 재확인을 입력해주세요",
              validate: (value) => value === password || "비밀번호가 일치하지 않습니다.",
            }
          )}
        />
        {errors.password_confirm && <ErrorSpan>{errors.password_confirm.message}</ErrorSpan>}
        <SubmitButton type="submit">회원 가입</SubmitButton>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding-bottom: 150px;
  span {
    color: red;
    font-size: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 5px;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid ${({ iserror }) => (iserror ? "red" : "gray")};
  border-radius: 10px;
  width: auto;
  height: 50px;
  font-size: 24px;
  outline: none;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #109ceb;
  color: white;
  width: auto;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #0d85cc;
  }
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 8px;
  margin-top: 0;
  margin: auto;
`;
