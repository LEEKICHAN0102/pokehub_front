import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import useUserData from "../hooks/user/useUserData";

const Container = styled.div`
  width: 90%;
  min-height: 110vh;
  margin: 0 auto;
`;

export default function Layout() {
  const { user } = useUserData();
  const outletProps = { user };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Container>
      <Header user={user} />
      <Outlet context={outletProps} />
    </Container>
  );
}