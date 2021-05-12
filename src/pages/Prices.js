import React from 'react';
import {Link} from 'react-router-dom';


function Card(props) {
    let url;
    if (props.title === "Lite") {
        url = "https://img.icons8.com/nolan/344/unchecked-circle.png"
    } else if (props.title === "Standard") {
        url = "https://img.icons8.com/nolan/344/plus.png"
    } else if (props.title === "Pro") {
        url = "https://img.icons8.com/nolan/344/sun.png"
    }

    let features = []
    for (let feat of props.features) {
        features.push(<><span>• {feat}</span><br/></>)
    }

    return (
        <div className="flex flex-col jutify-between items-center justify-center bg-white shadow-md rounded-md p-4" style={{width: 20 + 'rem'}}>
            <div className="flex flex-col items-center">
                <div className="p-4 bg-gray-900 rounded-full h-32 w-32 p-4">
                    <img className="w-full h-full" src={url} alt=""/>
                </div>
                <h1 className="text-black font-bold text-2xl mt-4">{props.title}</h1>
                <h3>package</h3>
                <p className="px-2 text-lg py-4">
                    {features}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div className="pb-4">
                    <h1 className="text-6xl font-bold">£{props.price}</h1>
                    <h3 className="float-right font-semibold text-sm transform scale-75 -translate-y-2">+ VAT</h3>
                </div>
                <Link to={`/contact?type=buy&selected=${props.title}`} className="text-white hover:text-gray-400 bg-gray-900 transition duration-200 rounded-md shadow-md px-4 pt-1 pb-2">
                    <span className="border-b-2 border-purple-700">Select Package</span>
                </Link>
            </div>
        </div>
    )
}


function Prices() {
    return (
        <div className="flex flex-col items-center bg-purple-700 w-full min-h-screen pt-20">
            <div className="mt-8 mr-12">
                <h1 className="text-white font-bold text-2xl">Our Prices</h1>
                <p className="text-gray-300 text-lg w-3/5">
                    We offer 3 select package perfect for every business in need of
                    small jobs all the way up to big design jobs and websites.
                </p>
            </div>
            <div className="flex justify-evenly w-2/3 mt-16 px-4">
                <Card
                    title="Lite"
                    features={["10 Basic icons", "Expert consultancy", "3 full vector graphics", "Super fast turnaround"]}
                    price={299}
                />
                <Card
                    title="Standard"
                    features={["50 High detail icons", "Full design team", "10 full vector graphics", "All Lite package features"]}
                    price={799}
                />
                <Card
                    title="Pro"
                    features={["100 UHD icons", "Full webpage made", "Permanent rights to content", "All Standard package features"]}
                    price={1499}
                />
            </div>
        </div>
    )
}

export default Prices;