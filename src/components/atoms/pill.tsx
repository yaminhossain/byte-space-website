interface PillTypes {
  children: string;
}

function Pill({ children }: PillTypes) {
  return (
    <div className="py-1.5 px-3 bg-[#F6F6F699] backdrop-blur-sm w-fit label-xs text-black-700 rounded-3xl">
      {children}
    </div>
  );
}

export default Pill;
