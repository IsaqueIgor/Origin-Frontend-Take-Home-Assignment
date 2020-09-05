import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5vh;
  height: 6vh;

  label {
    font-size: 16px;
    display: block;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 5vh;
  border-radius: 4px;

  input {
    padding: 0 1.2vw;
    border: 1px solid var(--gray);
    width: 256px;
    font-size: 20px;
    font-weight: 500;

    &:focus {
      outline: 0;
    }

    @media (min-width: 320px) {
      width: 178px;
    }
  }
  @media (min-width: 320px) {
    height: 45px;
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
