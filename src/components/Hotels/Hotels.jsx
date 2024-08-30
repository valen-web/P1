import './Hotels.css';

function Hotel({ name, cost, services, place, img }) { // Cambiado "service" a "services"
  return (
    <>
      <button>
        <h2>{name}</h2>
        <p>${cost}</p>
        <p>Ubicación: {place}</p>
        <p>Servicios: {services}</p>
        <img src={img} alt="Imagen del hotel" /> 
      </button>
    </>
  );
}

export default Hotel;
