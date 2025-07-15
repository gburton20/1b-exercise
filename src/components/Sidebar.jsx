import React from "react";

// Created a variable which is assigned, or 'points', to the value of an anonymous arrow function which when executed, returns an unordered list, essentially a nav bar
const Sidebar = () => {
    return (
        <>            
            <aside className="col-md-2">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Forum</li>
                    <li>Contact</li>
                </ul>
            </aside>
        </>
    )
}



export default Sidebar;