import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
