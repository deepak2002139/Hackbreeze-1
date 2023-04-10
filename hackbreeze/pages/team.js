import React from "react";
import TeamBox from "../components/Team/TeamBox";
import Image from "next/image";
import Member from "../components/Team/Member";

const TeamPage = () => {
  return (
    <div className="my-12">
      <h1 className="text-center font-bold text-2xl my-4">Team XYZ</h1>
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div className="flex flex-col items-center justify-between h-full w-full md:w-1/2">
          <div className="my-6 w-full px-12">
            <TeamBox title={"Team members"}>
              <Member />
              <Member />
              <Member />
              <Member />
            </TeamBox>
          </div>
          <div className="my-6 w-full px-12">
            <TeamBox title={"Acheivements"}>
              {" "}
              1). Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto aperiam dolorum earum repellendus maxime accusamus,
              ratione <br /> 2). Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Architecto aperiam dolorum earum repellendus
              maxime accusamus
            </TeamBox>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between h-full w-full md:w-1/2">
          <div className="my-6 w-full px-12">
            <TeamBox title={"Team Progress"}>
              <div className="h-40 md:h-64 relative">
                <Image src={"/static/Form.png"} fill={true} alt="Chart" />
              </div>
            </TeamBox>
          </div>
          <div className="my-6 w-full px-12">
            <TeamBox title={"Description"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda nihil, facilis nesciunt modi dolorem dolor quidem sed,
              ullam placeat porro laboriosam tenetur eaque. Laboriosam
              reprehenderit illo officiis nostrum culpa. Consectetur. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              dignissimos amet explicabo animi eveniet obcaecati earum, odit
              ullam fugiat nemo repellendus quae voluptatem nulla necessitatibus
              assumenda quibusdam praesentium error illo?
            </TeamBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
