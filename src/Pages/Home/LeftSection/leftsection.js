import { memo } from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import Profile from '../../../Components/Profile/Profile';
import Follower from '../../../Components/Follower/FollowersCard';
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