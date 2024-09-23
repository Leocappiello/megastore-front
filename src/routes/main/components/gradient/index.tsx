import styles from './gradient.module.css'

const GradientText = ({children, fontSize = 16}) => {
  return (
    <p className={styles.gradient} style={{fontSize}}>{children}</p>
  )
}

export default GradientText