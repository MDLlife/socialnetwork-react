import * as React from 'react';

const CarouselItemBlock = (props) => (
    <div className={"carousel-item-block"}>
        <h3>{props.info.info}</h3>
    </div>
);

export default CarouselItemBlock;