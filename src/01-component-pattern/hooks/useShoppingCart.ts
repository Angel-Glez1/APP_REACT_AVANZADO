import { useState } from 'react';
import { Product, ProductInCard } from '../interfaces/interfaces';



const useShoppingCart = () => {


    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({});


    const onProductCardChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCard(oldShoppingCart => {

            const productInCard: ProductInCard = oldShoppingCart[product.id] || { ...product, count: 0 };


            //* Si exite el producto incrementamos
            if (Math.max(productInCard.count + count, 0) > 0) {
                productInCard.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCard
                }
            }


            // Borrar el producto.
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };

        });

    }


    return {
        onProductCardChange,
        shoppingCard
    }

}

export default useShoppingCart