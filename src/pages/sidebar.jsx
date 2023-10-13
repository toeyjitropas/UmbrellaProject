import mainMenu from './SidebarMenu';
// import react icon
import { FaTachometerAlt,FaTasks,FaPlusSquare,FaBookMedical,FaSquareRootAlt,FaRev,FaRedoAlt,FaArrowsSpin,FaN,FaCarOn,FaBtc,FaDatabase } from 'react-icons/fa';

function Sidebar({ userRole }) {
  return (
    <div className="w-72 h-screen bg-white shadow-md">
      <h1 className="text-xl font-semibold p-6">SIT Middle Office</h1>
      <ul>
        {mainMenu
          .filter(item => item.role.includes(userRole)) // Filter menu items based on user role
          .map((item) => (
            <li key={item.topic} className="border-t border-gray-200">
              {item.topicName && <h2 className="p-6 text-lg font-semibold">{item.topicName}</h2>}
              <ul>
                {item.menu
                    .filter(item => item.role.includes(userRole))
                    .map((menuItem) => (
                        <li key={menuItem.name} className="p-4 hover:bg-gray-100">
                    {menuItem.icon && <menuItem.icon className="inline-block mr-4" />}
                    {menuItem.name}
                  </li>
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
