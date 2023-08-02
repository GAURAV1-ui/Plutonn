import { memo } from 'react';
import styles from './home.module.css';
import LeftSection from '../../Components/LeftSection/LeftSection';
import Middlesection from '../../Components/MiddleSection/middlesection';

const Home = () => {
  return (
    <>
        <div className = {styles.posts}>
            <LeftSection/>
            <Middlesection/>
        </div>
    </> 
  )
}

export default memo(Home);