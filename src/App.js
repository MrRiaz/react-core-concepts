import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const nayoks = ["Rahim", 'Rajjak', 'Shuvo', 'Karim', 'Josim']; //18 no. line akhan theke gece. ja person function e bikolpo hisabe bebohar hosce.
  const products = [
    {name: 'Photoshop', price: '$96.5'},
    {name: 'Illustator', price: '$90.5'},
    {name: 'PDF Reader', price: '$6.25'},
    {name: 'Premiere El', price: "$256"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I'm React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product> 
        <Person name = {nayoks[0]} job = "Web Dev" ></Person>
        <Person name = "Rahman" job = "Web designer"></Person>
        <Person name = "Tasfiq" job = "Entra"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handlerIncreade = () => { setCount(count + 1);
    // const newCount = count + 1;
    // setCount(newCount);        // ai 2 line ar bodole uporer ak line likha jai. r return ar moddhe handlerIncrease na diye direct () => setCount(count + 1) dilei same kaj korbe.
  }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button style = {{marginRight: '5px'}} onMouseOver = {() => setCount(count - 1)}>Decrease</button>
        <button style = {{marginLeft: '5px'}} onClick = {handlerIncreade}>Increase</button>
    </div>
  )
};

function Users(){
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>Dynamic Users: {Users.length}</h2>
        <ul>
          {
            Users.map(user => <li>{user.name} : {user.phone}</li>)
          }
        </ul>
    </div>
    
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid red',
    backgroundColor: 'lightGray',
    borderRadius: '5px',
    marginBottom: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const {name, price} = props.product;

  return (
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>

    </div>
  )
}


function Person(props) {

  return (
  <div style = {{border: '1px solid red', margin: '10px', width: '285px'}}>
    <h2>Name: {props.name}</h2>
    <h4>Profession: {props.job}</h4>
  </div>
  );
}

// jkn same to same design hobe tkhon ai rkm kore likte hobe. r upore header ar moddhe <GetName></GetName> dite hbe.

// function GetName(){
//   const style = {border:'1px solid black', width: '400px', marginBottom: '20px'};
//   return (
//     <div style = {style}>
//       <h1>Name: Riaz</h1>
//       <h3>Job: Web Developer</h3>
//     </div>
//   )
// }

export default App;
