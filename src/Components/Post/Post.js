import React, { memo,useState } from 'react';
import styles from './post.module.css'
import Comment from '../../Images/comment.png';
import Share from '../../Images/share.png';
import Like from '../../Images/like.png';
import NotLike from '../../Images/notlike.png';
import image from '../../Images/profileImg.jpg';

const Post = ({data}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};
  return (
    <div className={styles.Post}>
                    <div className={styles.follower}>
                    <div>
                        <img src={image} alt="" className={styles.followerImage} />
                        <div className={styles.name}>
                            <span>@iamaGaurav •<span style = {{color: "#F45046"}}>27 days ago</span></span>
                            <span>Gaurav</span>
                        </div>
                    </div>
                    <button className={`${styles.button} ${styles.fc_button}`}>
                    <span style={{color: "#F45046", marginRight: "3 px", fontWeight: "800",fontSize: "15px"}}>+</span>Follow
                  </button>
          </div>
        
        <div className={styles.detail}>
          <p>  
          {isReadMore ? data.desc.slice(0, 100): data.desc }
          {data.desc.length > 150 &&
          <p onClick={toggleReadMore}>
          {isReadMore ? '...Read More' : ' ...show less'}
        </p>
      }</p>
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