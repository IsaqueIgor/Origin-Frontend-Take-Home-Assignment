import React, { useContext, useState } from 'react';
import Context from '../../contexts/Form/FormContext';
import { ArrowIcon } from '../../styles/icons';

import { Container, SelectWrapper, DataField } from './styles';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const MonthSelect: React.FC = () => {
  const [isDisable, setIsDisable] = useState(false);
  const { month, year, setState } = useContext(Context);

  const oldMonth = months.indexOf(month);
  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth() + 1];
  const currentYear = currentDate.getUTCFullYear();

  function handleDecrement(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    if (year === currentYear && month === currentMonth) {
      console.log(isDisable);
      setIsDisable(true);
    } else if (month === months[0]) {
      setState({ month: months[11], year: year - 1 });
    } else {
      const newMonth = oldMonth - 1;
      setState({ month: months[newMonth] });
    }
  }

  function handleIncrement(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    setIsDisable(false);

    if (month === months[11]) {
      setState({ month: months[0], year: year + 1 });
    } else {
      const newMonth = oldMonth + 1;
      setState({ month: months[newMonth] });
    }
  }

  return (
    <Container>
      <label>Reach goal by </label>
      <SelectWrapper>
        <button disabled={isDisable} onClick={handleDecrement}>
          <ArrowIcon height={26} width={8} />
        </button>
        <DataField>
          <h1>{month}</h1>
          <p>{year}</p>
        </DataField>
        <button onClick={handleIncrement}>
          <ArrowIcon height={26} width={8} transform={'rotate(180)'} />
        </button>
      </SelectWrapper>
    </Container>
  );
};

export default MonthSelect;
