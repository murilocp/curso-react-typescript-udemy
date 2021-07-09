import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const List: React.FC = () => {
  const options = [
    { label: "Ana", value: "Ana" },
    { label: "Rodrigo", value: "Rodrigo" },
    { label: "Dunha", value: "Dunha" },
  ];

  const frutas = [
    { label: "Maçãs", value: "Maçãs" },
    { label: "Bananas", value: "Bananas" },
    { label: "Laranjas", value: "Laranjas" },
  ];
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#F7931B">
        <SelectInput options={options} />
        <SelectInput options={frutas} />
      </ContentHeader>
    </Container>
  );
};

export default List;
