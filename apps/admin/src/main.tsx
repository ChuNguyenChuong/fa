import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';

import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
