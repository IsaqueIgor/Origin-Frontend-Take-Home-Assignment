import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  @media all and (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  span {
    color: var(--blue-strong);
    font-size: 24px;
    letter-spacing: -0.2px;
    padding: 24px;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 36px 0;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
