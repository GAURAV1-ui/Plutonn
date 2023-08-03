import { memo } from 'react';
import Card from '../../UI/Card';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import home from "../../Images/home.png";
import search from '../../Images/search.png';
import community from '../../Images/community.png';
import course from '../../Images/course.png';


const Navbar = () => {
  return (
    <Card>
        <div className={styles.navbar}>
            <NavLink to = "/" className={styles.list}><img src = {home} alt ="" style = {{width: "15px", height: "15px",marginRight: "5px"}}/>Home</NavLink>
            <NavLink to = "/community" className={styles.list}><img src = {community} alt ="" style = {{width: "15px", height: "15px",marginRight: "5px"}}/>Community</NavLink>
            <NavLink to = "/search" className={styles.list}><img src = {search} alt ="" style = {{width: "15px", height: "15px",marginRight: "5px"}}/>Search</NavLink>
            <NavLink to = "/course" className={styles.list}><img src = {course} alt ="" style = {{width: "15px", height: "15px",marginRight: "5px"}}/>Courses</NavLink>
        </div>
    </Card>
  )
}

export default memo(Navbar);