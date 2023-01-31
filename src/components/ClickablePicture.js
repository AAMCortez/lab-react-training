import { useState } from 'react';

function ClickablePicture() {
  const [src, setNewImage] = useState('maxence.png');

  function handleSwitchImage() {
    if (src === 'maxence.png') {
      setNewImage('maxence-glasses.png');
    } else {
      setNewImage('maxence.png');
    }
  }
  return <img src = {src} onClick={handleSwitchImage} alt="profile" />;
}
export default ClickablePicture;
