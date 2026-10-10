interface Props {
  className?: string;
  id?: string;
}

function TriangleIcon({ className, id }: Props) {
  return (
    <svg
      className={className}
      id={id}
      width={30}
      height={30}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 20L15 4L28 20H2Z" fill="currentColor" />
    </svg>
  );
}
export default TriangleIcon;
