import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Mongoose from 'mongoose';
import Bcrypt from 'bcryptjs';
import BodyParser from 'body-parser';
import NodeMailer from 'nodemailer';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

