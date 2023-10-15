import mainMenu from '../static/SidebarMenu';
import { Link } from "react-router-dom"
// import react icon
import { FaTachometerAlt,FaTasks,FaPlusSquare,FaBookMedical,FaSquareRootAlt,FaRev,FaRedoAlt,FaNetworkWired,FaCarAlt,FaBtc,FaDatabase } from 'react-icons/fa';
import { FaArrowsSpin,FaCarOn } from 'react-icons/fa6';

function Sidebar({ userRole, page, status }) {
  return (
    <div className="overflow-auto bg-white shadow-md">
        <div className='h-16'>
            <h1 className="text-xl font-semibold p-4 text-gray-950 align-middle">
            <FaCarOn className="inline-block mr-4 align-middle" />
            <span className={`${status ? ' hidden' : ''}`}> SIT Middle Office
              </span></h1>
        </div>
      <ul>
        {mainMenu
          .filter(item => item.role.includes(userRole)) // Filter menu items based on user role
          .map((item) => (
            <li key={item.topic} className="border-t border-gray-200">
              {item.topicName && <h2 className={`${status ? 'm-4':'p-6'} text-lg font-semibold text-gray-900 `}>{status ? item.topicInit : item.topicName}</h2>}
              <ul>
                {item.menu
                    .filter(item => item.role.includes(userRole))
                    .map((menuItem) => (
                      <Link to={menuItem.link}>
                        <li key={menuItem.name} className={`p-2 my-2 ${status ? 'mx-2' : 'ml-2 mr-4'} flex items-center rounded-xl  ${
                          menuItem.name === page
                            ? 'bg-indigo-800 text-gray-50'
                            : 'hover:bg-indigo-50 text-gray-800'
                        }`}> 
                          {menuItem.icon && <menuItem.icon className={`${status ? 'm-auto' : "flex mr-4"}`} />}
                          <div className={`${status ? 'hidden' : ''}`}>{menuItem.name}</div> 
                        </li>
                        </Link>
                    ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Sidebar;
