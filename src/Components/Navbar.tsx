"use client";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import React, { useState } from "react";
import Link from "next/link";

const datas = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/",
    title: "Contact",
  },
  {
    id: 3,
    url: "/",
    title: "Add",
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div
      className={`fixed w-full top-0 z-50 bg-white   border-b-2 border-gray-100 p-4 ${
        isMenuOpen ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between mx-auto ">
        {/* logo */}
        <div>
          <h1 className="text-4xl font-extrabold">
            Miino<button className="w-2 h-2 bg-red-600 rounded-full "></button>
          </h1>
        </div>
        {/* links */}

        <div className="relative md:hidden lg:hidden ">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
          <div
            className={`flex-col  right-0 absolute z-50 bg-slate-400 top-full mt-1 p-2 rounded-lg  ${
              isMenuOpen ? "flex" : "hidden"
            } `}
          >
            {datas.map((data) => (
              <Link key={data.id} href={data.url}>
                <p>{data.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//   return (
//     <div1
//       className={`fixed w-full top-0 z-50 bg-green-300 border-b-2 border-gray-100 p-4 ${
//         isMenuOpen ? "shadow-md" : ""
//       }`}
//     >
//       <div2 className="flex items-center justify-between mx-auto">
//         <div>3
//           <h1 className="text-4xl font-extrabold">
//             Miino<button className="w-2 h-2 bg-red-600 rounded-full "></button>
//           </h1>
//         </div>3
//         <div4 className="relative md:hidden lg:hidden">
//           <button onClick={toggleMenu}>
//             {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
//           </button>
//           <div5
//             className={`flex-col right-0 absolute z-50 bg-slate-400 top-full mt-1 p-2 rounded-lg ${
//               isMenuOpen ? "flex" : "hidden"
//             }`}
//           >
//             {datas.map((data) => (
//               <Link key={data.id} href={data.url}>
//                 <p className="text-blue-600 cursor-pointer" onClick={closeMenu}>
//                   {data.title}
//                 </p>
//               </Link>
//             ))}
//           </div>4
//         </div>5
//       </div>2
//     </div>1
//   );
// };

// export default Navbar;
