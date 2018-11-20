import * as React from 'react';

class Navigation extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.classes}>
                <span className={"disabled"}
                      onClick={this.props.prevHandler}>Previous</span>
                <span className={"active"}>1</span>
                <span>2</span>
                <span>...</span>
                <span onClick={this.props.nextHandler}>Next</span>
            </div>
        )
    }
}

export default Navigation;