import React, { useContext } from 'react';

import Context from '../../contexts/Form/FormContext';
import { FormatNumber, StringToNumber } from '../../utils';
import { DolarSign } from '../../styles/icons';
import { Container, IconContainer, InputWrapper } from './styles';

interface Props {
  label: string;
  value: number | undefined;
}

const CurrencyInput: React.FC<Props> = ({ label, value: valueFromProp }) => {
  const { setState } = useContext(Context);

  const [currentValue, updateCurrentValue] = React.useState<string>(
    valueFromProp ? FormatNumber(valueFromProp) : ''
  );

  const inputField = React.createRef<HTMLInputElement>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;

    if (value === '') {
      updateCurrentValue('');
    }

    const valueAsNumber = StringToNumber(value);

    updateCurrentValue(FormatNumber(valueAsNumber));
    setState({ amount: valueAsNumber });
  };

  const handleReset = () => {
    inputField.current.focus();
    updateCurrentValue('');
    setState({ amount: 0 });
  };

  return (
    <Container>
      <label>{label}</label>
      <InputWrapper>
        <IconContainer onClick={handleReset}>
          <DolarSign />
        </IconContainer>
        <input
          data-testid="currency-input"
          ref={inputField}
          type="text"
          value={currentValue}
          onChange={handleChange}
        />
      </InputWrapper>
    </Container>
  );
};

export default CurrencyInput;

//TO DO: Quando clicar no simbolo dolar, resetar valor para default
