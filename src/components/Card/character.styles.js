import styled from "styled-components";

export const Title = styled.h1`
  font-size:36px;
  font-weight: 600px;
  margin: auto;
  width: 90%;
  margin-top: 50px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr); /* 3 columns */
  gap: 20px;
  width: 90%;
  margin: auto;
  margin-top: 100px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 370px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  transition: box-shadow 0.3s ease;
  background: ${(props) =>
      `linear-gradient(to bottom, ${props.color}, rgba(255, 255, 255, 0))`};

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
  font-weight: bold;
  width: 100px;
  height: 30px;
  background-color: #e5e5e5;
  border-radius: 20px;
  color: black;
`;

export const BadgeBox = styled.img`
  width: 30px;
  height: 30px;
`;

export const InGameImage = styled.img`
  width: 130px;
  height: 110px;
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