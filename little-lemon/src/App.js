import React from 'react';
import HeaderComponent from './HeaderComponent';
import Navigation from './Navigation';
//import Main from './Main';
import FooterPage from './FooterPage';

const App = () => {
  return (
    <>
      <Navigation />
      <HeaderComponent/>
      {/*<Main />*/}
      <FooterPage />
    </>
  );
};

export default App;
