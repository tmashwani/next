"use client"
import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/about/aboutstudent">Goto About Student Page</Link>
      <br />
      <Link href="/about/aboutcollage">Goto About Collage Page</Link>
    </div>
  );
};
export default About;
