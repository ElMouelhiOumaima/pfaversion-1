import React, { useState,useContext} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link ,useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

import { IconContext } from "react-icons";



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  // const{state,dispatch}=useContext(Usercontext)
  // const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        {/* <li> 
             <button className="btn waves-effect waves-light #e91e63 pink"  onClick={()=>{localStorage.clear() 
             dispatch({type :"Clear"})
            history.push('/')
                        }}>
                            Logout
                        </button>
              </li>  */}

      <IconContext.Provider value={{ color: "#eff1ce" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );

          }
export default Navbar;
