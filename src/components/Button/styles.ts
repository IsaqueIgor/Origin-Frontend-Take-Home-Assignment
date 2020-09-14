import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--blue-strong);
  color: var(--white);
  font-weight: 500;
  margin-top: 1.6rem;
  box-shadow: 1px 1px 5px 0 rgba(27, 49, 167, 0.2);
  border-radius: 2rem;
  border: 0;
  padding: 0 1.6rem;
  align-self: center;
  height: 5.6rem;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background-color: #000;
    box-shadow: 0.3rem 0.3rem 1.1rem 0 rgba(1, 58, 117, 0.33);
    -webkit-transform: translate(0, -5px);
    -ms-transform: translate(0, -5px);
    transform: translate(0, -5px);
  }
`;
