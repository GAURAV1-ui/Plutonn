import { memo } from 'react';
import Avatar from '../../../../Components/Avatar/avatar';
import styles from './post.module.css';

const Post = () => {
  return (
    <>
        <div className={styles.profiles}>
            <div className={styles.profile}>
            <div>
                <Avatar/>
            </div>
            <div>
                <p>@iamGaurav.21days ago</p>
                <h3>Nitesh Kumar</h3>
            </div>
            </div>
            <div className= {styles.profile}>
            <div>
                <p>+ Follow |</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default memo(Post);