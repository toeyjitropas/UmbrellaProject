import React from 'react';
import Sidebar from './sidebar.jsx';

function Home() {
    const userRole = "admin"; // Example: fetch it from user context/state

    return (
        
        <div>
            {/* place side bar on left */}
            <div className="flex h-100 justify-start overflow-auto">
                <Sidebar userRole={userRole} />
            </div>
            {/* <h1> Why you take so long </h1> */}
        </div>
    );
    
}

export default Home;
