import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

class Icon extends React.Component {

    render() {
        return (
            <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px"
                     viewBox="0 0 72.8 86.7" style={{
                enableBackground: "new 0 0 72.8 86.7",
                width: "1.4rem",
                height: "1.7rem",
                position: "relative",
                top: "0.2rem",
                marginRight: "2.2rem"
            }}>
                <g>
                    <g>
                        <path fill={"rgba(129,129,129, 0.8)"}
                              d="M36.4,47.4C16.3,47.4,0,64.4,0,85.2c0,0.8,0.7,1.5,1.5,1.5h69.8c0.8,0,1.5-0.7,1.5-1.5C72.8,64.4,56.4,47.4,36.4,47.4z     M3,83.7c0.8-18.5,15.4-33.2,33.3-33.2S69,65.2,69.7,83.7H3z"/>
                        <path fill={"rgba(129,129,129, 0.8)"}
                              d="M35.7,43.4c11.6,0,21-9.7,21-21.7S47.3,0,35.7,0s-21,9.7-21,21.7S24.2,43.4,35.7,43.4z M35.7,3c9.9,0,18,8.4,18,18.7    s-8.1,18.7-18,18.7c-9.9,0-18-8.4-18-18.7S25.8,3,35.7,3z"/>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}

export default Icon;