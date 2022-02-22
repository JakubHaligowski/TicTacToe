function Cross({svgClass, shape1Class, shape2Class}) {
  return (
    <svg
      className={svgClass}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={shape1Class}
        d="M5 5L73 73"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        className={shape2Class}
        d="M5 73L73 5"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Cross;
