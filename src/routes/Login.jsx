import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthHeader from "../components/authHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { backEndUrl } from "../constant/constant";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onSubmit" });
  const [ errorMessage, setErrorMessage ] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${backEndUrl}/login`, data, { withCredentials: true });
      if (response.status === 200) {
        const checkLoginStatusResponse = await axios.get(`${backEndUrl}/pokemon/1`, { withCredentials: true });
        navigate("/pokemon/1", { state: { user: checkLoginStatusResponse.data.user } });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        console.error("에러 발생:", error);
      }
    }
  };

  return (
    <Container>
      <AuthHeader title="로그인" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder="email"
          type="email"
          autoComplete="current-email"
          {...register("email", { required: "E-mail을 작성해주세요" })}
        />
        <InputField
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          {...register("password", { required: "비밀번호를 작성해주세요." })}
        />
        {errorMessage && <ErrorSpan>{errorMessage}</ErrorSpan>}
        <SubmitButton type="submit">로그인</SubmitButton>
        <Link to="/join">
          <CreateAccount>아직 계정이 없으신가요?</CreateAccount>
        </Link>
      </Form>
    </Container>
  );
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
  margin-top: 130px;
  gap: 5px;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid ${(props) => (props.iserror ? "red" : "gray")};
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

const CreateAccount = styled.div`
  margin-top: 30px;
  color: gray;
  &:hover {
    color: #0d85cc;
  }
  font-size: 16px;
  text-align: center;
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 8px;
  margin-top: 0;
  margin: auto;
`;
