import { memo } from 'react';
import Avatar from '../Avatar/avatar';
import Logo from '../Logo/Logo';
import img from '../../Images/image1.jpg';
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <>
    <div className={styles.header}>
        <span className={styles.logo}>
            <Avatar img = {img}/>
            <h1>Plutonn</h1>
        </span>
        <span>
            <h2>Post</h2>
        </span>
        <span>
            <Logo/>
        </span>
        </div>
        <hr style={{ width: "1300px"}}/>
      </>
  )
}

export default memo(Header);