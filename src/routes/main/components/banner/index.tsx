import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles.header}>
        <img
            src='../../../../../public/Designer.png'
            className={styles.icon}
        />
        <div className={styles.title && styles.titleBanner}>
            <p className={styles.mega}>Mega</p>
            <p className={styles.store}>Store</p>
        </div>
    </div>
  )
}

export default Banner