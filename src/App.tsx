import * as React from 'react';
import GlobalStyles from './styles/global';

import SavingGoal from './pages/SavingGoal';

const App: React.FunctionComponent = () => {
  return (
    <>
      <SavingGoal />
      <GlobalStyles />
    </>
  );
};

export default App;
