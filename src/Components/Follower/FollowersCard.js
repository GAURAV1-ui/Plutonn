import React from 'react'
import styles from './FollowersCard.module.css'
import { Followers } from '../../Data/FollowersData'
import Card from '../../UI/Card';

const FollowersCard = () => {
  return (
    <Card>
    <div className="FollowersCard">
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
                    <button className={`${styles.button} ${styles.fc_button}`}>
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