import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 0.5vh;
  flex-direction: column;

  label {
    font-size: 16px;
    display: block;
    font-weight: bold;
    padding: 12px 0 4px 0;
  }

  @media (min-width: 320px) {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  border-radius: 4px;
  border: 0.2px solid var(--gray);

  button {
    width: 20%;
    padding: 0 1.2vw;
    background-color: var(--gray);
    border: none;

    &:disabled {
      cursor: no-drop;
    }
  }

  @media (min-width: 320px) {
    height: 60px;
  }
`;

export const DataField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 20px;
  }
`;
