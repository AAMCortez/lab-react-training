function BoxColor(props) {
  return (
    <div
      style={{
        height: '50px',
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    ></div>
  );
}

export default BoxColor;
