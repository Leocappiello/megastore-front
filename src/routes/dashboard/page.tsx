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
import { useState } from "react";
import Default from "./sections/default";
import DashboardUsers from "./sections/users";
import DashboardProducts from "./sections/products";

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
  getItem('Usuarios', 'users', <FaUserAlt />),
  getItem('Productos', 'products', <AiOutlineShop />),
  getItem('Acciones', '3', <FaGear />),
  getItem('Pedidos', '4', <IoTicketSharp />),
  getItem('Promociones', '5', <BsFillMegaphoneFill />),
  getItem('Notificaciones', '6', <FaRegBell />),
  getItem('Pagos', '7', <FaWallet />),
  getItem('Reportes', '8', <FaChartLine />),
  getItem('Consultas', '9', <TbUserQuestion />),
];

interface Event {
  key: string
}

const Dashboard = () => {
  const [section, setSection] = useState(null);

  const handleChangeSection = (e: Event) => {
    setSection(e.key)
  };

  const getSectionActive = () => {
    switch (section) {
      case 'users':
        return (<DashboardUsers/>)
      case 'products':
        return (<DashboardProducts/>)
      case null:
      return <Default />;
      default:
        return <div>Seccion no valida</div>;
    }
  }

  return (
    <div className={styles.container}>
      <Layout className={styles.layoutAnt} style={{ height: '100%', borderRadius: '15px 0 0 15px' }}>
        <Sider
          className={styles.sider}
          style={{height: '100%', borderRadius: '15px 0 0 15px'}}
        >
          <Menu
            onClick={handleChangeSection}
            theme="dark"
            mode="inline"
            items={items}
            className={styles.siderMenu}
          />
        </Sider>
        
        {getSectionActive()}
      </Layout>
    </div>
  )
}

export default Dashboard