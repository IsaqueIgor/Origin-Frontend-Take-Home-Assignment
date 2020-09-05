import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 45px;
  margin-top: 0.5vh;
  flex-direction: column;
  width: 256px;

  label {
    font-size: 16px;
    display: block;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 6vh;
  border-radius: 4px;
  border: 0.6px solid var(--gray);

  button {
    width: 48px;
    padding: 0 1.2vw;
    background-color: var(--gray);
    border: none;
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
