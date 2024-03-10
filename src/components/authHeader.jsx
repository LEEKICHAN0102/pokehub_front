import { IoIosArrowBack, IoIosHome  } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AuthHeader({ title }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Icons>
        <IoIosArrowBack 
          size={24} 
          onClick={()=>navigate(-1)}
        />
        <Link to="/pokemon/1">
          <IoIosHome size={24} />
        </Link>
      </Icons>
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  h1 {
    text-align: center;
    margin-top: 27px;
  }
`;

const Icons = styled.div`
  width: 100%;
  max-width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: #676767;
    cursor: pointer;
  }
`;