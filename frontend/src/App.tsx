import React from 'react';
import './App.css';
import { Footer } from './stories/Footer/Footer';
import MSAHeader from './stories/MSAHeader/MSAHeader';
import MSASubmitForm from './stories/MSASubmitForm/MSASubmitForm';

import { Route, Switch } from 'react-router';
import { HomePage } from '../src/ExamplePages/HomePage';
import { SubmitPage } from '../src/ExamplePages/SubmitPage';

function App() {
  return <div>
    <MSAHeader />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/submit" component={SubmitPage} />
        </Switch>
    <MSASubmitForm />
    <Footer/>
    </div>
}

export default App;
