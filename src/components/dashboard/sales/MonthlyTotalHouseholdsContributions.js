import React from 'react';
import * as Icon from 'react-feather';

const MonthlyTotalHouseholdsContributions = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
                MK 0.00
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Household Contributions</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default MonthlyTotalHouseholdsContributions;