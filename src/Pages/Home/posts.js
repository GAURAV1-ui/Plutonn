import { memo } from 'react';
import styles from './posts.module.css';
import Leftsection from './LeftSection/leftsection';

const Posts = () => {
  return (
    <>
        <div>
            <Leftsection/>
        </div>
    </> 
  )
}

export default memo(Posts);