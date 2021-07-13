import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { Container, Content, Filters } from "./styles";

const List: React.FC = () => {
  const months = [
    { label: "Julho", value: 7 },
    { label: "Agosto", value: 8 },
    { label: "Setembro", value: 9 },
  ];

  const years = [
    { label: 2020, value: 2020 },
    { label: 2019, value: 2019 },
    { label: 2018, value: 2018 },
  ];
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#F7931B">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventuals">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44c4e"
          title="Conta de Luz"
          subtitle="27/07/2021"
          amount="R$ 130,58"
        />
        <HistoryFinanceCard
          tagColor="#E44c4e"
          title="Conta de Luz"
          subtitle="27/07/2021"
          amount="R$ 130,58"
        />
      </Content>
    </Container>
  );
};

export default List;
