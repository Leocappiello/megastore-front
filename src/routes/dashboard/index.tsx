import Dashboard from "./page"
import styles from './dashboard.module.css'

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <Dashboard />
    </div>
  )
}

export default DashboardLayout