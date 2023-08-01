import { memo } from 'react';
import styles from './avatar.module.css';

const Avatar = (props) => {
  return (
    <>  
        <div className={styles.avatar}>
            <img src={props.img} alt="avatar"/>
        </div>
    </>
  )
}

export default memo(Avatar);