import React, { useState, useRef } from "react";
import ProfileImage from "../../Images/profileImg.jpg";
import styles from "./postShare.module.css";


const PostShare = () => {

  return (
    <div className={styles.PostShare}>
      <img src={ProfileImage} alt="" />
      <div className={styles.input}>
        <textarea placeholder="What is in your mind..." rows="3" cols="110">
          </textarea>

      </div>
    </div>
  );
};

export default PostShare;