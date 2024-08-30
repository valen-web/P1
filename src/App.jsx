import "./App.css";
import Hotel from "./components/Hotels/Hotels";
import Destinations from "./components/destinations/destinations";
import Food from "./components/Food/food";
import planDeViajes from "./data/data";

function App() {
  let keys = Object.keys(planDeViajes);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(planDeViajes[key]);
  }

  return (
    <>
      <form>
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
            />
          )
        })}
        </div>
        </div>
        </div>
      </form>
    </>
  );
}

export default App;
