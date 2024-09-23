import { Col, Row, Skeleton } from "antd";
import { useState } from "react";
import Typewriter from "../../components/typewriter";
import Banner from "./components/banner";
import styles from './main.module.css';

const products = [
    { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Producto 4', price: '$40.00', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Producto 5', price: '$50.00', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Producto 6', price: '$60.00', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Producto 7', price: '$70.00', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Producto 8', price: '$80.00', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Producto 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Producto 4', price: '$40.00', image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Producto 5', price: '$50.00', image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Producto 6', price: '$60.00', image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Producto 7', price: '$70.00', image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Producto 8', price: '$80.00', image: 'https://via.placeholder.com/150' },
  ];

const Main = () => {
    const [loading, setLoading] = useState(true);

  return (
    <>
       <Banner />
        <div className={styles.container}>
            <div className={styles.banner}>
                
            </div>

            <div className={styles.products}>
            <h1 className={styles.title}>
                <Typewriter
                    delay={25}
                    text={`Conoce algunos de nuestros productos`}
                />
                {/* <GradientText fontSize={32}>
                productos
                </GradientText> */}
                {/* <Typewriter
                    initial={200}
                    delay={25}
                    text={"productos"}
                /> */}
            </h1>
                <Row gutter={16} justify='center' align='middle'>
                    {products.map(product => (
                        <Col xs={12} sm={12} lg={6} className={styles.colProduct} key={product.id}>
                            <div className={styles.productCard}>
                                { loading && <Skeleton active />}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={styles.productImage}
                                    onLoad={() => setLoading(false)}
                                    style={{display: loading ? "none" : "block"}}
                                />
                                {!loading && (
                                    <>
                                        <h3 className={styles.productName}>{product.name}</h3>
                                        <p className={styles.price}>{product.price}</p>
                                    </>
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </>
  )
}

export default Main