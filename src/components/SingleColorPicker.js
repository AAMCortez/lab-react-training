function SingleColorPicker(props) {
  function handleNumberInput() {}
  return (
    <>
      <label>{props.color}</label>
      <input
        onChange={handleNumberInput}
        type="number"
        id="number"
        min={0}
        max={255}
      ></input>
    </>
  );
}
export default SingleColorPicker;
