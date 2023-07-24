import React from 'react';

const HomeNavbar = ({navElements}) => {
    return(
        <section class='home-navbar'>
            <ul class="nav flex-column">
                {navElements.map((nav) => (
                    <li key={nav.id} class="nav-item">
                        {nav.text}
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default HomeNavbar;