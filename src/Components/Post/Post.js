import { memo } from 'react';
import styles from './Post.module.css'
import Comment from '../../Images/comment.png';
import Share from '../../Images/share.png';
import Heart from '../../Images/like.png';
import NotLike from '../../Images/notlike.png';

const Post = ({data}) => {
  return (
    <div className={styles.Post}>
        
        <div className={styles.detail}>
            <span> {data.desc}</span>
        </div>

        <img src={data.img} alt="" />


        <div className={styles.postReact}>
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>
    </div>
  )
}

export default memo(Post);