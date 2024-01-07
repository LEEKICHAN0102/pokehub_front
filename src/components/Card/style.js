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
  border: 1px solid black;
  border-radius: 10px;
  width: 370px;
  height: 250px;
  border: 3px solid #BFDBFE;
  border-radius: 10px;
`;


export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  width: 100%;
  height: 40px;
  background-color: #BFDBFE;
  border-radius: 5px;
`;

export const MainImage = styled.img`
  width: 70px;
  height: 70px;
  margin: auto;
`;

export const Type = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  background-color: #BFDBFE;
  border-radius: 5px;
`;

export const TypeBox = styled.div`
  width: 100px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colors};
  gap: 10px;
`;

export const TypeImg = styled.img`
  width: 20px;
  height: 20px;
`;