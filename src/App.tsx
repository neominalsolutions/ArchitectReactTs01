import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = { title?:string; body?:string } // optional
// component içerisine dışarıdan bir değer göndereceğimiz zaman function parametre olarak geçiyoruz
function App(props:AppProps) {
  const {title, body} = props;  // object deconstruction işlemi.
  const message = "Property Binding";  // property binding
  const showMessage = () => {   // functions
    alert('React TS');}
  return (   // en alt satırda retur ifadesi bulunsun
    <div className="App">
      {/* property binding */}
       {message}
       <br></br>
       {/* event binding */}
       <p>{title} {props.title}</p>
       <p>{body}</p>
       <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default App;
