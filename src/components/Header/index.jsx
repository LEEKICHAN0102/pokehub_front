import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";

import { GiHamburgerMenu } from "react-icons/gi";

import { Container, Content, Group, Item } from "./style";
import DropDown from "../Dropdown";

export default function Header() {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Container ref={dropdownRef}>
      <Content>
        <Group>
          <Item onClick={toggleDropdown}>
            <GiHamburgerMenu size={24} />
          </Item>
          {isDropdownOpen && (
            <DropDown />
          )}
        </Group>
        <Link to="/page/1">
          <Logo />
        </Link>
        <Group>
          <Item>
            <Link to="/login">로그인</Link>
          </Item>
        </Group>
      </Content>
    </Container>
  );
}