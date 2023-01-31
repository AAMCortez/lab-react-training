import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState('');
  const [bValue, setBValue] = useState('');
  const [gValue, setGValue] = useState('');
  return (
    <>

      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={() => {
          /* ... */
        }}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={() => {
          /* ... */
        }}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={() => {
          /* ... */
        }}
      />
    </>
  );
}
export default RGBColorPicker;
