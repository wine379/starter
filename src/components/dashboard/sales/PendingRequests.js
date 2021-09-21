import React from 'react';
import * as Icon from 'react-feather';

const PendingRequests = () => {
    return (
        <div className="stats-card danger-card mb-4">
            <h3>
                0
                <Icon.ArrowDownCircle 
                    className="icon"
                />
            </h3>
            <p>Pending OSS Requests</p>
            <i 
                className="lni-reload" 
            />
        </div>
    );
};

export default PendingRequests;