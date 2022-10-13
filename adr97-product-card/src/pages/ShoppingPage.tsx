import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css'
import { products } from '../data/product';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
            <ProductCard
              key={product.id}
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10
        }}
      >
        
        {
          ({reset, isMaxCountReached, count, maxCount, increaseBy}) => (
            <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            </>
          )
        }
            </ProductCard>
        
    </div>
  )
}
