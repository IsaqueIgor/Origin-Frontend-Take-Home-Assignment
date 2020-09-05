import React, { useContext } from 'react';
import Context from '../../contexts/Form/FormContext';
import { ArrowIcon } from '../../styles/icons';

import { Container, SelectWrapper, DataField } from './styles';

const MonthSelect: React.FC = () => {
  const { month, year } = useContext(Context);

  return (
    <Container>
      <label>Reach goal by </label>
      <SelectWrapper>
        <button>
          <ArrowIcon height={26} width={8} />
        </button>
        <DataField>
          <h1>{month}</h1>
          <p>{year}</p>
        </DataField>
        <button>
          <ArrowIcon height={26} width={8} transform={'rotate(180)'} />
        </button>
      </SelectWrapper>
    </Container>
  );
};

export default MonthSelect;
