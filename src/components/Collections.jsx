import Image from "./Image";

function Collections() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      <div className="mb-8 cursor-pointer">
        <Image
          path={"/pins/pin1.jpeg"}
          className={"w-full h-full object-cover rounded-2xl"}
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Minimalist Bedrooms</h1>
          <span className="text-gray-500 text-sm">12 Pins · 1w</span>
        </div>
      </div>
    </div>
  );
}

export default Collections;
