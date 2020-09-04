import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: static;
  z-index: 99;
  align-items: center;
  border-bottom: 1px solid rgba(61, 66, 75, 0.07);

  display: flex;
  align-content: center;
  justify-content: flex-start;

  background-color: var(--white);
`;

export const HeaderContent = styled.head`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 800px;
  flex-grow: 1;
  padding: 20px 20px;

  img {
    height: 37px;
  }

  @media (min-width: 600px) {
    padding: 16px;
  }
`;
