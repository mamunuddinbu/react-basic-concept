import logo from './logo.svg';
import './App.css';
const number = 5552;
function App() {
  const people = 
  [
     {name: 'Rahul', Age:'23', Profession: 'Fishing' },
     {name: 'Kakul', Age:'44', Profession: 'Walking' },
     {name: 'Rahul', Age:'253', Profession: 'Jumping' },
     {name: 'Rahul', Age:'45', Profession: 'Laughing' },
     {name: 'Mitiul', Age:'34', Profession: 'Hunting' },
     {name: 'Sitara', Age:'56', Profession: 'Running' },
     {name: 'Sitara', Age:'56', Profession: 'Running' },
     {name: 'Sitara', Age:'56', Profession: 'Running' },
     {name: 'Sitara', Age:'56', Profession: 'Running' },
     {name: 'Sitara', Age:'56', Profession: 'Running' },
     {name: 'Sitara', Age:'56', Profession: 'Running' },
]
  return (

    <div className="App">
      
      {
        people.map(person => <Person name = {person.name} Age = {person.Age} Profession ={person.Profession} ></Person>)
      }
      <Friend></Friend>
    </div>
  );
}
function Person(props) {
  return (
    <div className='person'>
      <p>Name: <b>{props.name}</b>  </p>
      <p>Age: {props.Age}</p>
      <p>Profession: {props.Profession}</p>



    </div>
  )

}
function Friend(){
  return(
    <div>
      <h1>I am Bangladeshi</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, dolores maxime reprehenderit, nemo delectus tempora quae blanditiis eius dolorem accusantium aliquid earum optio itaque fugit consequatur assumenda velit ad quisquam?</p>
    </div>
  )
}

export default App;
