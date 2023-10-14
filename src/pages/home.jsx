import React, {useState} from 'react';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';
import Topbar from './topbar.jsx';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa6'

function Home({page, children, user }) {
    const [toggle, setToggle] = useState(false);

    const toggleSidebar = () => {
        setToggle(!toggle);
    };

        return (
          <div>
            <div className="flex h-screen bg-gray-100">
              <div className={`${toggle ? 'w-16' : 'w-1/6'} flex justify-between ease-in-out duration-500`}>
                <div className="w-max bg-gray-800 text-white overflow-auto">
                    <Sidebar userRole={user.role} page={children} status={toggle} />
                </div>
                <div className="w-0 bg-gray-200 relative flex justify-center border-gray-100 broder-2">
                    <div className="mt-12 w-8 h-8 flex items-center bg-gray-200 text-gray-950 text-center rounded-full cursor-pointer relative border-gray-100 border-2 ease-in-out duration-100"
                            onClick={toggleSidebar}>
                            <div className="text-xl items-center flex">
                            {toggle ? <FaAngleRight /> : <FaAngleLeft /> }</div>
                    </div>
                </div>
              </div>
              <div className='w-full'>
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
