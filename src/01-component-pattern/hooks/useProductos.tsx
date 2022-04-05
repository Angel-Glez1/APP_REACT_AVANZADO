import { useState } from 'react';

const useProductos = ( initalValue: number = 0 ) => {
    
    const [counter, setCounter] = useState(initalValue);

    const increaseBy = (value: number) => {

        setCounter(prev => Math.max(prev + value, 0));

    }

    return {
        counter,
        increaseBy
    }


}

export default useProductos