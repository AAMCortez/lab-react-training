import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import dice from '../assets/images/dice-empty.png';
function Dice() {
  const [dices, setNewDice] = useState(dice3);
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  function handleRollDice() {
    if (dices !== dice) {
      setNewDice(dice);
    } else {
      setNewDice(diceArray[Math.floor(Math.random() * (6 - 1) + 1)]);
    }
  }

  return <img src={dices} onClick={handleRollDice} width="100px" alt="dice" />;
}

export default Dice;
