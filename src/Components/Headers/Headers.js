import { memo } from 'react';
import Avatar from '../Avatar/avatar';
import img from '../../Images/image1.jpg';
import styles from './headers.module.css'
import Logos from '../Logo/logos';

const Header = (props) => {
  return (
    <>
    <div className={styles.headers}>
    <div className={styles.header}>
        <span className={styles.logo}>
            <Avatar img = {img}/>
            <h1>Plutonn</h1>
        </span>
        <span>
            <h2>Post</h2>
        </span>
        <span>
            <Logos/>
        </span>
        </div>
        <hr/>
        </div>
      </>
  )
}

export default memo(Header);