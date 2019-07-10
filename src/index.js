import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import CounterStore from './stores/counter.js';

const counter = new CounterStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
    <Provider counter={counter}>
      {/* Provider 에 props 로 넣어줍니다. */}
      <App />
    </Provider>,
    document.getElementById('root')
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
