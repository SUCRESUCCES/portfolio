import React from "react";

const EducationList = ({ items }) => {
  return (
    <ul>
      {items.map((edu, idx) => (
        <li key={idx}>{edu}</li>
      ))}
    </ul>
  );
};

export default EducationList;
