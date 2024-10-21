import { Grid } from 'antd';
import styles from './layout.module.css';
import SignupPage from "./page";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie } from 'typescript-cookie';

const { useBreakpoint } = Grid;

const SignupLayout = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();
  console.log(navigate);
  useEffect(() => {
    const token = getCookie('token');
    if (token) {
        navigate('/');
    }
}, []);

  return (
    <div className={styles.signupLayout}>
      {screens.lg && <SignupPage/>}
      {!screens.lg && <div>pantalla chica</div>}
    </div>
  )
}

export default SignupLayout