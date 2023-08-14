import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsCard = () => {
  return (
    <div className=" flex flex-col items-center xl:gap-8  ">
      <button className="bg-blue-500 text-white py-2 px-8 text-2xl rounded-bl-2xl">
        My Projects
      </button>
      <div className="md:flex md:flex-wrap md:items-center md:pl-10 md:w-full xl:full lg:pl-48 xl:gap-12">
        <div className="flex flex-col    m-4 w-72 h-96  px-6  lg:w-2/5 xl:gap-5 xl:mb-20 ">
          <div className="w-full h-full relative  xl:pb-60">
            <Image alt="" src="/dashboard.png" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-green-200 py-2 px-4 ">
            <h2 className="text-xl md:text-2xl md:font-medium">Dashboard</h2>
            <p className="text-sm  xl:text-lg">
              Experience the power of data visualization with our Dynamic Data
              Dashboard. Monitor key metrics, track trends, and gain insights at
              a glance. A user-friendly interface puts the information you need
              right at your fingertips.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col    m-4 w-72 h-96 px-6 lg:w-2/5 ">
          <div className="w-full h-full relative  xl:pb-56 ">
            <Image
              alt=""
              src="/socialmedia.png"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 bg-green-200 py-2 px-4 ">
            <h2 className="text-xl md:text-2xl md:font-medium">Social Media</h2>
            <p className="text-sm  xl:text-lg">
              Presenting a clone of a popular social media platform. Explore
              familiar features, connect with friends, share updates, and engage
              with content—all within a faithful recreation of the well-loved
              social experience.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col    m-4 w-72 h-96 px-4  lg:w-2/5">
          <div className="w-full h-full relative flex  xl:pb-56  ">
            <Image
              alt=""
              src="/managmentsystem.png"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 bg-green-200 px-2 py-5 ">
            <h2 className="text-xl md:text-2xl md:font-medium">
              Managment system
            </h2>
            <p className="text-sm  xl:text-lg">
              Streamline operations with our Integrated Management System.
              Effortlessly manage tasks, resources, and projects in one
              centralized platform. Boost efficiency, collaboration, and
              organization with user-friendly tools designed to simplify complex
              processes.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col    m-4 w-72 h-96 px-6  lg:w-2/5">
          <div className="w-full h-full relative flex xl:pb-56 ">
            <Image alt="" src="/charity.png" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-green-200  px-2  py-5">
            <h2 className="text-xl md:text-2xl md:font-medium">
              Charity (ORG)
            </h2>
            <p className="text-sm   xl:text-lg">
              Discover EmpowerHope, our nonprofit organization's online
              platform. Join us in making a positive impact by supporting our
              mission, exploring initiatives, and contributing to our
              community-driven projects. Together, we can create change that
              matters.
            </p>
          </div>
        </div>
        {/* 5 */}
      </div>

      <Link href={"dashboard"} className="xl:mt-16">
        - - See More ! - -
      </Link>
    </div>
  );
};

export default ProjectsCard;
