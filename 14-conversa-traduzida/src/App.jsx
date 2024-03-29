import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import store, { persistor } from './store';
import GlobalStyles, { Main } from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Main>
            <Routes />
          </Main>
          <GlobalStyles />
          <ToastContainer autoClose={2500} className="toast-container" />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
