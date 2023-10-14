import mainMenu from '../static/SidebarMenu';
// import react icon
import { FaTachometerAlt,FaTasks,FaPlusSquare,FaBookMedical,FaSquareRootAlt,FaRev,FaRedoAlt,FaNetworkWired,FaCarAlt,FaBtc,FaDatabase } from 'react-icons/fa';
import { FaArrowsSpin,FaCarOn } from 'react-icons/fa6';

function Sidebar({ userRole, page }) {
  return (
    <div className="overflow-auto bg-white shadow-md">
        <div className='h-16'>
            <h1 className="text-xl font-semibold p-4 text-gray-950 align-middle">
              
            <FaCarOn className="inline-block mr-4 align-middle" />
            <span> SIT Middle Office
              </span></h1>
        </div>
      <ul>
        {mainMenu
          .filter(item => item.role.includes(userRole)) // Filter menu items based on user role
          .map((item) => (
            <li key={item.topic} className="border-t border-gray-200">
              {item.topicName && <h2 className="p-6 text-lg font-semibold text-gray-900">{item.topicName}</h2>}
              <ul>
                {item.menu
                    .filter(item => item.role.includes(userRole))
                    .map((menuItem) => (
                      <a href={menuItem.link}>
                        <li key={menuItem.name} className={`p-2 my-2 ml-2 mr-4 align-middle rounded-xl  ${
                          menuItem.name === page
                            ? 'bg-indigo-800 text-gray-50'
                            : 'hover:bg-indigo-50 text-gray-800'
                        }`}> 
                          {menuItem.icon && <menuItem.icon className="inline-block mr-4" />}
                          {menuItem.name}
                        </li>
                      </a>
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
