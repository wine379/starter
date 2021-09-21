import React from 'react';
import * as Icon from 'react-feather';

const VerifiedRequests = () => {
    return (
        <div className="stats-card success-card mb-4">
            <h3>
                0
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Verified OSS Requests</p>
            <i 
                className="lni-check-mark-circle" 
            />
        </div>
    );
};

export default VerifiedRequests;