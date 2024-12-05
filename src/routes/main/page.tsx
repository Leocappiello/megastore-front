import { Row } from "antd";
import { useState } from "react";
import Typewriter from "../../components/typewriter";
import Banner from "./components/banner";
import BannerProduct from "./components/bannerProduct";
import CardProduct from "./components/cardProduct";
import styles from './main.module.css';

const Main = ({products}) => {
    const [loading, setLoading] = useState(false);

    return (
        <div className={styles.parent}>
            <Banner /* isLogged={isLogged} */ />
            <BannerProduct />
            <div className={styles.container} id="mainMenu">
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
        </div>
    )
}

export default Main