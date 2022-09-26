import React from "react";
import PropTypes from "prop-types";
const Footerapp = ({children,title}) => {

  return <>
  <h2>{title}</h2>
  {children}</>;
};
Footerapp.propTypes = {
    title: PropTypes.string
   };
Footerapp.defaultProps = {
    title: "Workshop"
   };
export default Footerapp;
