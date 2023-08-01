import { memo } from 'react';
import Avatar from '../Avatar/avatar';
import img from '../Images/image1.jpg';


const Logo = () => {
  return (
    <>
        <Avatar img={img}/>
    </>
  )
}

export default memo(Logo);