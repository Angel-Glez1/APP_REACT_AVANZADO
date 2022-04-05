import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Taza',
    img: './coffee-mug.png'

}

const ShoppingPages = () => {
    return (
        <div>
            <h1>Shopping Pages</h1>
            <hr />

            <div className='grid'>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Img className="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white" >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

            </div>

        </div>
    )
}

export default ShoppingPages