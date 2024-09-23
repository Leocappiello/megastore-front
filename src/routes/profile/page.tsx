import { Avatar, Button, DatePicker, Divider, Form, Input } from 'antd';
import { FaRegUser } from "react-icons/fa";
import styles from './profile.module.css';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
}

const Profile = () => {
    return(
        <div className={styles.container}>
            <h3 className={styles.header}>Edit profile</h3>
            <div className={styles.avatarContainer}>
                <Avatar
                    className={styles.avatar}
                    size={64}
                    icon={
                        <FaRegUser className={styles.iconUser} />}
                />
            </div>
            <h3 className={styles.name}>Nombre de usuario</h3>
            <h4 className={styles.username}>@Username</h4>
            <Divider />


            <Form
                name="basic"
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles.form}
                {...formItemLayout}
            >
                <Form.Item
                    layout="vertical"
                    name="name"
                    className={styles.formItem}
                    label={
                        <label className={styles.label}>Nombre de usuario</label>
                    }
                    labelCol={{ span: 36 }}
                    wrapperCol={{ span: 36 }}
                >
                    <Input className={styles.input} disabled />
                </Form.Item>
                
                <span className={styles.space} />

                <div style={{display: 'flex', gap: '1rem'}}>
                    <Form.Item
                        style={{width: '50%'}}
                        layout="vertical"
                        name="surname"
                        className={styles.formItem}
                        label={
                            <label className={styles.label}>Apellido</label>
                        }
                        labelCol={{ span: 36 }}
                        wrapperCol={{ span: 36 }}
                    >
                        <Input className={styles.input} disabled />
                    </Form.Item>
                    <Form.Item
                        style={{width: '50%'}}
                        layout="vertical"
                        name="birth"
                        className={styles.formItem}
                        label={
                            <label className={styles.label}>Fecha de nacimiento</label>
                        }
                        labelCol={{ span: 36 }}
                        wrapperCol={{ span: 36 }}
                    >
                        <DatePicker className={styles.datePicker} style={{width: '100%'}} disabled/>
                    </Form.Item>
                </div>

                <span className={styles.space} />

                <Form.Item
                    layout='vertical'
                    name='pasword'
                    label={
                        <label className={styles.label}>Contraseña</label>
                    }
                    labelCol={{ span: 36 }}
                    wrapperCol={{ span: 36 }}
                    className={styles.formItem}
                >
                    <Input className={styles.input} type='password' />
                </Form.Item>

                <span className={styles.space} />

                <Button className={styles.button}>
                    Guardar cambios
                </Button>
            <Divider/>

            <div className={styles.security}>
                <p>Seguridad</p>
            </div>

            <Button className={styles.securityButton}>
                Activar 2FA
            </Button>
            </Form>
            
        </div>
    )
}

export default Profile