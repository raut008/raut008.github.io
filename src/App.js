import React from 'react';
import { Provider } from "react-redux";
import store from "./Store"
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <NavBar />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
