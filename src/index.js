import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Counters from './components/counters';
// import HelloWorld from './components/helloworld';
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from './components/counter';
import Fidma from "./components/fidma/fidma";
// import Navbar from './components/navbar';
// import Home from './components/home';
// import Carousel from './components/carousel';
// import Carousel1 from './components/carousel1';
import { Provider } from "react-redux";
import store from './components/fidma/store/poststore';
// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk'

// const initState = {
//   posts: []
// };
// const rootReducer = (state = initState, action) => {
//   return state;
// };
// const store = createStore(rootReducer, applyMiddleware(thunk));

// const action = {type:'CREATE_POST', payload:data}

// store.dispatch(action)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Fidma />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
