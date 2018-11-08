import * as React from 'react';
import Avatar from 'material-ui/Avatar';

const CarouselImgItem = (props) => (
    <div className={"carousel-img-item"}>
        <Avatar
            size={79}
            src={props.info.image}
        />
        <h5>
            {props.info.name}
        </h5>
    </div>
);

export default CarouselImgItem