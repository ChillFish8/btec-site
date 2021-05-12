import React from 'react';


function Person(props) {
    let title = props.title;
    let position = props.position;
    let icon = props.icon;

    return (
        <div className="flex flex-col items-center bg-white rounded-md shadow-lg w-64 h-64 mx-2 my-4">
            <img className="w-32 h-32 object-cover rounded-full m-4" src={icon} alt={title}/>
            <h1 className="text-gray-900 text-xl font-bold">{title}</h1>
            <div className="bg-purple-700 rounded-full w-1/3 pb-1 mb-1 mt-1"/>
            <h3 className="text-gray-700 font-semibold">{position}</h3>
        </div>
    )
}


function Team() {
    return (
        <div className="flex flex-col items-center bg-purple-700 w-full min-h-screen pt-20">
            <div className="ml-16 mt-8">
                <h1 className="text-white font-bold text-2xl">Meet Our Team</h1>
                <p className="text-gray-300 text-lg w-3/5">
                    Our team although small are passionate, hard working and amazingly creative.
                    With years of experience under our belt we all aim to please.
                </p>
            </div>
            <div className="flex flex-wrap justify-center w-2/3 mt-16">
                <Person
                    title="Derik Frankfurt"
                    position="Project Manager"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.--H-ta9rkL0SrvkDIewV0QHaFD%26pid%3DApi&f=1"
                />
                <Person
                    title="Niel Desire"
                    position="Project Manager Assistant"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fforty-something-man-picture-id502734204%3Fk%3D6%26m%3D502734204%26s%3D612x612%26w%3D0%26h%3D7vBKfSGEyW0P2vgbYlYYuzSO_7Pj-BKt8-WCeN33GZ8%3D&f=1&nofb=1"
                />
                <Person
                    title="Sarah Radcliff"
                    position="Lead Designer"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.homuOP1z53mtKn51QsFsNwHaLH%26pid%3DApi&f=1"
                />
                <Person
                    title="Emily Yates"
                    position="Vector Graphics Designer"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vqy6Lnq-b1uiWXA5HzecagAAAA%26pid%3DApi&f=1"
                />
                <Person
                    title="Jesus Serento"
                    position="Media Designer"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Uuy5I5rZ3IAfTKWObvWeBgAAAA%26pid%3DApi&f=1"
                />
                <Person
                    title="Bob Dairy"
                    position="Media Assistant"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vjn6ESiptv2q-1A9dGUuxQHaE7%26pid%3DApi&f=1"
                />
                <Person
                    title="Debra Tahiti"
                    position="Content Designer"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qBsphyFxZidLmO68GODHAQAAAA%26pid%3DApi&f=1"
                />
                <Person
                    title="Niome Valider"
                    position="Content Designer"
                    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qEKUpp-xiKRgsCWAvY3CQwHaE8%26pid%3DApi&f=1"
                />
            </div>
        </div>
    )
}

export default Team;