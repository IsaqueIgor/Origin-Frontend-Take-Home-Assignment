import React, { useContext } from 'react';

import Context from '../../contexts/Form/FormContext';
import { FormatNumber, StringToNumber } from '../../utils';
import { DolarSign } from '../../styles/icons';
import { Container, IconContainer, InputWrapper } from './styles';

interface Props {
  label: string;
  value: number | undefined;
  updateValue?: (value: number | undefined) => void;
}

const CurrencyInput: React.FC<Props> = ({
  label,
  value: valueFromProp,
  updateValue
}) => {
  const [currentValue, updateCurrentValue] = React.useState<string>(
    valueFromProp ? FormatNumber(valueFromProp) : ''
  );

  const inputField = React.createRef<HTMLInputElement>();
  const { setState } = useContext(Context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;

    if (value === '') {
      updateCurrentValue('');
      return updateValue(undefined);
    }

    const valueAsNumber = StringToNumber(value);

    updateCurrentValue(FormatNumber(valueAsNumber));
    setState({ amount: valueAsNumber });
    return updateValue(valueAsNumber);
  };

  const handleReset = () => {
    inputField.current.focus();
    updateCurrentValue('');
    setState({ amount: 0 });
    return updateValue(undefined);
  };

  return (
    <Container>
      <label>{label}</label>
      <InputWrapper>
        <IconContainer onClick={handleReset}>
          <DolarSign />
        </IconContainer>
        <input
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
