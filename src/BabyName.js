import React from "react";

const BabyName = (props) => {
  return <li className={props.value.sex}>{props.value.name}</li>;
};

export default BabyName;

//{ props.value.sex === " f" ? "female" : "male" }
