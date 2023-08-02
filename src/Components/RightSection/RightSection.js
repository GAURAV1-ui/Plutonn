import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import Community from '../Communty/Community';
import styles from './RightSide.module.css';

const RightSection = () => {
  return (
    <>
      <div className={styles.rightSide}>
      <LogoSearch/>
      <Community/>
      </div>
    </>
  )
}

export default RightSection;