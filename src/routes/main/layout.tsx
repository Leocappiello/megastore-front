import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import { useProductsStore } from '../../store/products';
import Main from './page';

const MainLayout = () => {
  const [product, setProduct] = useState([]);
  useProductsStore(state => state.products);

  useEffect(() => {
    getProducts().then((res) => {
      setProduct(res);
    })
  }, [])

  return (
    <div style={{height: '100%'}}>
        <Main
          products={product}
        />
    </div>
  )
}

export default MainLayout