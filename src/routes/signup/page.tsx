import { Button, Divider, Form, FormProps, Input, Radio, Space } from 'antd'
import { useState } from 'react'
import { loginReq } from '../../api/auth'
import { useAuthStore } from '../../store/auth'
import styles from './page.module.css'

const Signup = () => {
  return(
    <Form
      name="basic"
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.form}
    >
      <Form.Item
        className={styles.formItem}
        layout="vertical"
        name="username"
        label="Nombre de usuario"
        rules={[{ required: true }]}
        labelCol={{ span: 36 }}
        wrapperCol={{ span: 36 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        layout="vertical"
        label="Contraseña"
        name="password"
        rules={[{ required: true }]}
        labelCol={{ span: 36 }}
        wrapperCol={{ span: 36 }}
      >
        <Input type='password' />
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        layout="vertical"
        label="Repita su contraseña"
        name="repeatPassword"
        rules={[{ required: true }]}
        labelCol={{ span: 36 }}
        wrapperCol={{ span: 36 }}
      >
        <Input type='password' />
      </Form.Item>

      <Form.Item>
        <Button className={styles.signupButton}>Registrarse</Button>
      </Form.Item>
    </Form>
  )
}

type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const setRole = useAuthStore((state) => state.setUserType);
  const setToken = useAuthStore((state) => state.setToken);

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errors) => {
    console.log('Error', errors);
  }
  
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const resLogin = await loginReq(values.username, values.password);
    setToken(resLogin?.data.access_token);
    setRole(resLogin?.data.role.name);
  };

  return (
    <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className={styles.form}
  >
    <Form.Item
      className={styles.formItem}
      layout="vertical"
      name="username"
      label="Nombre de usuario"
      rules={[{ required: true, message: 'Please input your username!' }]}
      labelCol={{ span: 36 }}
      wrapperCol={{ span: 36 }}
    >
      <Input />
    </Form.Item>

    <Form.Item
      className={styles.formItem}
      layout="vertical"
      label="Contraseña"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      labelCol={{ span: 36 }}
      wrapperCol={{ span: 36 }}
    >
      <Input type='password' />
    </Form.Item>

    <Form.Item>
      <Button htmlType='submit' className={styles.signupButton}>Iniciar sesion</Button>
    </Form.Item>
  </Form>
  )
}


const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeSection = (e) => {
    if (e.target.value === 'login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.siderSignup}>
        <h1 style={{color: 'var(--secondary-sec-color)', textDecoration: 'underline', marginBottom: '.5em'}}>¡Únete a nuestra comunidad!</h1>
        <h3>Regístrate y disfruta de:</h3>
        <ul>
          <li>Ofertas exclusivas: Acceso anticipado a promociones especiales.</li>
          <li>Novedades: Sé el primero en conocer nuestros nuevos productos.</li>
          <li>Facilidad de compra: Guarda tus datos y agiliza tus pedidos.
          </li>
          <li>Solo toma un minuto. ¡Comienza tu experiencia de compra hoy!</li>
        </ul>
      </div>

      <div className={styles.formSignup}>
        <Space align="center" style={{display: 'flex', justifyContent: 'center', margin: '3em 0 1.5em'}}>
          <Radio.Group value={isLogin ? 'login' : 'signup'} onChange={handleChangeSection}>
            <Radio.Button
              style={{fontWeight: 700}}
              value="signup"
              className={!isLogin ? styles.isSelected : styles.button}
            >Registro</Radio.Button>
            <Radio.Button
              style={{fontWeight: 700}}
              value="login"
              className={isLogin ? styles.isSelected : styles.button}
            >Iniciar sesion</Radio.Button>
          </Radio.Group>
        </Space>
        <div className={styles.siderForm}>
        <div  className={styles.siderContainer}>
        <Divider>{isLogin ? 'Iniciar sesion' : 'Registro'}</Divider>
        {
          isLogin ?
          <Login />
          :
          <Signup />
        }
        <Divider style={{marginTop: 0}}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignupPage