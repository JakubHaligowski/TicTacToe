function Cross(props) {
  return (
    <svg
      className={props.svgClass}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.shape1Class}
        d="M5 5L73 73"
        stroke-width="9"
        stroke-linecap="round"
      />
      <path
        className={props.shape2Class}
        d="M5 73L73 5"
        stroke-width="9"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default Cross;
