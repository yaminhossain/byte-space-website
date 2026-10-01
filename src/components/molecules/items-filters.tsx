import Image from "next/image";
import Badge from "../atoms/badge";

function ItemsFilters() {
  return (
    <div className="flex justify-between container">
      <div className="flex gap-4">
        <Badge
          icon={
            <Image
              src={"/icons/courses/filter.svg"}
              width={13}
              height={13}
              alt="icon"
            />
          }
          text="Filter"
          className="h-12 bg-white border border-gray-200 px-4 py-3.5 flex justify-center items-center"
        />
        <Badge
          icon={
            <Image
              src={"/icons/courses/level.svg"}
              width={13}
              height={13}
              alt="icon"
            />
          }
          text="Level"
          className="h-12 bg-white border border-gray-200 px-4 py-3.5 flex justify-center items-center"
        />
        <Badge
          icon={
            <Image
              src={"/icons/courses/category.svg"}
              width={13}
              height={13}
              alt="icon"
            />
          }
          text="Category"
          className="h-12 bg-white border border-gray-200 px-4 py-3.5 flex justify-center items-center"
        />
      </div>
      <div>
        <Badge
          icon={
            <Image
              src={"/icons/courses/most-relevent.svg"}
              width={13}
              height={13}
              alt="icon"
            />
          }
          text="Most relevant"
          className="h-12 bg-white border border-gray-200 px-4 py-3.5 flex justify-center items-center"
        />
      </div>
    </div>
  );
}

export default ItemsFilters;
