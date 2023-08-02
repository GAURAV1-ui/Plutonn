import { memo } from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import Profile from '../../../Components/Profile/profile';
import Follower from '../../../Components/Follower/follower';

const Leftsection = () => {
  return (
    <>  
        <Profile/>
        <Navbar/>
        <Follower/>
    </>
  )
}

export default memo(Leftsection);