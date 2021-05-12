import React from "react";
import {Link, useLocation} from "react-router-dom";


const baseCss = "text-white font-semibold border-b-0 border-white";
const activeCss = "text-white font-semibold border-b-2 border-white";


function Nav() {
    let loc = useLocation();
    let path = loc.pathname;

    return (
        <div className="absolute flex justify-between items-center text-white border-b-2 border-white w-full h-16 pb-2 px-4">
            <div className="flex items-center">
                <Link to="/home" className="flex items-center ml-32">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div className="pl-2">
                        <h1 className="text-white font-bold transform translate-y-2">CUM</h1>
                        <p className="text-gray-200 text-sm transform -translate-x-2 scale-75">Creative UI Makers</p>

                    </div>
                </Link>

            </div>
            <div className="flex space-x-8 mr-32">
                <Link to="/home" className={path === "/home" ? activeCss : baseCss}>
                    <h1>Home</h1>
                </Link>
                <Link to="/prices" className={path === "/prices" ? activeCss : baseCss}>
                    <h1>Prices</h1>
                </Link>
                <Link to="/contact" className={path === "/contact" ? activeCss : baseCss}>
                    <h1>Contact Us</h1>
                </Link>
                <Link to="/team" className={path === "/team" ? activeCss : baseCss}>
                    <h1>Our Team</h1>
                </Link>
            </div>
        </div>
    )
}

export default Nav;