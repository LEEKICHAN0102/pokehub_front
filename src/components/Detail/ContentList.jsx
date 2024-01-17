import { IoMale,IoFemale } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Content, GenderBox } from "./style";
import ModalComponent from "../Modal";
import { useEffect, useState } from "react";

export default function ContentList({data}){
  const gender = data.gender;

  const isGender = () => {
    if (gender && gender.type === "isBoth") {
      return (
        <GenderBox>
          <IoMale size={24} color="#468ee6" />
          <IoFemale size={24} color="#ed4dd2" />
        </GenderBox>
      )
    } else if (gender && gender.type === "isMale") {
      return <IoMale size={24} color="#468ee6" />;
    } else if (gender && gender.type === "isFemale") {
      return <IoFemale size={24} color="#ed4dd2" />;
    } else {
      return "무성";
    }
  }

  return (
    <>
      <Content>
        <span>등급</span>
        {data.class}
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
        {isGender(gender)}
      </Content>
      <Content>
        <span>무게</span>
        {data.weight}kg
      </Content>
      <Content>
        <span>능력</span>
        {data.ability && data.ability.length > 0 ? (
          <>
            {data.ability.map((ability, index) => (
              <li key={index}>
                {ability}
                <AiFillQuestionCircle
                  size={16}
                  color="gray"
                  cursor={"pointer"}
                />
              </li>
            ))}
          </>
        ) : (
          "알 수 없음"
        )}
      </Content>
    </>
  )};
