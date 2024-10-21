import { Card, Divider, List, Statistic, Table, Typography } from 'antd'
import React from 'react'
import styles from './checkout.module.css'

const { Title } = Typography;

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
        //render
    },
    {
        title: 'Precio unitario',
        dataIndex: 'unitPrice',
        key: 'unitPrice',
        //render
    },
    {
        title: 'Subtotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
        //render
    },
  ];
  const data = [
    {

    }
  ];

  return (
    <Card className={styles.container}>
        <Title level={2}>Carrito de compras</Title>
        <Divider />
        <Table 
            columns={columns}
            dataSource={data}
        />
        <Divider />
        <Statistic 
            title={'Total'}
            value={0}
        />
    </Card>
  )
}

export default Checkout