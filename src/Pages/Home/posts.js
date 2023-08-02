import { memo } from 'react';
import styles from './Posts.module.css';
import Leftsection from './LeftSection/LeftSection';
import Middlesection from './MiddleSection/middlesection';

const Posts = () => {
  return (
    <>
        <div className = {styles.posts}>
            <Leftsection/>
            <Middlesection/>
        </div>
    </> 
  )
}

export default memo(Posts);