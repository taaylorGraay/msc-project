import React from 'react';
import Header from './components/shared/Header';
import AppRoutes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { initStore } from './store';

const store = initStore();
const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </Provider>
  )
}

export default App;