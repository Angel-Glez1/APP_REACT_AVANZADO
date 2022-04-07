import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;

}


const useProductos = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCounter] = useState(value);

    useEffect(() => setCounter(value), [value]);
        
    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        // Solo si estan usando la props onChange
        onChange && onChange({ count: newValue, product });


    }

    return {
        counter,
        increaseBy
    }


}

export default useProductos