import React, {useState} from 'react'

export const useCounterLimit = limit => {
    const [counter, setCounter] = useState(0)
    
    if(counter >= limit){
        setCounter(0)
    }

    if(counter < 0){
        setCounter(limit - 1)
    }

    return [counter, setCounter]
}

export const useHandleCounter = () => {
    const [counter, setCounter] = useState(1)

    if(counter < 1){
        setCounter(1)
    }

    return [counter, setCounter]
}