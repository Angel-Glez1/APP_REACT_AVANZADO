import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components';


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

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                <ProductCard product={product} >
                    <ProductCard.Img />
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title='Otro Nombre' />
                    <ProductButtons/>
                </ProductCard>

            </div>

        </div>
    )
}

export default ShoppingPages