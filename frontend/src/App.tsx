import React from 'react';
import './App.css';
import { Footer } from './stories/Footer/Footer';
import MSAHeader from './stories/MSAHeader/MSAHeader';
import SubmitForm from './stories/SubmitForm/SumitForm';
import MSASubmitForm from './stories/MSASubmitForm/MSASubmitForm'

function App() {
  return <div>
    <MSAHeader />
    <MSASubmitForm />
    <Footer/>
    </div>
}

export default App;
