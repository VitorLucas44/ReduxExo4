import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/NavBar';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;