import CarCard from "./CarCard";

const carsData = [
  { id: 1, name: "Toyota", model: "Corolla", color: "White", price: "45,00,000" },
  { id: 2, name: "Honda", model: "Civic", color: "Black", price: "52,00,000" },
  { id: 3, name: "Suzuki", model: "Alto", color: "Red", price: "18,00,000" },
  { id: 4, name: "Hyundai", model: "Tucson", color: "Grey", price: "65,00,000" },
  { id: 5, name: "Kia", model: "Sportage", color: "Blue", price: "70,00,000" },
  { id: 6, name: "BMW", model: "X5", color: "Black", price: "1,20,00,000" },
  { id: 7, name: "Mercedes", model: "C200", color: "Silver", price: "1,50,00,000" },
  { id: 8, name: "Audi", model: "A4", color: "White", price: "1,10,00,000" },
  { id: 9, name: "Ford", model: "Mustang", color: "Red", price: "90,00,000" },
  { id: 10, name: "Changan", model: "Alsvin", color: "Blue", price: "32,00,000" },
];

const Home = () => {
  return (
    <div className="section">
      <h2 className="section-title">Car Collection</h2>
      <div className="cards-grid">
        {carsData.map((data) => (
          <CarCard
            key={data.id}
            name={data.name}
            model={data.model}
            color={data.color}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;