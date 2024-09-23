import { Grid } from 'antd';
import styles from './layout.module.css';
import SignupPage from "./page";

const { useBreakpoint } = Grid;

const SignupLayout = () => {
  const screens = useBreakpoint();
  return (
    <div className={styles.signupLayout}>
      {screens.lg && <SignupPage/>}
      {!screens.lg && <div>pantalla chica</div>}
    </div>
  )
}

export default SignupLayout