//Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

function getButtonText() {
    return 'Click on Me!';
}

//creat a react component
const App = () => {
    
 return (
  <div>
 <label className="label" for="name">Enter name:</label>
 <input id="name" type="text" />
 
 <button style={{backgroundColor: 'blue', color: 'white'}}>
     {getButtonText()}
 
 </button>
</div>
 );

};

//Take the react componant and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);