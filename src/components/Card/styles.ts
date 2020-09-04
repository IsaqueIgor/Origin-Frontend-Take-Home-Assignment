import styled from 'styled-components';

export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 500px;
  padding: 40px;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
  background-color: var(--white);

  @media (min-width: 600px) {
    padding: 48px 40px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
    color: var(--gray-strong);
  }
`;
