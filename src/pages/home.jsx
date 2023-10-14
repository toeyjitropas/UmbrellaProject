import React from 'react';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';
import Topbar from './topbar.jsx';

function Home({page, children, user }) {

        return (
          <div>
            <div className="flex h-screen bg-gray-100">
              <div className="w-1/6 bg-gray-800 text-white overflow-auto">
                <Sidebar userRole={user.role} page={children} />
              </div>
              <div className="w-5/6">
                <div className="bg-white">
                    <div className="h-16">
                        <Topbar children={user} />
                    </div>
                    <div className="h-full overflow-auto">
                        <Content children={page} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
    
    
}

export default Home;
