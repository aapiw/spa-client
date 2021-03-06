import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import store from './store';


ReactDOM.render(
<BrowserRouter>
	<Provider store={store}>
		<App />
	</Provider>
</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();