import { memo } from 'react';
import Card from '../../UI/Card';
import Avatar from '../Avatar/avatar';
import img from '../Images/image1.jpg';
import styles from './follower.module.css';

const Follower = () => {
  return (
    <Card>
        <div className={styles.follows}>
            <div className={styles.follow}>
                <div>
                <Avatar img = {img}/>
                </div>
                <div className={styles.followersName}>
                <p>@cipherschools</p>
                <h4>Cipher...</h4>
                </div>
            </div>
            <div>
                <h3>Follow</h3>
            </div>
        </div>
        
    </Card>
  )
}

export default memo(Follower);