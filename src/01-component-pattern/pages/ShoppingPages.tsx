import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components';
import { products } from '../data/Products';
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';



const ShoppingPages = () => {

    const { shoppingCard, onProductCardChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Pages</h1>
            <hr />

            <div className='grid'>
                
                {
                    products.map(product => (
                        <ProductCard
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCardChange}
                            product={product}
                            value={shoppingCard[product.id]?.count}
                        >

                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-card">
                
                {
                    Object.entries(shoppingCard).map(([key, product]) => (
                        <ProductCard
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCardChange}
                            product={product}
                            style={{ width: '100px' }}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

        </div>
    )
}

export default ShoppingPages