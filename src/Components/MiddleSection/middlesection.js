import { memo } from 'react';
import Post from './Post/post';

const MiddleSection = () => {
  return (
    <>
        <Post/>
    </>
  )
}

export default memo(MiddleSection);