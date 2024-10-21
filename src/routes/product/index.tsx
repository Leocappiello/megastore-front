import { Grid } from 'antd';

import Product from './page';

const { useBreakpoint } = Grid;

const ProductLayout = () => {
  const screens = useBreakpoint();
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      {screens.lg && <Product/>}
      {!screens.lg && <div>pantalla chica</div>}
    </div>
  )
}

export default ProductLayout