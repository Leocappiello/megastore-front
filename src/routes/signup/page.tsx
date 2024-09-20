import { Button, Divider, Form, Input, Radio, Space } from 'antd'
import styles from './page.module.css'
import { useState } from 'react'

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

const Login = () => {
  return (
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

    <Form.Item>
      <Button className={styles.signupButton}>Iniciar sesion</Button>
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
        <h1>¡Únete a nuestra comunidad!</h1>
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
        <Space align="center" style={{display: 'flex', justifyContent: 'center', margin: '1.5em 0'}}>
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
        <div style={{width: '100%', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', width: '100%'}}>
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