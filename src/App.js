import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyFirstComponent from './MyFirstComponent';
import MyClassComponent from './MyClassComponent';
import ClassCompo from './ClassCompo';
import FunCompo from './FunCompo';
import About from './About';
import Data from './Data';
import Defaultfun from './Dafaultfun';
import User from './Users';

function App() {
  let [name, setName] = useState("Abhishek");
  let [clsname, setClsName] = useState("red");

  let item = { rollno: 1, name: "Abhishek", percentage: 90 };

  let Users = [{ rollno: 1, name: 'Abhishek', percentage: 90 },
              { rollno: 2, name: 'Gayatri', percentage: 95 },
              { rollno: 3, name: 'Gaybi', percentage: 97 }
  ];

  let add = function (a, b) {
    return a + b;
  }

  let sub = (a, b) => {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function setred(e) {
    e.preventDefault();
    setName("Abhishek");
    setClsName("red");
  }

  function setgreen(e) {
    e.preventDefault();
    setName("Pratik");
    setClsName("green");
  }

  let person = "Abhishek";
  let age = 22;

  function Displ(slogen) {
    return slogen = " hi im abhishek and this is my first application of react...!";
  }




  return (
    <div className="App">
      <About />
      <h1 className={clsname}>Welcome {name} to my first react Application</h1>

      <MyFirstComponent />
      <MyClassComponent />

      <ClassCompo />


      <p>Lorem, ipsum dolor name : {person}  sit amet consectetur adipisicing elit. Age : {age} Amet facilis veritatis mollitia, dolores harum ratione architecto sint voluptatibus soluta eos saepe, tempora dolorum veniam commodi quia quidem! Exercitationem, nisi a.</p>
      <p>Addition of 10 and 20 : {add(10, 20)}</p>
      <p>Subtraction of 10 and 20 : {sub(10, 20)}</p>
      <p>Multiplication of 10 and 20 : {mul(10, 20)}</p>

      <FunCompo />


      <div className='disp'>

        <p> applicatio of : {Displ()}</p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aliquid accusantium at iusto labore, omnis quasi cupiditate impedit excepturi sunt culpa voluptates ad nobis quas, repudiandae doloribus officiis maxime eius!


      </div>
      <button onClick={(e) => { setred(e) }}>Abhishek</button>
      <button onClick={(e) => { setgreen(e) }}>Pratik</button>

      <MyFirstComponent />


      <User items={Users} />

      <hr />
      <Data name=" ABhi's React" item={item} />
      <Defaultfun name=" ABhi's React" item={item} />
    </div>

  );
}

export default App;
