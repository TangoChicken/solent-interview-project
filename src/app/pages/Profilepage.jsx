import React from "react";
import StaffProfile from "Components/StaffProfile/StaffProfile";

const Profilepage = (props) => {
  return (
    <>
      <StaffProfile result={props.location.state} />
    </>
  );
};

export default Profilepage;

export { Profilepage };
