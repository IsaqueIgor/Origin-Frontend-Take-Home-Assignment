import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--blue-strong);
  color: var(--white);
  font-weight: 500;
  margin-top: 16px;
  box-shadow: 1px 1px 5px 0 rgba(27, 49, 167, 0.2);
  border-radius: 2rem;
  border: 0;
  padding: 0 16px;
  align-self: center;
  height: 56px;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background-color: #000;
    box-shadow: 3px 3px 11px 0 rgba(1, 58, 117, 0.33);
    -webkit-transform: translate(0, -5px);
    -ms-transform: translate(0, -5px);
    transform: translate(0, -5px);
  }
`;
