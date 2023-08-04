import { memo } from 'react';
import Navbar from '../Navbar/navbar';
import Profile from '../Profile/Profile';
import Follower from '../Follower/FollowersCard';
import styles from './leftSection.module.css';


const Leftsection = () => {

  

  return (
    <>  
      <div className={styles.leftSection}>
          <Profile/>
          <Navbar/>
          <Follower/>
      </div>
    </>
  )
}

export default memo(Leftsection);