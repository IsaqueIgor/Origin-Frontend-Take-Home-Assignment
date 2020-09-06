import React, { useState } from 'react';
import FormContext from '../../contexts/Form/FormContext';

import {
  Header,
  Card,
  Button,
  Result,
  CurrencyInput,
  MonthSelect
} from '../../components';

import { Container, Content, InputSection } from './styles';

const SavingGoal: React.FC = () => {
  const [state, setState] = useState({
    year: 2021,
    month: 'October',
    amount: 25000
  });

  return (
    <Container>
      <Header />

      <Content>
        <span>
          Let&apos;s plan your <strong>saving goal.</strong>
        </span>
        <Card>
          <FormContext.Provider
            value={{
              ...state,
              setState: data => setState({ ...state, ...data })
            }}
          >
            <InputSection>
              <CurrencyInput label="Total Amount" value={state.amount} />
              <MonthSelect />
            </InputSection>
            <Result />
            <Button>Confirm</Button>
          </FormContext.Provider>
        </Card>
      </Content>
    </Container>
  );
};

export default SavingGoal;
