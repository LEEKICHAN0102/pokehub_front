import {DropdownMenu, DropdownItem, SubDropDown, SubDropDownChild } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DropDown(){
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isGymDropdownOpen, setGymDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleGymDropdown = () => {
    setGymDropdownOpen(!isGymDropdownOpen);
  }

  return (
    <DropdownMenu>
      <DropdownItem onClick={toggleDropdown}>
        도감
        {isDropdownOpen ? (
          <IoIosArrowUp size={16} />
        ) : (
          <IoIosArrowDown size={16} />
        )}
      </DropdownItem>

      {isDropdownOpen && (
        <>
          <Link to="/page/1">
            <SubDropDown>
              포켓몬 (전국)
            </SubDropDown>
          </Link>
          <Link to="item/1">
            <SubDropDown>
              도구 / 아이템
            </SubDropDown>
          </Link>
            <SubDropDown onClick={toggleGymDropdown} >
              인물
              {isGymDropdownOpen ? (
                <IoIosArrowUp size={16} />
              ) : (
                <IoIosArrowDown size={16} />
              )}
            </SubDropDown>
            {isGymDropdownOpen && (
              <>
                <Link to="/gym-leader">
                  <SubDropDownChild>
                    체육관 관장
                  </SubDropDownChild>
                </Link>
                <Link to="/elite-four">
                  <SubDropDownChild>
                    사천왕
                  </SubDropDownChild>
                </Link>
                <Link to="/champion">
                  <SubDropDownChild>
                    챔피언
                  </SubDropDownChild>
                </Link>
              </>
            )}
        </>
      )}

      <Link to="/board">
        <DropdownItem>
          게시판
        </DropdownItem>
      </Link>
      <Link to="/event">
        <DropdownItem>
          이벤트
        </DropdownItem>
      </Link>
    </DropdownMenu>
  );
}