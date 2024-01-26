import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthHeader from "../components/authHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import socialIcons from "../styles/socialIcons";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/login`, data, { withCredentials: true });
      console.log("서버 응답:", response.data);
      console.log("상태 코드:", response.status);
      
      if (response.status === 200) {
        // 로그인 성공 시, 세션 정보를 확인하는 요청을 보냄
        const checkLoginStatusResponse = await axios.get("http://localhost:8080/page/1", {
          withCredentials: true,
        });
  
        console.log("로그인 상태 확인:", checkLoginStatusResponse.data);
  
        navigate("/page/1", { state: { user: checkLoginStatusResponse.data.user } });
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <Container>
      <AuthHeader title="로그인" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder="email"
          type="email"
          {...register("email", { required: "E-mail을 작성해주세요" })}
        />
        <InputField
          placeholder="Password"
          type="password"
          {...register("password", { required: "비밀번호를 작성해주세요." })}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
        <Link to="/join">
          <CreateAccount>아직 계정이 없으신가요?</CreateAccount>
        </Link>
      </Form>
    </Container>
  );
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
  margin-top: 130px;
  gap: 5px;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid ${(props) => (props.iserror ? "red" : "gray")};
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

const CreateAccount = styled.div`
  margin-top: 30px;
  color: gray;
  &:hover {
    color: #0d85cc;
  }
  font-size: 16px;
  text-align: center;
`;

// const SocialLoginBox = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 100px;
// `;

// const SocialImg = styled.div`
//   cursor: pointer;
//   img{
//     width: 90px;
//     height: 90px;
//     border-radius: 20px;
//     border: 1px solid gray;
//   }
// `;