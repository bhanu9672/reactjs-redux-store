import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const Navbar = () => {
	const items = useSelector( (state) => state.cart );
	console.table( items );
	return (
		<div 
		    style={{ 
				display: 'flex', 
				alignItems: "center", 
				justifyContent : 'space-between' 
		    }}
		>
			<Link className="navLink" to="/">
				<span className='logo'>React Redux Store</span>
			</Link>
			<div>
				<Link className="navLink" to="/">Home</Link>
				<Link className="navLink" to="/cart">Cart</Link>
				<span className='cartCount'>Cart Items : {items.length}</span>
				<Link className="navLink" to="/login">LogIn</Link>
			</div>
		</div>
	)
}

export default Navbar