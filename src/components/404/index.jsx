import { 
  FourOFourContainer, FourOFourMain, FourOFourBack,
} from "./style";

import { useNavigate } from "react-router-dom";

export default function FourOFour() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  }

  return(
    <FourOFourContainer>
      <FourOFourMain>
        404
      </FourOFourMain>
      <span>페이지가 존재 하지 않습니다...</span>
      <span>The Page You Requested Could Not Be Found...</span>
      <FourOFourBack onClick={handleBack}>
        <span>이전 페이지로 돌아가기</span>
      </FourOFourBack>
    </FourOFourContainer>
  )
}
