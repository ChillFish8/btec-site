import React from "react";
import {Link} from "react-router-dom";


function Home() {
    return (
        <>
            <div className="bg-purple-700 w-full pt-20">
                <div className="flex justify-around w-full pt-16">
                    <div>
                        <h1 className="text-white text-6xl font-bold">
                            Mind Blowing UI
                        </h1>
                        <h3 className="text-gray-300 text-2xl font-semibold">
                            Let our experts at <span className="text-white">CUM</span> take
                            <br/>you and your team to new heights
                        </h3>
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-white text-3xl font-semibold">
                            "The developers and designers at CUM gave me and my team
                            something no other companies could."
                        </h1>
                        <h2 className="text-gray-200 font-semibold ml-1">- Trixie Babose</h2>
                    </div>
                </div>
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#ffffff" fillRule="nonzero">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"/>
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"/>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"/>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#ffffff" fillRule="nonzero">
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="flex flex-col items-center bg-white w-full py-8">
                <div className="flex flex-col items-center w-full py-8">
                    <h1 className="text-gray-900 text-3xl font-bold">
                        Explore what makes us the industry choice
                    </h1>
                    <div className="flex justify-center w-full mt-4">
                        <div className="w-2/3 rounded-full bg-purple-700 pb-1"/>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center w-3/4 my-4">
                    <div className="w-1/3">
                        <h1 className="text-4xl font-bold pb-2">
                            Unique
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Our developers and designers proud themselves
                            on their ability to create unique, topical and stand out
                            designs for your business.
                        </p>
                    </div>
                    <img className="h-64 ml-32 object-contain" src="/icons/stand_out.svg" alt=""/>
                </div>
                <div className="flex flex-row-reverse justify-center items-center w-3/4 my-4">
                    <div className="w-1/3">
                        <h1 className="text-4xl font-bold pb-2">
                            Fast
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Here are CUM we never miss a deadline, you can relax
                            knowing doing the hard work for you.
                        </p>
                    </div>
                    <img className="h-64 mr-32 object-contain" src="/icons/speed.svg" alt=""/>
                </div>
                <div className="flex flex-row justify-center items-center w-3/4 my-4">
                    <div className="w-1/3">
                        <h1 className="text-4xl font-bold pb-2">
                            Cost Effective
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Even though our designs may break the game, our
                            prices wont break the bank.
                        </p>
                    </div>
                    <img className="h-64 ml-32 object-contain" src="/icons/wallet.svg" alt=""/>
                </div>
            </div>
            <div className="bg-purple-700">
                <svg className="transform rotate-180" viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#ffffff" fillRule="nonzero">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"/>
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"/>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"/>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#ffffff" fillRule="nonzero">
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"/>
                        </g>
                    </g>
                </svg>

                <div className="flex flex-col items-center pt-8 pb-32">
                    <h1 className="text-center font-bold text-white text-4xl">
                        Is your design team<br/>
                        leaving you high and dry?<br/>
                    </h1>
                    <div className="flex justify-center w-full pt-2">
                        <div className="rounded-full w-1/2 bg-white bg-opacity-50 pb-1"/>
                    </div>
                    <Link to="/prices" className="flex items-center text-center font-bold text-white text-3xl mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        <span className="border-b-4 border-white">Use CUM</span>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Home;