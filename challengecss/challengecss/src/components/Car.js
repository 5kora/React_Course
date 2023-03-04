import styles from "./Car.module.css"

const Car = ({car}) => {
    //myCars props -> name, km, color
  return (
    <div className = {styles.card}>
        <h3>Marca: {car.name}</h3>
        <p>Quilometragem: {car.km}</p>
        <p>Cor: {car.color}</p>
    </div>
  )
}

export default Car