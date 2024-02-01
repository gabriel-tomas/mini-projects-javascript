import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyles, { Main } from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Main>
            <Routes />
            <GlobalStyles />
          </Main>
          <ToastContainer autoClose={2500} className="toast-container" />
          <Footer />
          <Nav />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
