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
          className="bg-white border border-gray-200 px-4 py-3.5"
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
          className="bg-white border border-gray-200 px-4 py-3.5"
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
          className="bg-white border border-gray-200 px-4 py-3.5"
        />
      </div>
      <div>
        <Badge
          icon={
            <Image
              src={"/icons/courses/most-relevant.svg"}
              width={13}
              height={13}
              alt="icon"
            />
          }
          text="Most relevant"
          className="bg-white border border-gray-200 px-4 py-3.5"
        />
      </div>
    </div>
  );
}

export default ItemsFilters;
