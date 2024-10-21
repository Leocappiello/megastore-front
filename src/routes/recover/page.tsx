import { Button, Card, Input } from 'antd'
import React from 'react'
import styles from './recover.module.css'
import { TbPasswordMobilePhone } from "react-icons/tb";
import { FaEnvelope } from 'react-icons/fa6';

const Recover = ({
  email,
  setEmail,
  onClickRecover
}) => {
  return (
    <Card className={styles.container}>
      <Card className={styles.iconRecover}>
        <TbPasswordMobilePhone
          size={48}
          className={styles.icon}
        />
      </Card>
      <h1>¿Olvidaste tu contraseña?</h1>
      <p className={styles.description}>No te preocupes, por favor, indica tu correo para que podamos restablecerla.</p>
      <Input
        required={true}
        value={email}
        prefix={
          <span className={styles.prefix}>
            <FaEnvelope className={styles.prefixIcon} size={16}/>
            <p>|</p>
          </span>
        }
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={onClickRecover}
        className={styles.button}
      >
        Recuperar contraseña
      </Button>
    </Card>
  )
}

export default Recover