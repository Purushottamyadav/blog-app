import React from 'react'

import { useNavigate } from 'react-router-dom'

const Header = () => {
    const Navigate = useNavigate();
    const Handlelogout = ()=>{
		alert('Do you want to log out?')
		localStorage.removeItem('token')
		Navigate('/');
	}
  return (
    <div onClick={Handlelogout} className="sidebar-list-item sidebar-list-item-end">
				<span className="header-logout">
				  LogOut
				</span>
			</div>
  )
}

export default  Header