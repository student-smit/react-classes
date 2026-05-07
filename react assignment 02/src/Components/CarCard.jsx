const CarCard = ({ name, model, color, price }) => {
  return (
    <div className="car-card">
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p className="price">Rs. {price}</p>
    </div>
  );
};

export default CarCard;