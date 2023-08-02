import { memo } from 'react';
import Card from '../../UI/Card';
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <Card>
        <div className={styles.navbar}>
            <NavLink to = "/" className={styles.list}>Home</NavLink>
            <NavLink to = "/" className={styles.list}>Community</NavLink>
            <NavLink to = "/" className={styles.list}>Search</NavLink>
            <NavLink to = "/" className={styles.list}>Courses</NavLink>
        </div>
    </Card>
  )
}

export default memo(Navbar);