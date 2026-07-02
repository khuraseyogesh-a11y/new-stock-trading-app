import axios from "axios";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const[selectedMenu, setSelectedMenu]=useState(0);
  const navigate = useNavigate();

function handleMenuClick(index){
  setSelectedMenu(index);
}

async function handleLogoutClick(index){
  await axios.post("http://localhost:8080/logout",{},{
    withCredentials:true
  }).then((res)=>{
    if(res.data.success){
    navigate("/signup");
    }
  }).catch((err)=>{
    alert("Somthing went Wrong!");
    console.log(err);
  });
}

const menuClass="menu";
const activeMenuClass="menuSelected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }}  alt="img"/>
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to='/dashboard' onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to='/dashboard/orders' onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to='/dashboard/holdings' onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
           <Link style={{textDecoration:"none"}} to='/dashboard/positions' onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/dashboard/funds' onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to='/dashboard/apps' onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleLogoutClick}>
          <button type="button" class="btn btn-outline-success">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;