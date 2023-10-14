
import { FaTachometerAlt,FaTasks,FaPlusSquare,FaBookMedical,FaSquareRootAlt,FaRev,FaRedoAlt,FaNetworkWired,FaCarAlt,FaBtc,FaDatabase } from 'react-icons/fa';
import { FaArrowsSpin,FaCarOn } from 'react-icons/fa6';

const mainMenu = [
    {
        "topic": "main",
        "topicName" : "",
        "topicInit": "",
        "menu" : [{
                    "name": "Dashboard",
                    "link": "/UmbrellaProject/dashboard",
                    "icon": FaTachometerAlt,
                    "role": ["admin","actSenior","actJunior","pdSenior","pdJunior","uwSenior","uwJunior","mktSenior","mktJunior"]
                },
                {
                    "name": "Task",
                    "link": "/UmbrellaProject/task",
                    "icon": FaTasks,
                    "role": ["admin","actSenior","actJunior","pdSenior","pdJunior","uwSenior","uwJunior","mktSenior","mktJunior"]
                }],
        "role": ["admin","actSenior","actJunior","pdSenior","pdJunior","uwSenior","uwJunior","mktSenior","mktJunior"]
            },
    {
        "topic" : "pd",
        "topicName": "Product Development",
        "topicInit": "PD",
        "menu": [
            {
                "name": "New Product - PGC",
                "link": "",
                "icon": FaPlusSquare,
                "role": ["admin","pdSenior","pdJunior"]
            },
            {
                "name": "New Rating",
                "link": "",
                "icon": FaBookMedical,
                "role": ["admin","pdSenior","pdJunior"]
            },
            {
                "name": "Renew Rating Manuals",
                "link": "",
                "icon": FaRedoAlt,
                "role": ["admin","pdSenior","pdJunior"]
            },
            {
                "name": "Revamp - Revise Wording",
                "link": "",
                "icon": FaRev,
                "role": ["admin","pdSenior","pdJunior"]
            }
        ],
        "role": ["admin","actSenior","actJunior","pdSenior","pdJunior"]
    },
    {
        "topic" : "uw",
        "topicName": "Underwriter",
        "topicInit": "UW",
        "menu": [
            {
                "name": "Profit Crafter",
                "link": "",
                "icon": FaSquareRootAlt,
                "role": ["admin","uwSenior","uwJunior"]
            },
            {
                "name": "Renewal Guideline",
                "link": "",
                "icon": FaArrowsSpin,
                "role": ["admin","uwSenior","uwJunior"]
            },
            {
                "name": "New Biz Guideline",
                "link": "",
                "icon": FaNetworkWired,
                "role": ["admin","uwSenior","uwJunior"]
            }
        ],
        "role": ["admin","uwSenior","uwJunior"]
    },
    {
        "topic" : "mkt",
        "topicName": "Marketing",
        "topicInit": "MKT",
        "menu": [
            {
                "name": "Motor Referral",
                "link": "",
                "icon": FaCarAlt,
                "role": ["admin","mktSenior","mktJunior"]
            },
            {
                "name": "Incentive Setup",
                "link": "",
                "icon": FaBtc,
                "role": ["admin","mktSenior","mktJunior"]
            },
            {
                "name": "Renewal Data Query",
                "link": "",
                "icon": FaDatabase,
                "role": ["admin","mktSenior","mktJunior"]
            }
        ],
        "role": ["admin","mktSenior","mktJunior"]
    },
    {
        "topic" : "act",
        "topicName": "Actuarial Pricing",
        "topicInit": "ACT",
        "menu": [
            {
                "name": "Loss Cost Update",
                "link": "",
                "icon": FaDatabase,
                "role": ["admin","actSenior","actJunior"]
            },
            {
                "name": "Expense Component Update",
                "link": "",
                "icon": FaDatabase,
                "role": ["admin","actSenior","actJunior"]
            }
        ],
        "role": ["admin","actSenoir","actJunior"]
    },
    {
        "topic" : "admin",
        "topicName": "MDO Admin",
        "topicInit": "ADMIN",
        "menu": [
            {
                "name": "User Management",
                "link": "",
                "icon": FaDatabase,
                "role": ["admin"]
            }
        ],
        "role": ["admin"]
    }
]


// export all var
export default mainMenu;