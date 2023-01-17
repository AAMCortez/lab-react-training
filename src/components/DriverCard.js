import Ratings from './Ratings';

function DriverCard(props) {
  return (
    <div className='driverCards'>
      <img src={props.img} className="imagem" alt="foto" />
      <div>
        <h2>{props.name}</h2>
        <Ratings>{props.rating}</Ratings>
        <div>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
