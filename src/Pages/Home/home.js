import { memo } from 'react';
import styles from './home.module.css';
import LeftSection from '../../Components/LeftSection/leftSection';
import Middlesection from '../../Components/MiddleSection/middleSection';
import RightSection from '../../Components/RightSection/rightSection';

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