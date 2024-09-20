import styles from './layout.module.css';
import SignupPage from "./page";

const SignupLayout = () => {
  return (
    <>
    <div className={styles.signupLayout}>
      <SignupPage></SignupPage>
    </div>
    </>
  )
}

export default SignupLayout