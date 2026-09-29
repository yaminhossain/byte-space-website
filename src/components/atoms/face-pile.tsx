import Image from "next/image";

const avatars = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
  "/avatars/avatar-5.jpg",
  "/avatars/avatar-6.jpg",
];

export default function FacePile() {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar}
          className={`relative h-10 w-10 overflow-hidden rounded-full border-2 border-white ${
            index !== 0 ? "-ml-2" : ""
          }`}
        >
          <Image
            src={avatar}
            alt={`User ${index + 1}`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      ))}

      {/* Count */}
      <div className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#D7FF00] text-[12px] font-bold text-black">
        2K+
      </div>
    </div>
  );
}
