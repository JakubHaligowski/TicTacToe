function Circle(props) {
  return (
    <svg
      className={props.svgClass}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={props.shapeClass}
        cx="40"
        cy="40"
        r="35.5"
        stroke-width="9"
      />
    </svg>
  );
}

export default Circle;
