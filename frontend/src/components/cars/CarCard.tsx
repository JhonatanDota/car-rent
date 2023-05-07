import CarModel from "../../models/CarModel";

interface CarCardProps {
  car: CarModel;
}

export default function CarCard(props: CarCardProps) {
    const {car} = props;

    return(
        <div className="flex flex-col ">
        </div>
    );
}
