import { useState } from "react";
import "./App.css";
import Hotel from "./components/Hotels/Hotels";
import Destinations from "./components/destinations/destinations";
import Food from "./components/Food/food";
import planDeViajes from "./data/data";

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedDestiny, setSelectedDestiny] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar lo que sucede cuando se envía el formulario
    console.log("Hotel seleccionado:", selectedHotel);
    console.log("Comida seleccionada:", selectedFood);
    console.log("Destino seleccionado:", selectedDestiny);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="colum">
            <h1>PACKAGE</h1>
            <p>Total</p>
          </div>

          <div className="colum">
            <h1>HOTELES</h1>
            <div id="hotels">
              {planDeViajes.hoteles.map((hotel, index) => (
                <Hotel
                  key={index}
                  name={hotel.nombre}
                  cost={hotel.costo}
                  place={hotel.ubicacion}
                  services={hotel.servicios}
                  img={hotel.imagen}
                  isSelected={selectedHotel === hotel.nombre}
                  onClick={() => setSelectedHotel(hotel.nombre)}
                />
              ))}
            </div>

            <h1>FOOD</h1>
            <div id="food">
              {planDeViajes.alimentacion.map((food, index) => (
                <Food
                  key={index}
                  name={food.titulo}
                  price={food.precio}
                  img={food.imagen}
                  isSelected={selectedFood === food.titulo}
                  onClick={() => setSelectedFood(food.titulo)}
                />
              ))}
            </div>

            <h1>DESTINYS</h1>
            <div id="destiny">
              {Object.keys(planDeViajes.destinosdla).map((key, index) => {
                const destiny = planDeViajes.destinosdla[key];
                return (
                  <Destinations
                    key={index}
                    name={destiny.nombre}
                    price={destiny.precio}
                    img={destiny.imagen}
                    isSelected={selectedDestiny === destiny.nombre}
                    onClick={() => setSelectedDestiny(destiny.nombre)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;