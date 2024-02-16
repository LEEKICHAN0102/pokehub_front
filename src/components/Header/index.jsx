import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container, Content, Group, Item , LogoutButton } from "./style";
import DropDown from "../Dropdown";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Header({ user }) {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    handleSubmit,
  } = useForm({ mode: "onSubmit"})

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/logout", {}, { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  useEffect(() => {
    setDropdownOpen(false)
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
}, [location]);

  return (
    <Container ref={dropdownRef}>
      <Content>
        <Group>
          <Item onClick={toggleDropdown}>
            <GiHamburgerMenu size={24} />
          </Item>
          {isDropdownOpen && <DropDown />}
        </Group>
        <Link to="/">
          <Logo />
        </Link>
        <Group>
          {user.userData ? (
            <Item>
              <Link to={`/profile/${user.userData.user._id}`}>
                <span>
                  {`환영합니다 ${user.userData.user.username}님`}
                </span>
              </Link>
            </Item>
          ) : (
            null
          )}
          <Item>
            {user.userData ? (
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
