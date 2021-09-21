import React from 'react';
import * as Icon from 'react-feather';

const TotalProductRequest = () => {
    return (
        <div className="stats-card light-blue-card mb-4">
            <h3>
                0
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Total OSS Requests</p>
            <i 
                className="lni-shopping-basket" 
            />
        </div>
    );
};

export default TotalProductRequest;