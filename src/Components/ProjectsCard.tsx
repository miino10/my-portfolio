import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsCard = () => {
  return (
    <div className=" flex flex-col items-center ">
      <button className="bg-blue-500 text-white py-2 px-8 text-2xl rounded-bl-2xl">
        My Projects
      </button>
      <div className="md:flex md:flex-wrap md:items-center md:pl-10 md:w-full xl:full lg:pl-48">
        <div className="flex flex-col    m-4 w-72 h-96  px-6  lg:w-2/5">
          <div className="w-full h-full relative">
            <Image alt="" src="/dashboard.png" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-yellow-300 py-1 px-4 ">
            <h2 className="text-3xl">Dashboard</h2>
            <p className="text-sm  xl:text-lg">
              Experience the power of data visualization with our Dynamic Data
              Dashboard. Monitor key metrics, track trends, and gain insights at
              a glance. A user-friendly interface puts the information you need
              right at your fingertips.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col    m-4 w-72 h-96 px-6 lg:w-2/5">
          <div className="w-full h-full relative object-cover ">
            <Image alt="" src="/dashboard.png" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-yellow-300 py-3 px-4 ">
            <h2 className="text-3xl">Social Media</h2>
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
          <div className="w-full h-full relative flex ">
            <Image alt="" src="/dashboard.png" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-yellow-300 py-3 px-4 ">
            <h2 className="text-3xl">Managment system</h2>
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
          <div className="w-full h-full relative flex ">
            <Image alt="" src="/dashboard.png" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-yellow-300 py-3 px-4 ">
            <h2 className="text-3xl">Non-Profit organization</h2>
            <p className="text-sm  xl:text-lg">
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

      <Link href={"dashboard"} className="">
        - - See More ! - -
      </Link>
    </div>
  );
};

export default ProjectsCard;

// ... (previous code)

// {/* 1 */}
// <div className="mx-8  ">
//   <div className=" bg-green-400 w-fit flex flex-col items-center ">
//     <div className=" w-full h-48 relative  ">
//       <Image alt="" src="/dashboard.png" fill />
//     </div>
//     <div className="flex flex-col items-start gap-3 px-4 py-2 text-sm lg:py-6 bg-yellow-300">
//       <div>
//         <Link href={"Projects"} className="text-2xl ">
//           Dashboard
//         </Link>
//       </div>
//       {/* 2 */}
//       <div className="description-container h-20 overflow-auto">
//         <p>
//           Experience streamlined data insights with our Interactive Data
//           Dashboard. Effortlessly navigate through real-time visualizations
//           for informed decision-making. Customize widgets, explore trends,
//           and enjoy an intuitive user experience.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

// {/* ... (other project cards) */}

{
  /* <div className="mx-8   ">
  <div className=" bg-green-400     flex flex-col items-center  ">
    <div className=" w-fit h-48 relative  ">
      <Image alt="" src="/dashboard.png" fill />
    </div>
    <div className="flex flex-col items-start  bg-yellow-300 ">
      <div>
        <Link href={"Projects"}>Dashboard</Link>
      </div>
      <div className="  ">
        <p className="text-xl">
          Experience streamlined data insights with our Interactive Data
          Dashboard. Effortlessly navigate through real-time visualizations for
          informed decision-making. Customize widgets, explore trends, and enjoy
          an intuitive user experience.
        </p>
      </div>
    </div>
  </div>
</div>; */
}
