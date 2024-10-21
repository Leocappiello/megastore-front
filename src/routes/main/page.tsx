import { Col, Row, Skeleton, Space } from "antd";
import { useState } from "react";
import Typewriter from "../../components/typewriter";
import Banner from "./components/banner";
import styles from './main.module.css';
import CardProduct from "./components/cardProduct";
import BannerProduct from "./components/bannerProduct";

const products = [
    { id: "1", name: 'Producto 1', price: 10.00, image: 'https://via.placeholder.com/150' },
    { id: "2", name: 'Producto 2', price: 20.00, image: 'https://via.placeholder.com/150' },
    { id: "3", name: 'Producto 3', price: 30.00, image: 'https://via.placeholder.com/150' },
    { id: "4", name: 'Producto 4', price: 40.00, image: 'https://via.placeholder.com/150' },
    { id: "5", name: 'Producto 5', price: 50.00, image: 'https://via.placeholder.com/150' },
    { id: "6", name: 'Producto 6', price: 60.00, image: 'https://via.placeholder.com/150' },
    { id: "7", name: 'Producto 7', price: 70.00, image: 'https://via.placeholder.com/150' },
    { id: "8", name: 'Producto 8', price: 80.00, image: 'https://via.placeholder.com/150' },
    { id: "9", name: 'Producto 1', price: 10.00, image: 'https://via.placeholder.com/150' },
    { id: "10", name: 'Producto 2', price: 20.00, image: 'https://via.placeholder.com/150' },
    { id: "11", name: 'Producto 3', price: 30.00, image: 'https://via.placeholder.com/150' },
    { id: "12", name: 'Producto 4', price: 40.00, image: 'https://via.placeholder.com/150' },
    { id: "13", name: 'Producto 5', price: 50.00, image: 'https://via.placeholder.com/150' },
    { id: "14", name: 'Producto 6', price: 60.00, image: 'https://via.placeholder.com/150' },
    { id: "16", name: 'Producto 7', price: 70.00, image: 'https://via.placeholder.com/150' },
    { id: "15", name: 'Producto 8', price: 80.00, image: 'https://via.placeholder.com/150' },
  ];

const Main = () => {
    const [loading, setLoading] = useState(true);

  return (
    <>
        <Banner />
        <BannerProduct />
        <div className={styles.container}>
            <div className={styles.products}>
                <h1 className={styles.title}>
                    <Typewriter
                        delay={25}
                        text={`Conoce algunos de nuestros productos`}
                    />
                </h1>
                <Row gutter={16} justify='center' align='middle'>
                    {products.map(product => (
                        <CardProduct
                            key={product.id}
                            loading={loading} 
                            product={product}
                            setLoading={setLoading}
                        />
                    ))}
                </Row>
            </div>
        </div>
    </>
  )
}

export default Main