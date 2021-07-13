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

  const frutas = [
    { label: "Maçãs", value: "Maçãs" },
    { label: "Bananas", value: "Bananas" },
    { label: "Laranjas", value: "Laranjas" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
        <SelectInput options={frutas} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
