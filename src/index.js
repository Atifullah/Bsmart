import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import rootReducer from './reducer/rootreducer';
import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider  } from './context/CartContext';
import './index.css';
import App from './App';


const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </CategoriesProvider> 
    </UserProvider>

    </BrowserRouter>


  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
