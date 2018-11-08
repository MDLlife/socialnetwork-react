import * as React from 'react';
import EditIcon from 'material-ui/svg-icons/content/create';
import SvgIcon from 'material-ui/SvgIcon';

class Carousel extends React.Component {

    state = {
        item: 0,
    };

    constructor(props){
        super(props);
    }

    nextItem = () => {
        if (this.state.item !== this.props.list.length-4) {
            this.setState({item: this.state.item + 1})
        }
    };

    prevItem = () => {
        if (this.state.item){
            this.setState({item: this.state.item-1})
        }
    };

    render() {
        return (
            <div className={"carousel-container"}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h4>{this.props.name}</h4>
                    <EditIcon
                        style={{
                            height: "1.4rem",
                            cursor: 'pointer',
                            color: "#808080",
                            position: "relative",
                            top: "1.6rem",
                            marginRight: ".7rem",
                        }}
                    />
                </div>
                <div style={{display: "flex"}}>
                    <div style={{
                        borderRadius: "50%",
                        backgroundColor: "rgba(128,128,128,0.1)",
                        width: "3rem",
                        height: "3rem",
                        margin: " 0 .9rem 0 1rem",
                        top: "2.6rem",
                        position: "relative"
                    }}
                         onClick={this.prevItem}
                    >
                        <SvgIcon viewBox="0 0 24 24"
                                 style={{
                                     width: "3rem",
                                     height: "3rem",
                                     position: "relative",
                                     right:".1rem"
                                 }}
                        >
                            <path fill={(!this.state.item)?"rgba(128,128,128,0.4)":"#808080"} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                    <div style={{display: "flex", flexWrap: "nowrap", justifyContent: "space-between", width: "100%"}}>
                        {this.props.list.map((item, index) => {
                                if((index >= this.state.item) && (index < this.state.item + 4)){
                                    return(<this.props.item key={"carousel " + item + " " + index} info={item}/>)
                        }})}
                    </div>
                    <div style={{
                        borderRadius: "50%",
                        backgroundColor: "rgba(128,128,128,0.1)",
                        width: "3rem",
                        height: "3rem",
                        margin: " 0 1rem 0 .9rem",
                        top: "2.6rem",
                        position: "relative"
                    }}
                        onClick={this.nextItem}>
                        <SvgIcon width="3rem" height="3rem" viewBox="0 0 24 24"
                                 style={{
                                     width: "3rem",
                                     height: "3rem",
                                     position: "relative",
                                     left:".1rem"
                                 }}
                        >
                            <path fill={(this.state.item === this.props.list.length-4)?"rgba(128,128,128,0.4)":"#808080"} d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;