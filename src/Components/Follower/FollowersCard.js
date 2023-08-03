import React,{useState} from 'react'
import styles from './FollowersCard.module.css'
import { Followers } from '../../Data/FollowersData'
import Card from '../../UI/Card';

const FollowersCard = () => {
    const [isActive, setIsActive] = useState(true);

    const followHandeler = () => {
        setIsActive(!isActive);
    }
  return (
    <Card>
    <div className={styles.FollowersCard}>
        {Followers. map((follower, id)=>{
            return(
                <div className={styles.follower}>
                    <div>
                        <img src={follower.img} alt="" className={styles.followerImage} />
                        <div className={styles.name}>
                            <span>@{follower.username}</span>
                            <span>{follower.name}</span>
                        </div>
                    </div>
                    <button className={`${styles.button} ${styles.fc_button}`} onClick={followHandeler}>
                       <span style={{color: "#F45046", marginRight: "3 px", fontWeight: "800",fontSize: "15px"}}>+</span>
                       Follow
                    </button>
                </div>
            )
        })}
    </div>
    </Card>
  )
}

export default FollowersCard