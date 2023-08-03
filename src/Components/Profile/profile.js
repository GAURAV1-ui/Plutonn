import { memo } from 'react';
import Avatar from '../Avatar/avatar';
import styles from './Profile.module.css';
import Card from '../../UI/Card';
import img from '../../Images/image1.jpg';
import message from '../../Images/message.png';

const Profile = () => {
  return (
    <Card>
        <div className={styles.profileCard}>
        <div className={styles.profile}>
            <img src = {img}/>
        </div>
        <div className={styles.follow}>
            <di className={styles.followers}>
                <span>27k</span>
                <span>Followers</span>
            </di>
            <div className={styles.followers}>
                <span>76</span>
                <span>Following</span>
            </div>
        </div>
        <div className={styles.userName}>
            <span>ABC User</span>
            <span>@abc_plutonn</span>
        </div>
        <div className={styles.description}>
            <span>Hey!, Welcome to Plutonn</span>
            <br/>
            <span>Share | Connect | Apply.</span>
        </div>
        <div className={styles.post}>
            <button><img src ={message} alt ="" style = {{width: "25px", marginRight: "5px",marginBottom: "-5px", color: "white"}}/>Post</button>
        </div>
    </div>
    </Card>
  )
}

export default memo(Profile);