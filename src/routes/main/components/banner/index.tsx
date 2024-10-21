import { Button, Divider } from 'antd'
import styles from './banner.module.css'
import { HiOutlineLogin } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'

const Banner = ({itemCount = 19}) => {
  const displayCount = itemCount > 20 ? '+20' : itemCount;

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img
            src='/Designer.png'
            className={styles.icon}
        />
        <div className={styles.title && styles.titleBanner}>
            <p className={styles.mega}>Mega</p>
            <p className={styles.store}>Store</p>
        </div>
      </div>

      <div className={styles.headerRight}>
        {/* <Button className={styles.addProduct}>Añadir producto</Button> */}
        <span className={styles.cart}>
            <p>{displayCount}</p>
            <FaShoppingCart className={styles.cartIcon} />
        </span>
        <Divider type='vertical' className={styles.divider} />
        <Link to={'/profile'} className={styles.logged}>
          <FaUserCircle className={styles.loggedIcon} />
          <p>Mi perfil</p>
        </Link>
        
        <Divider type='vertical' className={styles.divider} />
        <Link to={'/login'} className={styles.logged}>
          <MdOutlineLogout className={styles.loggedIcon} />
          <p>Cerrar sesion</p>
        </Link>
      </div>

        {/* En caso de no estar logeado */}
      {/* <div className={styles.headerRight}>
        <Link to={'/login'} className={styles.login}>
          <p className={styles.loginIcon}><HiOutlineLogin /></p>
          <p>Iniciar sesion</p>
        </Link>
      </div> */}
    </div>
  )
}

export default Banner