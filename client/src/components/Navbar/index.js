import React from 'react';

const Navbar = ({navElements}) => {
    return(
        <section class='navbar'>
            <nav class="nav">
                {navElements.map((nav) => (
                    <button class='nav-link' key={nav.id}>
                        {nav.text}
                    </button>
                ))}
            </nav>
        </section>
    )
};

export default Navbar;