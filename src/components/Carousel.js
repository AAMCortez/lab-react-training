import { useState } from 'react';

function Carousel(props) {
  const [src, setNewImage] = useState(props.images[0]);
  const [counter, setCounter] = useState(0);
  function handleIncrementCounter() {
    setCounter(counter + 1 || counter);
  }
  function handleDecrementCounter() {
    setCounter(counter - 1 || counter);
  }
  function handleLeftButton() {
    handleDecrementCounter();
    setNewImage(props.images[counter]);
  }
  function handleRightButton() {
    handleIncrementCounter();
    setNewImage(props.images[counter]);
  }

  return (
    <>
      <button onClick={handleLeftButton}>Left</button>
      <img src={src} alt="cenas" />
      <button onClick={handleRightButton}>Right</button>
    </>
  );
}
export default Carousel;
