import styled from 'styled-components';

export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  height: auto;
  max-width: 62rem;
  padding: 4rem;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
  background-color: var(--white);

  @media (min-width: 600px) {
    padding: 48px 40px;
    width: 100%;
    h1 {
      font-size: 3.2rem;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;

  h1 {
    font-size: 3.2rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--gray-strong);
  }
`;
