import { useForm  } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/authHeader";

export default function Join(){
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: "onChange"});

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/join`, data);
      console.log("서버 응답:", response.data);
      console.log("상태 코드:", response.status);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return(
    <Container>
      <AuthHeader title="회원 가입" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          iserror={errors.username}
          placeholder="닉네임"
          {...register(
            "username",
            {required: "사용할 유저명을 입력해주세요"}
          )}
        />
        {errors.username && <ErrorSpan>{errors.username.message}</ErrorSpan>}
        <InputField
          type="email"
          placeholder="E-mail"
          iserror={errors.email}
          {...register(
            "email",
            {
              required: "이메일을 입력해주세요",
              pattern: { 
                value: /\S+@\S+\.\S+/, 
                message: "올바른 이메일 형식이 아닙니다."  // 이메일 validate RegExp
              },
            }
          )}
        />
        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        <InputField
          type="password"
          placeholder="비밀 번호"
          iserror={errors.password}
          {...register(
            "password",
            {
              required: "비밀번호를 입력해주세요",
              minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다."},
              pattern: {
                value: /^(?=.*[!@#$%^&*])/, // 최소 하나의 특수 문자가 포함된 경우
                message: "하나 이상의 특수 문자가 포함되어야 합니다.",
              },
            }
          )}
        />
        {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
        <InputField
          type="password"
          placeholder="비밀 번호 재확인"
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
  width: 438px;
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
  border: 1px solid ${props => (props.iserror ? "red" : "gray")};
  border-radius: 10px;
  width: 430px;
  height: 50px;
  font-size: 24px;
  outline: none;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #109ceb;
  color: white;
  width: 430px;
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
`;
