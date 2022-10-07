import { useState } from "react"

export const useCounter = ( initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) =>{
        setCounter(counter + value)
    }

    const decrement = (value = 1) =>{
        if(counter === 0) return alert('No puede bajar de 0');
        if(counter < 0) return setCounter(initialValue)
        // console.log(counter)
        setCounter(counter - value)
    }

    const reset = () =>{
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

