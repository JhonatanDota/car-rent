export default function CarsListSkeleton() {
  const carsQuantity = 12;

  return (
    <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(carsQuantity)].map((e, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 p-4 md:p-6 lg:p-8 bg-gray-100 h-64"
        >
          <div className="h-40 bg-gray-300"></div>

          <div className="flex space-x-3">
            <div className="w-36 bg-gray-300 h-6 rounded-md "></div>

            <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
          </div>

          <div className="flex space-x-3">
            <div className="w-24 bg-gray-300 h-6 rounded-md "></div>

            <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          </div>
        </div>
      ))}
    </div>
  );
}
