import React from 'react';
import styles from './TopBar.module.css';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
    <div className={styles.topBar}>
    <NavLink
  to="posts"
  style={({ isActive }) => ({
    color: isActive ? '#F45046' : 'rgb(31, 29, 29)',
    background: isActive ? '#E6E7E7' : '#ffffff',
  })}
> Posts</NavLink>
<NavLink
  to="community"
  style={({ isActive }) => ({
    color: isActive ? '#F45046' : 'rgb(31, 29, 29)',
    background: isActive ? '#E6E7E7' : '#ffffff',
  })}
> Community</NavLink>
    </div>
    </>
  )
}

export default TopBar;