import React from 'react'
import styles from './headernav.module.css'
import { Col, Row } from 'antd'
import { IoHomeSharp } from 'react-icons/io5'
import { BiCategory } from 'react-icons/bi'
import { FaCircleInfo } from 'react-icons/fa6'
import { MdMessage } from 'react-icons/md'
import { CiLogin } from 'react-icons/ci'

const navigation = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: <IoHomeSharp />,
  },
  // {
  //   id: 2,
  //   title: 'Shop',
  //   url: '/shop',
  //   icon: 'shopping-cart',
  // },
  {
    id: 3,
    title: 'Categories',
    url: '/categories',
    icon: <BiCategory />,
  },
  {
    id: 5,
    title: 'About Us',
    url: '/about',
    icon: <FaCircleInfo />,
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
    icon: <MdMessage />,
  },
  {
    id: 8,
    title: 'Login',
    url: '/login',
    icon: <CiLogin />,
  },
  {
    id: 8,
    title: 'Signup',
    url: '/login',
    icon: null,
  }
]

const HeaderNav = () => {
  return (
    <div className={styles.container}>
        <Row className={styles.row}>
          <Col className={styles.iconHeader}>
            <img src={'../../../../../public/Designer.png'} className={styles.logo} />
          </Col>
          
          <Col className={styles.navHeader}>
            <Row className={styles.rowNavHeader}>
                {
                  navigation.map((elem, index) => {
                    return(
                      <>
                        <div className={styles.containerAnchor}>
                          <a href={elem.url}>
                            <div className={styles.containerSection}>
                              { elem.icon ? <p className={styles.icon}>{elem.icon}</p> : ''}
                              <p>{elem.title}</p>
                            </div>
                          </a>
                        </div>
                        {index !== navigation.length - 1 ? <span className={styles.separator}>|</span> : ''}
                      </>
                    )
                  })
                }
            </Row>
          </Col>
        </Row>
    </div>
  )
}

export default HeaderNav