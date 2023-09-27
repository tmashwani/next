"use client";
import React from "react";
const Student = ({ params }) => {
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name : {params.Student}</h3>
    </div>
  );
};

export default Student;
