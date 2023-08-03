import React, { useState, useRef } from "react";
import ProfileImage from "../../Images/profileImg.jpg";
import styles from "./PostShare.module.css";
// import { UilScenery } from "@iconscout/react-unicons";
// import { UilPlayCircle } from "@iconscout/react-unicons";
// import { UilLocationPoint } from "@iconscout/react-unicons";
// import { UilSchedule } from "@iconscout/react-unicons";
// import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
//   const [image, setImage] = useState(null);
//   const imageRef = useRef();

//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       setImage({
//         image: URL.createObjectURL(img),
//       });
//     }
//   };
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