import SearchIcon from "./svg-icons/search-icon";

interface SearchIconProps extends React.ComponentPropsWithoutRef<"input"> {
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchField({
  placeholder,
  onChange,
  value,
  defaultValue,
  ...props
}: SearchIconProps) {
  return (
    <div className="w-fit relative">
      <input
        type="text"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        aria-label="Search courses"
        className="body-lg h-13 w-115.25 rounded-full bg-white px-6 pl-14 text-black-950 placeholder:text-black-400 focus:outline-none "
      />
      <div className="absolute left-6 top-1/2 translate-y-[-50%]">
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchField;
