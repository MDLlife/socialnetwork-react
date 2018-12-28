import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

class Icon extends React.Component {

    render() {
        return (
            <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px"
                     viewBox="0 0 65.5 82.8" style={{
                enableBackground: "new 0 0 65.5 82.8",
                width: "1.3rem",
                height: "1.6rem",
                position: "relative",
                top: "0.2rem",
                marginRight: "2.3rem"
            }}>
                <path fill={"rgba(129,129,129, 0.8)"}
                      d="M34.2,54.5L65.1,20c0.4-0.4,0.5-1.1,0.3-1.6c-0.2-0.5-0.8-0.9-1.4-0.9H48.3L60.1,2.4c0.5-0.6,0.4-1.6-0.2-2.1  c-0.7-0.5-1.6-0.4-2.1,0.2L44.4,17.5H1.5c-0.6,0-1.1,0.3-1.4,0.9C-0.1,18.9,0,19.6,0.4,20l30.8,34.3v25.5c0,0,0,0,0,0H20.9  c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h23.6c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5H34.2c0,0,0,0,0,0V54.5z M43.5,39.6L32.8,51.6  L22.1,39.6H43.5z M60.6,20.5L46.2,36.6h-13l12.7-16.2H60.6z M42.1,20.5L29.3,36.6h-9.9L4.9,20.5H42.1z"/>
            </SvgIcon>
        );
    }
}

export default Icon;