/*안써도 되는 페이지, 17번째 줄만 Post,App,Test으로 변경 */
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>

      <App />

    </StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();