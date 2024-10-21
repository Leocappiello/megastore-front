/* import { Button, Card, Col, Divider, Image, Row, Select, Skeleton, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './product.module.css'
import Meta from 'antd/es/card/Meta'
import { IoBagOutline, IoCart } from 'react-icons/io5'
import { FaArrowLeft } from "react-icons/fa6";

const { Title, Text } = Typography;

const BackButton = () => {
  return (
    <div onClick={() => console.log('volver')} style={{backgroundColor: 'black', borderRadius: '50%', color:'white', width: '100%', height: '100%', maxWidth: '40px', maxHeight: '40px', textAlign: 'center', position: 'absolute', zIndex: 2, justifyContent: 'center', fontSize: '20px', display:'flex', alignItems: 'center', top: '2rem', left: '2rem'}}>
      <FaArrowLeft color='white' />
    </div>
  )
}


const product = () => {
  const quantity = 4
  const urlImage = "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2bff7577b34435e974ee7d13c6dd565_9366/adidas_TAEKWONDO_W_Blanco_JQ4774_01_standard.jpg";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500)

    return () => clearTimeout(timer);
  }, [])

  const {id} = useParams()

  return (
    <Card className={styles.card} styles={{body: { height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', zIndex: 1}}}>
      <Row gutter={24} style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center'}}>
        <BackButton />
        <Col span={10} style={{width: '100%', padding: 0, display: 'flex', justifyContent: 'center'}}>
        {
          loading ?
          <Skeleton.Image active={loading} />
          :
          <Meta 
            style={{margin: '3rem'}}
            avatar={
              <Image
                className={styles.image}
                alt="example"
                src={urlImage} />
              }
          />
        }
        </Col>

        <Col span={14} style={{ display: 'flex',height: '100%', flexDirection: 'column', maxWidth: '1200px', margin: '0 auto', justifyContent: 'space-around'}}>
          <Row style={{display: 'flex', flexDirection: 'column'}}>
            <Title style={{margin: 0}} level={1}>Titulo del prodc</Title>
            <Title style={{color: '#696969', margin: '.5rem 0'}} level={4}>Categoria del producto</Title>
            <Title style={{margin: '0 0 1rem'}} level={1}>Precio:</Title>

            <Row style={{display: 'flex', justifyContent: 'start', width: '100%', alignItems: 'center', margin: '1rem 0'}}>
              <Text>Cantidad</Text>

              <Select
                defaultValue={1}
                options={Array.from({length: quantity}, (_, index) => ({label: index + 1, value: index + 1}))}
                disabled={quantity < 0}
                style={{margin: '0 0 0 1rem', maxWidth: '100px'}}
              />
            </Row>

            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
              <Button disabled={quantity < 0} icon={<IoBagOutline />} style={{backgroundColor: '#f3f3f3', color: 'black', padding: '1.2rem 0', margin: '1rem 0', width: '50%', marginRight: '1rem'}}>
                Comprar ahora
              </Button>
              <Button disabled={quantity < 0} icon={<IoCart />} style={{backgroundColor: 'black', color: 'white', padding: '1.2rem 0', margin: '1rem 0', width: '50%', marginLeft: '1rem'}}>
                Agregar al carrito
              </Button>
            </div>
          </Row>

          <Divider style={{border: '1px solid #c3c3c3'}}/>
          <Row>
            <div style={{overflowY: 'scroll', color: 'gray', maxHeight: '400px', padding: '0 1.5rem'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita, cum fugiat, corrupti sequi quaerat facilis commodi impedit repudiandae pariatur placeat dicta error omnis ipsa nesciunt hic, quia sint saepe?</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default product */
import { Button, Card, Col, Divider, Image, Row, Select, Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './product.module.css';
import Meta from 'antd/es/card/Meta';
import { IoBagOutline, IoCart } from 'react-icons/io5';
import { FaArrowLeft } from 'react-icons/fa6';

const { Title, Text } = Typography;

const BackButton = () => {
  return (
    <Link to={`/`}>
      <div className={styles.backButton}>
        <FaArrowLeft color='white' />
      </div>
    </Link>
  );
};

const Product = () => {
  const quantity = 4;
  const urlImage = "https://assets.adidsas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2bff7577b34435e974ee7d13c6dd565_9366/adidas_TAEKWONDO_W_Blanco_JQ4774_01_standard.jpg";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const { id } = useParams();

  return (
    <Card className={styles.card} styles={{body: { height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', zIndex: 1}}}>
      <Row className={styles.row}>
        <BackButton />
        <Col span={10} className={styles.imageCol}>
          {loading ? (
            <Skeleton.Image active={loading} />
          ) : (
            <Meta
              className={styles.meta}
              avatar={
                <Image
                  className={styles.image} 
                  alt="example" 
                  src={urlImage} 
                  fallback='/no-image.jpg'
                />
              }
            />
          )}
        </Col>

        <Col span={14} className={styles.detailsCol}>
          <Row className={styles.detailsRow}>
            <Title className={styles.title} level={1}>Titulo del prodc</Title>
            <Title className={styles.category} level={5}>Categoria del producto</Title>
            <Title className={styles.priceTitle} level={3}>Precio:</Title>

            <Row className={styles.quantityRow}>
              <Text>Cantidad</Text>
              <Select
                defaultValue={1}
                options={Array.from({ length: quantity }, (_, index) => ({ label: index + 1, value: index + 1 }))}
                disabled={quantity < 0}
                className={styles.select}
              />
            </Row>

            <div className={styles.buttonGroup}>
              <Button disabled={quantity < 0} icon={<IoBagOutline />} className={styles.buyButton}>
                Comprar ahora
              </Button>
              <Button disabled={quantity < 0} icon={<IoCart />} className={styles.cartButton}>
                Agregar al carrito
              </Button>
            </div>
          </Row>

          <Divider className={styles.divider} />
          <Row>
            {/* <div  */}
          <div className={styles.description}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quidem saepe esse ipsam explicabo, qui sit modi repellat accusantium delectus perferendis libero. Amet dolorem mollitia inventore esse, quaerat voluptatibus eos?</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Product;
