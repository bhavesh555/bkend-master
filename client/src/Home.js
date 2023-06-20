import React, { useState, useEffect } from "react";
const Home = () => {
  return (
    <div>
      <h1>
        WELCOME TO THE BACKEND OF CSE WEBSITE CHOOSE THE ROUTES DEFINED ABOVE TO
        MAKE NEW POSTS IN RESPECTIVE SECTIONS!!
      </h1>{" "}
      <br />
      <h2>
        {" "}
        Dont upload IMAGES instead FOLLOW THESE STEPS TO POST IMAGES!!{" "}
      </h2>{" "}
      <dl>
        <dt> STEP 1 </dt>{" "}
        <dd>
          -UPLOAD IMAGE TO GOOGLE DRIVE OF ACE & GO TO SHARE ON TOPRIGHT CORNER.{" "}
        </dd>{" "}
        <dt> STEP 2 </dt>{" "}
        <dd>
          -MARK THE IMAGES PUBLLIC BY SELECTING::SHARE TO ALL HAVING THE LINK{" "}
        </dd>{" "}
        <dt> STEP 3 </dt>{" "}
        <dd>
          GO TO THIS LINK{" "}
          <a href="https://www.labnol.org/embed/google/drive/"> CLICK HERE </a>{" "}
        </dd>{" "}
        <dt> STEP 4 </dt>{" "}
        <dd>
          PASTE DRIVE LINK WHERE IT ASKS TO GENERATE DIRECT LINK AND COPY THE "
          | DIRECT IMAGE LINK |
        </dd>{" "}
        <dt> STEP 5 </dt>{" "}
        <dd> PASTE THE " | DIRECT IMAGE LINK | " IN THE YOUR POST FORM </dd>{" "}
      </dl>{" "}
    </div>
  );
};
export default Home;
