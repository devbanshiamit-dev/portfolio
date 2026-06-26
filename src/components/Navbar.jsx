import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='text-black flex items-center justify-between py-5 px-7 capitalize'>
                <h1 className='text-xl font-bold leading-none '>amit's<br />portfolio</h1>
                <div className='flex items-center justify-between gap-7 list-none'>
                    <li>skills</li>
                    <li>service</li>
                    <li>projects</li>
                    <li>journey</li>
                    <li>contact</li>
                </div>
                <button className='border-2 py-0.5 px-3.5 rounded-3xl'>Resume</button>
            </nav>
        </div>
    );
}

export default Navbar;