// React Npm Module
import React from 'react';

// Module for react to interact with the DOM
// 'react-dom' has several Methods but we only want render
// We can now render to the dom
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';
import App from './components/App';

import "./css/style.css";

// 2 Parameters ([JSX - ~HMTL] , [Mounting Point - Actual Dom Element])
render(<App/>, document.querySelector('#main'));

