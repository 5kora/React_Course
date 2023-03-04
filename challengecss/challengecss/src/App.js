import Car from './components/Car';
import './App.css';

function App() {
  const myCars = [
    {name:"Ferrari", km:0, color:"red"},
    {name:"Fusca", km:999999, color:"yellow"},
    {name:"Gol", km:230000, color:"black"}
  ];
  return (
    <div className="App">
      <h3>Carros toopers</h3>
      <div className="car-container">
        {myCars.map((car) => (
             <Car car ={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
