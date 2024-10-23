import Sider from "antd/es/layout/Sider"
import styles from './dashboard.module.css'
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai"
import { IoTicketSharp } from "react-icons/io5";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { Menu, MenuProps, Layout } from "antd";
import { TbUserQuestion } from "react-icons/tb";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Usuarios', '1', <FaUserAlt />),
  getItem('Productos', '2', <AiOutlineShop />),
  getItem('Acciones', '3', <FaGear />),
  getItem('Pedidos', '4', <IoTicketSharp />),
  getItem('Promociones', '5', <BsFillMegaphoneFill />),
  getItem('Notificaciones', '6', <FaRegBell />),
  getItem('Pagos', '7', <FaWallet />),
  getItem('Reportes', '8', <FaChartLine />),
  getItem('Consultas', '9', <TbUserQuestion />),
];

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Layout className={styles.layoutAnt} style={{ height: '100%', borderRadius: '15px 0 0 15px' }}>
        <Sider
          className={styles.sider}
          style={{height: '100%', borderRadius: '15px 0 0 15px'}}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
            className={styles.siderMenu}
          />
        </Sider>
      </Layout>
    </div>
  )
}

export default Dashboard