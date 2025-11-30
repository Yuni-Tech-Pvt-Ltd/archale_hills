import React from "react";
import Main from "./component/main";
import Discover from "./component/discover";
import Activities from "./component/activities";
import Rooms from "./component/rooms";
import Service from "./component/service";
import Blog from "./component/blog";
import Contact from "./component/contact";

export default function Home() {
  return (
    <>
      {" "}
      <Main />
      <Discover />
      <Activities />
      <Rooms />
      <Service />
      <Blog />
      <Contact/>
    </>
  );
}
