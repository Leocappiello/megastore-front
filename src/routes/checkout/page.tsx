import { Button, Card, Divider, Statistic, StatisticProps, Table, Tooltip, Typography } from 'antd';
import styles from './checkout.module.css';

import CountUp from 'react-countup';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

const { Title } = Typography;

const BackButton = () => {
  return (
    <Link to={`/`}>
      <div className={styles.backButton}>
        <FaArrowLeft color='white' />
      </div>
    </Link>
  );
};

const Checkout = () => {
  const columns = [
    {
        title: 'Nombre',
        dataIndex: 'product',
        key: 'product',
        //render
    },
    {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (_, elem) => (
          <span style={{display: 'flex', alignItems: 'center'}}>
            <Tooltip title={'Mas'} className={styles.action}>
              <p><FaPlus /></p>
            </Tooltip>
            <p style={{margin: '0 .75rem 0'}}>{elem.quantity}</p>
            <Tooltip title={'Menos'} className={styles.action}>
              <p><FaMinus /></p>
            </Tooltip>
          </span>
        )
    },
    {
        title: 'Precio unitario',
        dataIndex: 'unitPrice',
        key: 'unitPrice',
        render: (_, elem) => (<p>${elem.unitPrice}</p>)
    },
    {
        title: 'Subtotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
        render: (_, elem) => (<p>${elem.quantity * elem.unitPrice}</p>)
    },
    {
        title: 'Acciones',
        render: (_, elem) => (
          <>
            <Tooltip title={'Quitar'} className={styles.action}>
              <IoMdCloseCircleOutline size={24} />
            </Tooltip>
          </>
        )
    },
  ];

  const data = [
    {
        id: '1',
        product: 'Producto A',
        quantity: 2,
        unitPrice: 50,
    },
    {
        id: '2',
        product: 'Producto B',
        quantity: 1,
        unitPrice: 30,
    },
    {
        id: '3',
        product: 'Producto C',
        quantity: 5,
        unitPrice: 20,
    },
    {
        id: '4',
        product: 'Producto D',
        quantity: 3,
        unitPrice: 15,
    },
    {
      id: '1',
      product: 'Producto A',
      quantity: 2,
      unitPrice: 50,
  },
  {
      id: '2',
      product: 'Producto B',
      quantity: 1,
      unitPrice: 30,
  },
  {
      id: '3',
      product: 'Producto C',
      quantity: 5,
      unitPrice: 20,
  },
  {
      id: '4',
      product: 'Producto D',
      quantity: 3,
      unitPrice: 15,
  },
  {
    id: '1',
    product: 'Producto A',
    quantity: 2,
    unitPrice: 50,
},
{
    id: '2',
    product: 'Producto B',
    quantity: 1,
    unitPrice: 30,
},
{
    id: '3',
    product: 'Producto C',
    quantity: 5,
    unitPrice: 20,
},
{
    id: '4',
    product: 'Producto D',
    quantity: 3,
    unitPrice: 15,
},
  ];


  return (
    <>
      <BackButton />
      <Card className={styles.container}>
          <Title level={2}>Carrito de compras</Title>
          <Divider />
          {
            data.length ?
            <>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                style={{overflowY: 'scroll', maxHeight: '400px'}}
              />
              <Statistic
                prefix={'$'}
                className={styles.statistic}
                title={'Total'}
                value={data.reduce((acum, elem) => acum + (elem.quantity * elem.unitPrice), 0)}
                formatter={formatter}
              />
              <div className={styles.footer}>
                <Button className={styles.emptyCart}>Vaciar carrito</Button>
                <Button className={styles.checkout}>Ir a pagar</Button>
              </div>
            </>
            :
            <p>No hay productos en el carrito</p>
          }
      </Card>
    </>
  )
}

export default Checkout