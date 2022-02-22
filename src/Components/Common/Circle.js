function Circle({svgClass, shapeClass}) {
  return (
    <svg
      className={svgClass}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={shapeClass}
        cx="40"
        cy="40"
        r="35.5"
        strokeWidth="9"
      />
    </svg>
  );
}

export default Circle;
