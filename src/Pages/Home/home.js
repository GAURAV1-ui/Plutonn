import { memo } from 'react';
import styles from './home.module.css';
import LeftSection from '../../Components/LeftSection/LeftSection';
import Middlesection from '../../Components/MiddleSection/MiddleSection';
import RightSection from '../../Components/RightSection/RightSection';

const Home = () => {

  return (
    <>
        <div className = {styles.posts}>        
            <LeftSection/>
            <Middlesection/>
            <RightSection/>
        </div>
    </> 
  )
}

export default memo(Home);