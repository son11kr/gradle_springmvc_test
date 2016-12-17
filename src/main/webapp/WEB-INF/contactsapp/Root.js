import React, { Component } from 'react';
import ContactsAppContainer from './ContactsAppContainer';
import 'whatwg-fetch';
import 'babel-polyfill';

React.render(<ContactsAppContainer />, document.getElementById('root'));