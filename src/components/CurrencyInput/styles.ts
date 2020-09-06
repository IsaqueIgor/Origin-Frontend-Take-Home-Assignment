import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5vh;

  label {
    font-size: 16px;
    font-weight: bold;
    display: block;
    padding: 12px 0 4px 0;
  }

  @media (min-width: 320px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  padding-right: 0;

  input {
    border: 1px solid var(--gray);
    width: 90%;
    font-size: 20px;
    font-weight: bold;

    &:focus {
      outline: 0;
    }

    @media (min-width: 320px) {
      width: 80%;
      padding: 0 20px;
    }
  }
  @media (min-width: 320px) {
    height: 60px;
    padding-right: 16px;
  }
`;

export const IconContainer = styled.div`
  flex: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 46px;
  border: 1px solid var(--gray);
  background: var(--background);

  &:hover {
    cursor: pointer;
  }
`;
