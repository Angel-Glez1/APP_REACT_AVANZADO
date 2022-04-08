import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components';
import { products } from '../data/Products';
import '../styles/custom-styles.css';


const product = products[0];

const ShoppingPages = () => {


    return (
        <div>
            <h1>Shopping Pages</h1>

            <ProductCard
                className="bg-dark text-white"
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, isMaxCountReached, maxCount, increaseBy, count, product }) => (

                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset} className='btn-reset'> Reset </button>
                            <button onClick={() => increaseBy(-2)} className='btn-reset'>-2</button>

                            {
                                !isMaxCountReached && (<button onClick={() => increaseBy(+2)} className='btn-reset'>+2</button>)
                            }

                            <span className='btn-reset' > {count} | Max : {maxCount}  </span>


                        </>
                    )
                }
            </ProductCard>



        </div>
    )
}

export default ShoppingPages