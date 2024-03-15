"use client";

import { get } from "@/functions/get";

const team_members = [
  {
    id: 1,
    name: "team.hbkh.name",
    role: "Project Manager",
    src: "/assets/svgs/avatar1.png",
  },
  {
    id: 2,
    name: "team.ctd.name",
    role: "Tech Lead",
    src: "/assets/svgs/avatar4.png",
  },
  {
    id: 3,
    name: "team.tnv.name",
    role: "Team Lead",
    src: "/assets/svgs/avatar2.png",
  },
];

interface TeamsProps {
  dict: any;
}
export default function Teams({ dict }: TeamsProps) {
  const i18nTeams = team_members.map(({ id, name, role, src }) => ({
    id,
    name: get(dict, name) as string,
    role,
    src,
  }));

  return (
    <div
      id="team"
      className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            {/* <span className="font-light">Our</span> Team */}
            {dict.team.title}
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
          </svg>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {i18nTeams.map(({ id, name, role, src }) => (
            <div
              key={id}
              className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6"
            >
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                {/* team block */}
                <div className="relative overflow-hidden px-6">
                  <img
                    src={src}
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    {name}
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    {role}
                  </p>
                  {/* social icon */}
                </div>
              </div>
              {/* end team block */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
