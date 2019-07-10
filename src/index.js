import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/counter';
import MarketStore from './stores/market'

const counter = new CounterStore(); // 스토어 인스턴스를 만들고
const market = new MarketStore();

ReactDOM.render(
    <Provider counter={counter} market={market}>
      {/* Provider 에 props 로 넣어줍니다. */}
      <App />
    </Provider>,
    document.getElementById('root')
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
