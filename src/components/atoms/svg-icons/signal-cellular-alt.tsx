interface Props {
  fill?: "#4B4C53" | "#003BE2";
}

function SignalCellularAlt({ fill = "#4B4C53" }: Props) {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z"
        fill={fill}
      />
    </svg>
  );
}

export default SignalCellularAlt;
