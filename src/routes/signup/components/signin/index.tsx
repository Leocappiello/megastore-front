import { Button, Form, Input, Spin } from 'antd';
import styles from './signin.module.css'

const SigninForm = ({ onLogin, loading }) => {
  const onFinish = (values) => {
    onLogin(values); // Pasar valores al callback de Login
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Spin spinning={loading}>
      <Form
        name="signin"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.form}
      >
        <Form.Item
          name="username"
          label="Nombre de usuario"
          rules={[{ required: true, message: 'Por favor, ingresa tu nombre de usuario' }]}
          className={styles.formItem}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[{ required: true, message: 'Por favor, ingresa tu contraseña' }]}
          className={styles.formItem}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.signupButton}>
            Iniciar sesión
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default SigninForm;