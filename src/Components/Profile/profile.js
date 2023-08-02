import { memo } from 'react';
import Avatar from '../Avatar/avatar';
import styles from './Profile.module.css';
import Card from '../../UI/Card';
import img from '../../Images/image1.jpg';

const Profile = () => {
  return (
    <Card>
        <div className={styles.profile}>
        <Avatar img = {img}/>
        </div>
        <div className={styles.follow}>
            <div className={styles.followers}>
                <h4>27K</h4>
                <h5>Followers</h5>
            </div>
            <div className={styles.followers}>
                <h4>76</h4>
                <h5>Following</h5>
            </div>
        </div>
        <div className={styles.userName}>
            <h2>ABC User</h2>
            <p>@abc_plutonn</p>
        </div>
        <div className={styles.description}>
            <p>Hey!, Welcome to Plutonn</p>
            <p>Share | Connect | Apply.</p>
        </div>
        <div className={styles.post}>
            <p>Post</p>
        </div>
    </Card>
  )
}

export default memo(Profile);