import * as React from 'react';

class TalentPill extends React.Component{
    state={
        display: "none",
        required: false
    };

    constructor(props){
        super(props);

        this.onOver = this.onOver.bind(this);
        this.onOut = this.onOut.bind(this);
    }

    onOver = () =>{
        this.setState({display: "block"});
    };

    onOut = () =>{
        this.setState({display: "none"});
    };

    componentWillMount(){
        this.props.list.types.forEach((item)=>{
            if (item.required !== 0){
                this.setState({required: true})
            }
        })
    }

    render(){
        return(<div className={"talent-pill-container"} onClick={this.props.handler} onMouseOut={this.onOut} onMouseOver={this.onOver}>
            <div className={"talent-pill-hover"} style={{display: this.state.display}}>
                {this.props.list.types.map((item, index) => {
                    if (item.required !== 0){
                        return(<div key={"hover " + index}><span>{item.required}</span> Required <h6>Type {index+1}</h6></div>)
                    }
                })}
            </div>
            <span
                 className={((this.state.required)? "required-point " :"") + this.props.spanClass}>
                {this.props.item}
            </span>
        </div>)
    }
}

export default TalentPill;