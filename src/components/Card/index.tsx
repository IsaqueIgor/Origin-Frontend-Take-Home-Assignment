import React from 'react';

import { CardContainer, CardHeader } from './styles';
import { AcademyIcon } from '../../styles/icons';

type IProps = {
  children?: any;
};

const Card: React.FC = ({ children }: IProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <AcademyIcon width={40} height={40} />
        <h1>College Fund</h1>
        <p>Saving goal</p>
      </CardHeader>
      {children}
    </CardContainer>
  );
};

export default Card;
