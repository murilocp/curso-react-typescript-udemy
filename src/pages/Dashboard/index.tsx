import React from "react";
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    { label: "Ana", value: "Ana" },
    { label: "Rodrigo", value: "Rodrigo" },
    { label: "Mary", value: "Mary" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={options}
          onChange={(e) => console.log(e.target.value)}
        />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
