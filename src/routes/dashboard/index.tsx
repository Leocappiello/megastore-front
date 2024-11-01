import Dashboard from "./page"
import styles from './dashboard.module.css'
import BackButton from "../../components/backButton"

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <BackButton />
      <Dashboard />
    </div>
  )
}

export default DashboardLayout