import { useState } from 'react';
import { Product, ProductInCard } from '../interfaces/interfaces';



const useShoppingCart = () => {


    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({});


    const onProductCardChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCard(oldShoppingCart => {

            if (count === 0) {
                // Borrar el producto.
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return { ...rest };

            }

            return {

                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }

        });
    }


    return {
        onProductCardChange,
        shoppingCard
    }

}

export default useShoppingCart