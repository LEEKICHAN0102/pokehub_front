import {DropdownMenu, DropdownItem, SubDropDown } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DropDown(){
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
          <Link to="/">
            <SubDropDown>
              포켓몬 (전국)
            </SubDropDown>
          </Link>
          <Link to="/items">
            <SubDropDown>
              도구 / 아이템
            </SubDropDown>
          </Link>
          <Link to="/gym-leader">
            <SubDropDown>
              관장 정보
            </SubDropDown>
          </Link>
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