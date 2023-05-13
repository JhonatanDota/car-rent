export default function CarCardSkeleton() {
  return (
    <div className="animate-pulse w-full rounded-md mx-auto">
      <div className="flex flex-col gap-y-4 p-4 bg-gray-100 ">
        <div className="w-full bg-gray-400 h-56 lg:h-[30rem]"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-300 rounded-md h-24"></div>
          <div className="bg-gray-300 rounded-md h-24"></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-300 rounded-md h-24"></div>
          <div className="bg-gray-300 rounded-md h-24"></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-300 rounded-md h-24"></div>
          <div className="bg-gray-300 rounded-md h-24"></div>
        </div>
      </div>
    </div>
  );
}
