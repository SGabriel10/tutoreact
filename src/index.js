import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
function User(){
    return <h1>Welcome Back!</h1>;
}

function Guest(){
    return <h2>Please Sign Up</h2>;
}

function Greeting(props){
    const isLoggedIn= props.isLoggedIn;
    if(isLoggedIn){
        return <User/>;
    }
    return <Guest/>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting isLoggedIn={true}/>);
/*
ReactDOM.render(
    // Intentar cambiando isLoggedIn={true}:
    
    document.getElementById('root')
  );
*/
  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
