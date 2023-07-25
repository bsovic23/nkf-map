import React, { useState } from 'react';
import USAMap from 'react-usa-map';

// Component Imports


// Data and Function Imports
import { mockData } from '../data';
import { stateStats } from '../functions';

function Map() {

    const [stateResults, setStateResults] = useState("");

    const mapHandler = (event) => {
        console.log(mockData);
        console.log(event.target.dataset.name);
        let stateName = event.target.dataset.name;
        let stateName2 = stateName.toString();
        let result = stateStats(stateName2, mockData);
        console.log(result);
        setStateResults(result);
        console.log(stateResults);
    };

    return(
        <section class='map'>
            <header>
                NAV
            </header>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        < USAMap onClick={mapHandler}/>
                    </div>
                    <div class="col">
                        {stateResults ? (
                            <div>
                                <h1>{stateResults.state}</h1>
                                <p>eGFR: {stateResults.egFr}</p>
                                <p>USA eGFR AVG:</p>
                                <p>eGFR Rank: </p>
                                <p>UACR: {stateResults.uacr}</p>
                                <p>USA UACR AVG:</p>
                                <p>UACR Rank: </p>
                            </div>
                        ) : (
                            <div>
                                Please select a state to see stats!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Map;