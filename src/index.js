import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// This is for HMR (Hot Module Replacement), to reload the page without need to reload the browser
if (module.hot) {
  module.hot.dispose(() => {
    // module is about to be replaced
  });
  module.hot.accept(() => {
    // module or one of its dependencies was just updated
  });
}
