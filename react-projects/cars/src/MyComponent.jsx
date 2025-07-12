import React, {useState} from 'react';
function MyComponent(){
   const [cars, setCars]=useState([]);
   const [carYear, setYear]=useState(new Date().getFullYear());
   const [carMake, setCarMake]=useState("");
   const [carModel, setCarModel]=useState("");

   function addCar(){
    const newCar={year:carYear, make:carMake, model: carModel};
    setCars([...cars, newCar]);
    setYear("");
    setCarMake("");
    setCarModel("");
   }
   function removeCar(index){
    const newList=[...cars];
    newList.splice(index, 1);
    setCars(newList);
   }
   function handleYearChange(event){
    setYear(event.target.value);

   }
   function handleMakeChange(event){
    setCarMake(event.target.value);

   }
   function handleModelChange(event){
    setCarModel(event.target.value);
   }

   return (
    <div>
        <h2>List of Car objects</h2>
        <ul>
            {
            cars.map((car,index)=>
            <li key={index} onClick={()=>removeCar(index)}>{car.year} {car.make} {car.model} 
            </li>)
            
            }
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/><br></br>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br></br>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br></br>
        <button onClick={addCar}>Add Car</button>
        
    </div>
   );


}
export default MyComponent