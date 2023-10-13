import React from 'react';
import { Sidebar} from './sidebar,jsx';

function Home() {
    const userRole = "admin"; // Example: fetch it from user context/state

    return (
        <div>
            <Sidebar userRole={userRole} />
        </div>
    );
    
}

export default Home;
