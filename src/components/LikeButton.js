import { useState } from "react"

function LikeButton () {
 const [counter, setCounter] = useState(0)

 function handleIncrementCounter() {
    setCounter(counter + 1);
 }
 return (
    <button onClick={handleIncrementCounter}>{counter} likes</button>
 )
}
export default LikeButton