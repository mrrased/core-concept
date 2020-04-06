import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  var person = {
    name: "Mouly Rahman"
  }
  var person2 ={
    HusbandName: "Rashedur Rahman" 
  }
  var person3 ={
    sonName: "Ashfak Rahman"
  }
  var person4 ={
    DaughterName: "Sofia Bin Rashed"
  }
  var person5 ={
    Village: "Birajpur"
  }
 var style ={
   color: 'red',
   alignContent: 'right',
   marginTop: '5px',
   marginBottom: '5px',
   border: '2px solid white',
   padding: '10px'

  
 }
const products = [
  {name: 'Photoshop', price: '$20.99'},
  {name: 'Illustrator', price: '$9.99'},
  {name: 'PDF Reader', price: '$7.99'},
  {name: ' Reader', price: '$20.99'}
]
const AdobeProduct = [
  {name: 'Lightroom', price: '$10.99'},
  {name: 'Ap Pro', price: '$200.99'},
  {name: 'After Effect', price: '$7.99'},
  {name: 'Dimension', price: '$20.99'},
  {name: 'InDesign', price: '$10.89'}
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <p style={{color:'red'}}>My first concept paragraph</p>
        <h1 className="" style={style}>Name: {person.name} </h1>
        <h2 style={style}>Son Name: {person3.sonName}</h2>
        <h2 style={style}>Husband Name: {person2.HusbandName}</h2>
        <h2 style={style}>Daughter Name: {person4.DaughterName}</h2>
        <h2 style={style}>Village Name: {person5.Village}</h2>
        
          {
            AdobeProduct.map(pd => <AdobeProducts product={pd}></AdobeProducts>)
          }
        
        <Identity></Identity>
        <Identity></Identity>
        <Product name ={products[0].name} price={products[0].price}></Product>
        <Product name ={products[1].name} price={products[1].price}></Product>
        <Product name ={products[2].name} price={products[2].price}></Product>
        <Product name ={products[3].name} price={products[3].price}></Product>
        <Dynamic name="Mouly Rahman"></Dynamic>
        
      </header>
    </div>
  );
}
function Identity(){
  const IdentityStyle ={
      border: '2px solid red',
      margin: '50px 50px 25px 50px',
      borderShadow: '5px 5px 10px white',
      textAlign: 'center',
      padding: '10px'
  }
  return (
    <div >
    <h3 style={IdentityStyle}>Name: family identity</h3>
    <h4 style={IdentityStyle}>Problem hocche keno</h4>
    </div>
  )
}

function Dynamic(props){
  const dynamicStyle={
    border : '5px solid green',
    borderRadius: '10px',
    padding: '10px 50px 10px 50px',
    backgroundColor: 'yellow',
    color: 'red'
  }
  return (
    <div style={dynamicStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Rashed's Wife</h4>
    </div>
  )
}

function AdobeProducts(props){
  const productStyle={
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    color: 'black',
    height: '250px',
    width: '200px',
    float: 'left',
    margin: '10px',
    border: '1px solid gary'
    
  }
  const {name, price} =props.product
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>BUY NOW</button>

    </div>
  )
}
function Product(props){
  const productStyle={
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    color: 'black',
    height: '250px',
    width: '200px',
    float: 'left',
    margin: '10px',
    border: '1px solid gary'
    
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <button>BUY NOW</button>

    </div>
  )
}
function Counter(){

  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseLeave ={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}> Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h1>Dynamic User: {users.length}</h1>
      <ul>
        {
          users.map(user =><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
