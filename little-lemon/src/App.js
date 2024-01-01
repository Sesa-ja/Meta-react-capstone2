import React from 'react';
import HeaderComponent from './HeaderComponent';
import Navigation from './Navigation';
//import Main from './Main';
import FooterPage from './FooterPage';
import NavigationMenu from './NavigationMenu';
//import BookingFormComponent from './BookingFormComponent';

const App = () => {
  return (
    <>
      <Navigation />
      <HeaderComponent/>
      {/*<BookingFormComponent/>*/}
      <NavigationMenu/>
      {/*<Main />*/}
      <FooterPage />
    </>
  );
};

export default App;
