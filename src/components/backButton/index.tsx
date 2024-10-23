import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './backButton.module.css';


const BackButton = ({route = '/'}) => {
    return (
      <Link to={route}>
        <div className={styles.backButton}>
          <FaArrowLeft color='white' />
        </div>
      </Link>
    );
  };

export default BackButton