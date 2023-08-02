import { memo } from 'react';
import styles from './Post.module.css'
import Comment from '../../Images/comment.png';
import Share from '../../Images/share.png';
import Like from '../../Images/like.png';
import NotLike from '../../Images/notlike.png';
import image from '../../Images/profileImg.jpg';

const Post = ({data}) => {
  return (
    <div className={styles.Post}>
                    <div className={styles.follower}>
                    <div>
                        <img src={image} alt="" className={styles.followerImage} />
                        <div className={styles.name}>
                            <span>@iamaGaurav</span>
                            <span>Gaurav</span>
                        </div>
                    </div>
                    <button className={`${styles.button} ${styles.fc_button}`}>
                        Follow
                  </button>
          </div>
        
        <div className={styles.detail}>
            <span> {data.desc}</span>
        </div>

        <img src={data.img} alt="" />


        <div className={styles.postReact}>
            <img src={Comment} alt="" />
            <span style={{color: "var(--gray)", fontSize: '14px',marginLeft: '-1rem'}}>{data.likes}</span>
            <img src={data.liked?Like: NotLike} alt="" />
            <span style={{color: "var(--gray)", fontSize: '14px' ,marginLeft: '-1rem'}}>{data.likes}</span>
            <img src={Share} alt="" />
        </div>
    </div>
  )
}

export default memo(Post);