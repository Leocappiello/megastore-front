// import { Grid } from 'antd';
// import styles from './layout.module.css';
// import SignupPage from "./page";
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { getCookie } from 'typescript-cookie';
// import { useAuthStore } from '../../store/auth';

// const { useBreakpoint } = Grid;

// const SignupLayout = () => {
//   const navigate = useNavigate();
//   const screens = useBreakpoint();
  
//   const { token } = useAuthStore((state) => ({
//     token: state.token,
//   }));

//   useEffect(() => {
//     console.log(token);
//     if (token) {
//       navigate('/');
//     }
//   }, [token, navigate])

//   return (
//     <div className={styles.container}>
//       <div className={styles.signupLayout}>
//         {screens.lg && <SignupPage/>}
//         {!screens.lg && <div>pantalla chica</div>}
//       </div>
//     </div>
//   )
// }

// export default SignupLayout

import { Grid } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import styles from './layout.module.css';
import SignupPage from "./page";

const { useBreakpoint } = Grid;

const SignupLayout = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    console.log(token);
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.signupLayout}>
        {screens.lg && <SignupPage />}
        {!screens.lg && <div>Pantalla chica</div>}
      </div>
    </div>
  );
};

export default SignupLayout;