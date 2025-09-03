import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const NavbarComponent = () => {
    const [active, setActive] = useState('Home');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search) {
            navigate(`/category/${search}`);
            setSearch('');
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <h2 onClick={() => { setActive("Home"); navigate("/") }}>
                    <span className="logo-gradient">PulsePress</span>
                </h2>
            </div>

            <div className='navbar__links'>
                {["Home", "General", "Technology", "Politics", "Health", "Art & Culture"].map((item, index) => (
                    <p
                        key={index}
                        className={active === item ? 'active' : ''}
                        onClick={() => { setActive(item); navigate(`/category/${item.toLowerCase().replace(/\s+/g, '')}`) }}
                    >
                        {item}
                    </p>
                ))}
            </div>

            <div className="navbar__search">
                <input
                    className='search-input'
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <IoSearch className='search-icon' onClick={handleSearch} />
            </div>
        </div>
    );
};

export default NavbarComponent;
