import React from 'react'
import Posts from '../Posts/posts'
import PostShare from '../PostShare/postShare'
import styles from './middleSection.module.css';
import image from '../../Images/image1.jpg';
import TopBar from '../TopBar/topBar';
const MiddleSection = () => {
  return (
    <>
   <div className={styles.middleSection}>
      <div className={styles.follower}>
                    <div>
                        <img src={image} alt="" className={styles.followerImage} />
                        <div className={styles.name}>
                            <span>DSA Community</span>
                            <span>90 Members</span>
                        </div>
                    </div>
                    <button className={`${styles.button} ${styles.fc_button}`}>
                        Leave
                  </button>
          </div>
          <TopBar/>
       <PostShare/>
       <Posts/>
   </div>
   </>
  )
}

export default MiddleSection;