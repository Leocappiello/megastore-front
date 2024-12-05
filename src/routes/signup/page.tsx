import { Divider, Radio, Space } from 'antd';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { loginReq, signupReq } from '../../api/auth';
import { useAuthStore } from '../../store/auth';
import SigninForm from './components/signin';
import SignupForm from './components/signup';
import styles from './page.module.css';

const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const setRole = useAuthStore((state) => state.setUserType);
  const setToken = useAuthStore((state) => state.setToken);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeSection = (e) => {
    setIsLogin(e.target.value === 'login');
    setErrorMessage('');
  };

  const onLoginFinish = async (values) => {
    try {
      setErrorMessage('');
      const resLogin = await loginReq(values.username, values.password);
      console.log(resLogin);
      setToken(resLogin.data.access_token);
      setRole(resLogin.data.role.name);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const onSignupFinish = async (values) => {
    try {
      setErrorMessage('');
      const resSignup = await signupReq(values.email, values.username, values.password);
      if (resSignup.data.success) {
        toast.success('Usuario creado !')
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.siderSignup}>
        <h1 style={{ color: 'var(--secondary-sec-color)', textDecoration: 'underline', marginBottom: '.5em' }}>
          ¡Únete a nuestra comunidad!
        </h1>
        <h3>Regístrate y disfruta de:</h3>
        <ul>
          <li>Ofertas exclusivas: Acceso anticipado a promociones especiales.</li>
          <li>Novedades: Sé el primero en conocer nuestros nuevos productos.</li>
          <li>Facilidad de compra: Guarda tus datos y agiliza tus pedidos.</li>
          <li>Solo toma un minuto. ¡Comienza tu experiencia de compra hoy!</li>
        </ul>
      </div>

      <div className={styles.formSignup}>
        <Space align="center" style={{ display: 'flex', justifyContent: 'center', margin: '3em 0 1.5em' }}>
          <Radio.Group value={isLogin ? 'login' : 'signup'} onChange={handleChangeSection}>
            <Radio.Button style={{ fontWeight: 700 }} value="signup" className={!isLogin ? styles.isSelected : styles.button} data-testid="radio-signup">
              Registro
            </Radio.Button>
            <Radio.Button style={{ fontWeight: 700 }} value="login" className={isLogin ? styles.isSelected : styles.button}>
              Iniciar sesión
            </Radio.Button>
          </Radio.Group>
        </Space>
        <div className={styles.siderForm}>
          <div className={styles.siderContainer}>
            <Divider>{isLogin ? 'Iniciar sesión' : 'Registro'}</Divider>
            {isLogin ? (
              <SigninForm
                loading={false}
                onLogin={onLoginFinish}
              />
            ) : (
              <SignupForm onSignup={onSignupFinish} />
            )}
            <Divider style={{ marginTop: 0 }} />
            <p
              id='error'
              className={styles.error}
            >{ errorMessage }</p>
            <Toaster
              position='bottom-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;