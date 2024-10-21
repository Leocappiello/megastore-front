import React from 'react'
import { Col, Skeleton } from 'antd'
import styles from './cardProduct.module.css'
import { Link } from 'react-router-dom'

interface IProduct {
    id: string
    image: string
    name: string
    price: number
}

const CardProduct = ({loading, product, setLoading}: {loading: boolean, product: IProduct, setLoading: any}) => {
  return (
    <Col xs={12} sm={12} lg={6} className={styles.colProduct} key={product.id}>
        <Link to={`product/${product.id}`}>
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
        </Link>
    </Col>
  )
}

export default CardProduct