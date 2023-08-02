import React from 'react'
import styles from './Community.module.css'
import { Followers } from '../../Data/FollowersData'

const Community = () => {
  return (
    <div className={styles.FollowersCard}>
        {Followers. map((follower, id)=>{
            return(
                <div className={styles.follower}>
                    <div>
                        <img src={follower.img} alt="" className={styles.followerImage} />
                        <div className={styles.name}>
                            <span>{follower.name}</span>
                            <span>{follower.username}</span>
                        </div>
                    </div>
                    <button className={`${styles.button} ${styles.fc_button}`}>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default Community;