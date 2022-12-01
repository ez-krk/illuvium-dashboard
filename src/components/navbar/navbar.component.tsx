import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../assets/img/xborg_logo.svg';

const Navbar: FC = () => (
  <div className="navbar md:pb-2 shadow-lg bg-black text-neutral-content z-50 border-b-2 border-white absolute top-0">
    {/* title */}
    <div className="navbar-start flex-1">
      <div>
        <Link
          className="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] rgbg"
          href="/"
        >
          <div>
            <Image src={logo} width={48} height={48} alt="xborg logo" />
          </div>
          
        </Link>
      </div>
    </div>
    {/* nav Links */}

    <div className="navbar-center flex-grow">
      <div className="hidden md:inline md:navbar-center fos">
        <div className="flex items-stretch">
          {/* <Link href="/">
            <button className="btn btn-sm btn-ghost rounded-btn text-glitch">
              HOME
            </button>
          </Link>
          <Link href="/leaderboard">
            <button className="btn btn-sm btn-ghost rounded-btn text-glitch">
              Leaderboard
            </button>
          </Link> */}
          {/* <Link href="/graph">
            <button className="btn btn-sm btn-ghost rounded-btn text-glitch">
              Graph
            </button>
          </Link> */}
        </div>
      </div>
    </div>

    {/* stack icon */}
    <div className="md:hidden flex-none">
      <button className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Navbar;
