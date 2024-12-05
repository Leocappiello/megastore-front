import { Grid } from 'antd';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import { useProductsStore } from '../../store/products';
import Product from './page';

const { useBreakpoint } = Grid;

const ProductLayout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useProductsStore(state => state.product);

  useEffect(() => {
    getProductById(id??'').then((res) => {
      setProduct(res);
    })
  }, [id])

  const screens = useBreakpoint();
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      {screens.lg &&
        <Product
          product={product}
        />}
      {!screens.lg && <div>pantalla chica</div>}
    </div>
  )
}

export default ProductLayout