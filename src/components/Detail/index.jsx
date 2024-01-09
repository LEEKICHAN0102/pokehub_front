import styled from "styled-components";
import { useParams } from "react-router-dom";
import useDetailPokemon from "../../hooks/Pokemon/useDetail";

import { IoMale,IoFemale } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useState } from "react";

export default function DetailPokemon() {
  const id = useParams().id;
  const { data, isLoading } = useDetailPokemon(id);
  console.log(data);

  const [showAbilityDescription, setShowAbilityDescription] = useState(false);
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(null);

  // const handleMouseEnter = (index) => {
  //   setShowAbilityDescription(true);
  //   setCurrentAbilityIndex(index);
  // };

  // const handleMouseLeave = () => {
  //   setShowAbilityDescription(false);
  //   setCurrentAbilityIndex(null);
  // };

  const getGenderIcon = () => {
    if (data.gender && data.gender.type === "isBoth") {
      return (
        <>
          <IoMale size={24} color="#468ee6" />
          <IoFemale size={24} color="#ed4dd2" />
        </>
      )
    } else if (data.gender && data.gender.type === "isMale") {
      return <IoMale size={24} color="#468ee6" />;
    } else if (data.gender && data.gender.type === "isFemale") {
      return <IoFemale size={24} color="#ed4dd2" />;
    } else {
      return "무성";
    }
  };

  return(
    <>
      {/* <Navigation>
        <PrevNav></PrevNav>
        <NextNav>gdgd</NextNav>
      </Navigation> */}
      <Container>
        <Official src={`${data.official}`} />
        <Info>
          <span>No. {id}</span>
          <Name></Name>
          <Description>{data.description}</Description>
          <MoreInfo>
            <Content>
              <span>타입</span>
              {}
            </Content>
            <Content>
              <span>신장</span>
              {data.height}m
            </Content>
            <Content>
              <span>분류</span>
              {data.genus}
            </Content>
            <Content>
              <span>성별</span>
              {getGenderIcon()}
            </Content>
            <Content>
              <span>무게</span>
              {data.weight}kg
            </Content>
            <Content>
              <span>능력</span>
              {data.ability && data.ability.length > 0 ? (
                <ul>
                  {data.ability.map((ability, index) => (
                    <>
                      <li key={index}>
                        {ability}
                        <AiFillQuestionCircle size={12} color="gray" />
                      </li>
                    </>
                  ))}
                </ul>
              ) : (
                "이 포켓몬은 능력이 없습니다."
              )}
            </Content>
          </MoreInfo>
        </Info>
      </Container>
    </>
  )
}

// export const Navigation = styled.div`
//   width: 100%;
//   height: 30%;
//   background-color: #434040;
//   z-index: 0;
//   position: absolute;
//   margin-top: 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const PrevNav = styled.div`
//   width: 49%;
//   height: 100%;
// `;

// export const NextNav = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: flex-end;
// `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  z-index: 10;
  position: relative;
  margin-top: 100px;
  height: 70vh;
  border-radius: 20px;
  border: 1px solid black;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Official = styled.img`
  width: 300px;
  height: 300px;
`;

export const Info = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  span{
    color: gray;
    font-size: 16px;
  }
`;

export const Name = styled.h1`
  font-size: 24px;
`;

export const Description = styled.h4`
  margin-top: 50px;
`;

export const MoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 50px;
  margin: auto;
  margin-top: 50px;
  width: 100%;
  border: 1px solid #d0d4d2ed;
  border-radius: 10px;
  padding: 30px;
  span{
    font-size: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
