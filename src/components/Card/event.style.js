import styled from "styled-components";

export const EventContainer = styled.div`
  display: grid;
  gap: 30px;
  width: 90%;
  margin: auto;
  margin-top: 10vh;
  @media screen and (min-width: ${props => props.theme.width.mobile}) {
    grid-template-columns: repeat(1, 4fr);
  }

  @media screen and (min-width: ${props => props.theme.width.desktop}) {
    grid-template-columns: repeat(2, 4fr);
  }
  @media screen and (min-width: ${props => props.theme.width.pc}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 300px;
  border: 1px solid #e5e5e5;
  transition: box-shadow 0.3s ease;
  background-color: white;
  padding: 10px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

export const EventImg = styled.img`
  width: 100%;
  height: 60%;
  border: 1px solid #e5e5e5;
`;

export const EventTitle = styled.span`
  margin-top: auto;
  font-size: 16px;
  width: auto;
`;

export const EventInfo = styled.div`
  display: flex;
  margin-top: auto;
  gap: 10px;
  width: auto;
  span{
    font-size: 12px;
    color: gray;
  }
`;

export const MoreInfo = styled.div`
  height: 20vh;
`;

export const InfoText = styled.a`
  span {
    font-size: 16px;
  }
  width: auto;
  height: 70px;
  background-color: #6c757d;
  color: white;
  margin: auto;
  margin-top: 10vh;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
`;