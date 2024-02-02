import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container, Content, Group, Item , LogoutButton } from "./style";
import DropDown from "../Dropdown";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Header() {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const {
    handleSubmit,
  } = useForm({ mode: "onSubmit"})

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLogout = async (userData) => {
    try {
      await axios.post("http://localhost:8080/logout", userData, { withCredentials: true });
      setIsLoggedIn(false);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:8080/page/1", { withCredentials: true });
        console.log("서버 응답:", response.data);
        setUsername(response.data.user.username);
        setUserId(response.data.user._id);
        setIsLoggedIn(true);
      } catch (error) {
        console.log("로그인 되지 않았습니다.", error);
        setIsLoggedIn(false);
    }
  };
  
    document.addEventListener("click", handleClickOutside);
    checkLoginStatus(); // 이 부분을 옮겨서 마운트 시에 호출하도록 변경
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Container ref={dropdownRef}>
      <Content>
        <Group>
          <Item onClick={toggleDropdown}>
            <GiHamburgerMenu size={24} />
          </Item>
          {isDropdownOpen && <DropDown />}
        </Group>
        <Link to="/page/1">
          <Logo />
        </Link>
        <Group>
          {isLoggedIn ? (
            <Item>
              <Link to={`/profile/${userId}`}>
                <span>{`환영합니다 ${username}님`}</span>
              </Link>
            </Item>
          ) : (
            null
          )}
          <Item>
            {isLoggedIn ? (
              <LogoutButton 
                onClick={handleSubmit(handleLogout)}
                type="button"
                value="로그아웃"
              />
            ) : (
                <Link to="/login">로그인</Link>
            )}
          </Item>
        </Group>
      </Content>
    </Container>
  );
}
