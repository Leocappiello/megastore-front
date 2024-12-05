import { Button, Card, Col, Divider, Image, Row, Select, Skeleton, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoBagOutline, IoCart } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './product.module.css';

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

const Product = ({product}) => {
  // const quantity = 4;
  // const urlImage = "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2bff7577b34435e974ee7d13c6dd565_9366/adidas_TAEKWONDO_W_Blanco_JQ4774_01_standard.jpg";
  const [loading, setLoading] = useState(true);
console.log(product);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
                  src={product.imagesUrls[0].imageUrl}
                  fallback='/no-image.jpg'
                />
              }
            />
          )}
        </Col>

        <Col span={14} className={styles.detailsCol}>
          <Row className={styles.detailsRow}>
            <Title className={styles.title} level={1}>{product.name}</Title>
            <Title className={styles.category} level={5}>{product.subcategory?.category?.name} {'>'} {product.subcategory?.name}</Title>
            <Title className={styles.priceTitle} level={3}>Precio:${product.price}</Title>

            <Row className={styles.quantityRow}>
              <Text>Cantidad</Text>
              <Select
                defaultValue={1}
                options={Array.from({ length: product.quantity }, (_, index) => ({ label: index + 1, value: index + 1 }))}
                disabled={product.quantity < 0}
                className={styles.select}
              />
            </Row>

            <div className={styles.buttonGroup}>
              <Button disabled={product.quantity < 0} icon={<IoBagOutline />} className={styles.buyButton}>
                Comprar ahora
              </Button>
              <Button disabled={product.quantity < 0} icon={<IoCart />} className={styles.cartButton}>
                Agregar al carrito
              </Button>
            </div>
          </Row>

          <Divider className={styles.divider} />
          <Row>
          <div className={styles.description} id='description'>
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
