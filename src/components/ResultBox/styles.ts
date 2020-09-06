import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
`;

export const ResultMonthly = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 32px;
  align-items: center;

  .monthly:after {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-indent: -9999px;
    content: 'Monthly';
  }

  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    color: var(--blue-light);
  }

  @media (min-width: 690px) {
    .monthly:after {
      text-indent: 0;
      content: 'Monthly Amount';
      float: left;
      font-size: 18px;
    }

    h1 {
      font-size: 40px;
    }
  }
`;

export const ResultDescriptionContainer = styled.div`
  background-color: var(--background);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;

  p {
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: 690px) {
    p {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
