import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import HomeNavbar from '../components/HomeNavbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {
    const navChoices = [
        {id: 1, text: "Home"},
        {id: 2, text: "About"},
        {id: 3, text: "Map"},
        {id: 4, text: "Stats"},
        {id: 5, text: "Comment"}
    ]
    return(
        <section class='homepage'>
            <header>
                < Header />
            </header>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <HomeNavbar navElements={navChoices} />
                    </div>
                    <div class="col">
                        <div class="row">
                            <h1>NKF MAP DASHBOARD</h1>
                        </div>
                        <div class="row">
                            VIDEO HOMEPAGE COL
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </section>
    )
};

export default Homepage;