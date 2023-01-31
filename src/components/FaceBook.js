import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  // console.log(
  //   profiles.map((item) => {
  //     if (item.country === 'USA') {
  //       return 'blue';
  //     } else {
  //       return 'white';
  //     }
  //   })
  // );

  const [backgroundColor, setBackgroundColor] = useState('white');

  function handleBackgroundColor(item) {
      if (item === 'USA') {
         setBackgroundColor('blue');
      } else if (item === 'England') {
         setBackgroundColor('blue');
      } else {
         setBackgroundColor('white');
      }
  }

  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <button onClick={() => handleBackgroundColor("all")}>All</button>
          <button onClick={() => handleBackgroundColor("USA")}>USA</button>
          <button onClick={() => handleBackgroundColor("England")}>England</button>
        </ul>
      </nav>
      {profiles.map((item) => {
        return (
          <div
            key={profiles.indexOf(item)}
            style={{ backgroundColor: backgroundColor }}
          >
            <img src={item.img} alt="profile" />
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.country}</p>
            <p>{item.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        );
      })}
    </>
  );
}
export default FaceBook;
