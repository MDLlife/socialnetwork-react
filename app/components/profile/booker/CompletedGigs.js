import * as React from 'react';

const CompletedGigs = (props) => (
    <div className={"completed-gigs-container"}>
        <h2>{props.gigs}</h2>
        <h6>Completed gigs</h6>
    </div>
);

export default CompletedGigs;
