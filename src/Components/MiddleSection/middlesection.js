import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import styles from './MiddleSection.module.css';
const MiddleSection = () => {
  return (
   <div className={styles.PostSide}>
       <PostShare/>
       <Posts/>
   </div>
  )
}

export default MiddleSection;