import { memo } from 'react';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Follower from '../Follower/FollowersCard';
import styles from './LeftSection.module.css';

const Leftsection = () => {
  return (
    <>  
      <div className={styles.Leftsection}>
        <div>
          <Profile/>
        </div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Follower/>
        </div>
      </div>
    </>
  )
}

export default memo(Leftsection);