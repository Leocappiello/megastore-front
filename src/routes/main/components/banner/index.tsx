import { Button, Divider } from 'antd'
import { FaShoppingCart, FaUserCircle, FaUserSecret } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './banner.module.css'
import { HiOutlineLogin } from 'react-icons/hi'
import { useAuthStore } from '../../../../store/auth'

const Banner = ({itemCount = 19}: {isLogged: boolean, itemCount?: number}) => {
  const displayCount = itemCount > 20 ? '+20' : itemCount;
  const logout = useAuthStore((state) => state.logout);
  const token = useAuthStore((state) => state.token);
  const isLogged = token !== null ? true : false;

  const isAdmin = true;

  const handleLogout = () => logout();

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
        {
          isLogged ?
          <>
          {
              isAdmin ?
              <>
                <Link to={'/admin'} className={styles.logged}>
                  <FaUserSecret className={styles.loggedIcon} />
                  <p>Admin Panel</p>
                </Link>
                <Divider type='vertical' className={styles.divider} />
              </>
              :
              <>
                <Link to={'/checkout'} className={styles.cart}>
                  <p>{displayCount}</p>
                  <FaShoppingCart className={styles.cartIcon} />
                </Link>
                
                <Divider type='vertical' className={styles.divider} />

                <Link to={'/profile'} className={styles.logged}>
                  <FaUserCircle className={styles.loggedIcon} />
                  <p>Mi perfil</p>
                </Link>
                <Divider type='vertical' className={styles.divider} />
            </>
          }
            <Button onClick={handleLogout} className={styles.logged}>
              <MdOutlineLogout className={styles.loggedIcon} />
              <p>Cerrar sesion</p>
            </Button>
          </>
          :
          <div className={styles.headerRight}>
            <Link to={'/login'} className={styles.login}>
              <p className={styles.loginIcon}><HiOutlineLogin /></p>
              <p>Iniciar sesion</p>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Banner