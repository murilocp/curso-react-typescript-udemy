import React, { useMemo, useState, useEffect } from "react";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../database/gains";
import expenses from "../../database/expenses";

import { Container, Content, Filters } from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

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
interface IListProps {
  match: {
    params: {
      type: string;
    };
  };
}

interface IListData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IListProps> = ({ match }) => {
  const [data, setData] = useState<IListData[]>([]);

  const { type } = match.params;

  const pageType = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#f7931b" }
      : { title: "Saídas", lineColor: "#E44c4e" };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const response = listData.map((item) => ({
      id: String(Math.random() * listData.length),
      description: item.description,
      amountFormatted: formatCurrency(Number(item.amount)),
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#E44c4e",
    }));

    setData(response);
  }, [listData]);

  return (
    <Container>
      <ContentHeader title={pageType.title} lineColor={pageType.lineColor}>
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
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
