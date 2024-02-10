import styled from "styled-components";
import pikachuRun from "../../assets/Loading/pikachuRun.webp";


export default function Loader(){
  return(
    <CenteredContainer>
      <SpinnerComponent src={`${pikachuRun}`} />
      <span>초기 로딩시 시간이 걸릴 수 있습니다...</span>
    </CenteredContainer>
  )
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  span{
    color: gray;
  }
`;

const SpinnerComponent = styled.img`
  width: 250px;
  height: 250px;
`;