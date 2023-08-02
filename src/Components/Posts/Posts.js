import { memo } from 'react'
import './Posts.module.css';
import { PostsData } from '../../Data/PostsData';
import styles from './Posts.module.css';
import Post from '../Post/Post';

const Posts = () => {
  return (
    <div className={styles.Posts}>          
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default memo(Posts);