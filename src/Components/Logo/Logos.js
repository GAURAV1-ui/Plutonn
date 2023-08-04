import { memo } from 'react';
import Avatar from '../Avatar/avatar';
import img from '../../Images/image1.jpg';
import noti from '../../Images/noti.png';
import styles from './logo.module.css';


const Logos = () => {
  return (
    <>
      <div className={styles.noti}>
        <img src={noti} alt="" style = {{width: "20px", height: "28px", marginTop : "25px",marginRight: "10px"}}/>
        <Avatar img={img}/>
      </div>
        
    </>
  )
}

export default memo(Logos);