import React from "react";

const Profile = (props) => {
  return (
    <div>
      {props.name
        ? "Welcome back, " + props.name
        : "You are not logged in yet."}
    </div>
  );

}
export default Profile;