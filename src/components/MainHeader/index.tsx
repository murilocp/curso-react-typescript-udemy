import React, { useMemo } from "react";

import emojis from "../../utils/emojis";

import Toggle from "../../components/Toggle";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);
  return (
    <Container>
      <h1>
        <Toggle />
      </h1>
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Murilo</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
