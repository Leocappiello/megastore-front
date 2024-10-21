import React from 'react'
import styles from './signup.module.css'
import { Button, Form, Input } from 'antd';

const SignupForm = ({ onSignup }) => {
    const onFinish = (values) => {
      onSignup(values); // Pasar valores al callback de Signup
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        name="signup"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.form}
      >
        <Form.Item
          name="username"
          label="Nombre de usuario"
          style={{color: 'white !important'}}
          rules={[{
            required: true,
            message: 'Por favor, ingresa un nombre de usuario valido',
            type: 'string'
          }]}
          className={styles.formItem}
        >
          <Input className={styles.input} placeholder='Username' />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          style={{color: 'white !important'}}
          rules={[{
            required: true,
            message: 'Por favor, ingresa un email valido',
            type: 'email'
          }]}
          className={styles.formItem}
        >
          <Input className={styles.input} placeholder='Email' />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Contraseña"
          rules={[{
            required: true,
            message: 'Por favor, ingresa una contraseña',
            min: 8
          }]}
          className={styles.formItem}
        >
          <Input.Password className={styles.input} placeholder='Contraseña' />
        </Form.Item>
  
        <Form.Item
          name="repeatPassword"
          label="Repita su contraseña"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Por favor, repite tu contraseña',
              min: 8
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Las contraseñas no coinciden'));
              },
            }),
          ]}
          className={styles.formItem}
        >
          <Input.Password className={styles.input} placeholder='Repetir contraseña' />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.signupButton}>
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default SignupForm;