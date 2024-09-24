import React from 'react'
import styles from './landing.module.css'
import HeaderNav from './components/Headernav'
import BannerLanding from './components/BannerLanding'
import CategoriesLanding from './components/CategoriesLanding'

const Landing = () => {
  return (
    <div className={styles.container}>
        <HeaderNav></HeaderNav>
        <BannerLanding></BannerLanding>
        <CategoriesLanding></CategoriesLanding>
    </div>
  )
}

export default Landing