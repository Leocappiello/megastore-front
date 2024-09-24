import React from 'react'
import styles from './categories.module.css'

const categories = [
    { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Producto 4', price: '$40.00', image: 'https://via.placeholder.com/150' },
    // { id: 5, name: 'Producto 5', price: '$50.00', image: 'https://via.placeholder.com/150' },
    // { id: 6, name: 'Producto 6', price: '$60.00', image: 'https://via.placeholder.com/150' },
    // { id: 7, name: 'Producto 7', price: '$70.00', image: 'https://via.placeholder.com/150' },
    // { id: 8, name: 'Producto 8', price: '$80.00', image: 'https://via.placeholder.com/150' },
    // { id: 9, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    // { id: 10, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
    // { id: 11, name: 'Producto 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
    // { id: 12, name: 'Producto 4', price: '$40.00', image: 'https://via.placeholder.com/150' },
    // { id: 13, name: 'Producto 5', price: '$50.00', image: 'https://via.placeholder.com/150' },
    // { id: 14, name: 'Producto 6', price: '$60.00', image: 'https://via.placeholder.com/150' },
    // { id: 16, name: 'Producto 7', price: '$70.00', image: 'https://via.placeholder.com/150' },
    // { id: 15, name: 'Producto 8', price: '$80.00', image: 'https://via.placeholder.com/150' },
  ];


const CategoriesLanding = () => {
  return (
    <div className={styles.container}>
        {
            categories.map((category) => {
                return(
                    <div className={styles.category}>
                        <img
                            className={styles.image}
                            src={category.image}
                        />
                        <p className={styles.title}>
                            {category.name}
                        </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CategoriesLanding