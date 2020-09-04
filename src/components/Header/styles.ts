import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;

  z-index: 99;
  border-bottom: 1px solid rgba(61, 66, 75, 0.07);
  width: 100%;
  padding: 10px;
  background-color: var(--white);

  @media all and (min-width: 600px) {
    padding: 18px;
  }
`;
