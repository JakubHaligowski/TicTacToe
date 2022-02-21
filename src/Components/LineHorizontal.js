function LineHorizontal(props) {
  return (
    <svg
      style={props.style}
      className={props.className}
      width="100%"
      height="100%"
      viewBox="0 0 150 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4"
        y1="4"
        x2="146"
        y2="4"
        stroke="#727272"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default LineHorizontal;
