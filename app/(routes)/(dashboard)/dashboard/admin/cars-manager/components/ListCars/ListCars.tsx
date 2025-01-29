import { CardCar } from "./CardCar";
import { ListCarsProps } from "./ListCars.types";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;

  return (
    <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars.map((car) => (
        <CardCar car={car} key={car.id} />
      ))}
    </div>
  );
}