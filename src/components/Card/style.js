import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr); /* 3 columns */
  gap: 20px;
  width: 90%;
  margin: auto;
  margin-top: 50px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: auto;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  transition: box-shadow 0.3s ease;
  background: ${(props) =>
    props.color.length > 1
      ? `linear-gradient(to bottom, ${props.color}, rgba(255, 255, 255, 0));`
      : `linear-gradient(to bottom, ${props.color}, rgba(255, 255, 255, 0))`};

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: auto;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  transition: box-shadow 0.3s ease;
  background-color: #AECD8C;
  padding: 10px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 20px;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 20px;
  height: 30px;
  background-color: #e5e5e5;
  border-radius: 20px;
  color: black;
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: auto;
  padding: 10px;
  height: 30px;
  background-color: #e5e5e5;
  border-radius: 20px;
  color: black;
  &:hover{
    cursor: pointer;
  }
`;

export const MainImage = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
`;

export const Type = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TypeBox = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  gap: 10px;
`;

export const TypeImg = styled.img`
  width: 20px;
  height: 20px;
`;