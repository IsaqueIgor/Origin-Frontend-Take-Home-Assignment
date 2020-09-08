import React, { useContext } from 'react';
import moment from 'moment'; //Maybe its heavier for my simple operation

import Context from '../../contexts/Form/FormContext';

import {
  ResultContainer,
  ResultMonthly,
  ResultDescriptionContainer
} from './styles';

type Props = {
  month: string;
  year: number;
  amount: number;
};

const Result: React.FC<Props> = ({ year, month, amount }: Props) => {
  const futureDate = new Date(`${year}-${month}-01`);
  const currentDate = new Date().toISOString().split('T')[0];

  const diff = moment(futureDate).diff(currentDate, 'month') + 1;

  const result = (amount / diff).toFixed(2);

  return (
    <ResultContainer>
      <ResultMonthly>
        <div className="monthly"></div>
        <h1 data-testid="result">${result}</h1>
      </ResultMonthly>
      <ResultDescriptionContainer>
        <p>
          You’re planning
          <strong>{` ${diff} `} monthly deposits </strong> to reach your
          <strong>{` $ ${amount} `}</strong> goal by{' '}
          <strong>{` ${month} ${year}`}</strong>
        </p>
      </ResultDescriptionContainer>
    </ResultContainer>
  );
};

export default Result;
