import { Button, Card } from 'antd'
import styles from './bannerProduct.module.css'
import React from 'react'
import { PiShootingStarFill } from 'react-icons/pi'

const BannerProduct = () => {
  return (
    <Card className={styles.card} styles={{body: {width: '100%', display: 'flex'}}}>
        <div className={styles.firstHalf}>
            <h1 className={styles.title}>Ahorra hasta 50% en productos seleccionados</h1>
            <p className={styles.subtitle}>Haz click en el boton de abajo para ver los productos</p>
            <Button className={styles.button}>
                <span><PiShootingStarFill /></span>
                Conocer más
            </Button>
        </div>

        <div className={styles.secondHalf}/>
    </Card>
  )
}

export default BannerProduct