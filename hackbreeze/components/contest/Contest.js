import React from "react";
import Des from "./Des";
function ContestList() {
  let mydate = new Date(2023, 2, 2, 1, 1, 1);
  let duration = 2;
  let attendees = 150;
  let contest_name = "Lorem ipsum dolor sit amet.";
  let friends_att = "Lorem, ipsum, dolor...";
  let contest_des =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...";
  return (
    <Des
      date={mydate}
      duration={duration}
      attendees={attendees}
      contest_name={contest_name}
      contest_des={contest_des}
      friends_att={friends_att}
    ></Des>
  );
}

export default ContestList;
