import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import styles from './LogoSearch.module.css';
const LogoSearch = () => {
  return (
   <div className={styles.LogoSearch}>
       <div className={styles.Search}>
           <input type="text" placeholder='Search' />
           <div className={styles.s_icon}>
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch;