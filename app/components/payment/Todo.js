import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import {getDateGig} from "../../util/dateParser";
import SvgIcon from 'material-ui/SvgIcon';

class Todo extends React.Component{

    state = {
      page: 0,
    };

    constructor(props){
        super(props)
    }

    nextPage = () => {
        if (this.state.page < this.props.todoList.length-1){
            this.setState({page: this.state.page+1})
        }
    };

    prevPage = () => {
        if (this.state.page){
            this.setState({page: this.state.page-1})
        }
    };

    render(){
        return(
            <div className={'todo-container'}>
                <div className={'todo-header'}>
                    <h5>To do({this.props.todoList.length})</h5>
                    <h6>View all</h6>
                </div>
                    <div
                        key={`model ${this.state.page + 1}`}
                        style={{
                            display: "flex",
                            borderBottom: ".1rem solid #e4e4e4",
                            flexDirection: "column"
                        }}
                    >
                            <div className={'todo-model'}>
                                <div style={{
                                    height: "3rem",
                                    margin: "2.4rem 1.6rem 1.6rem 1.3rem",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(128,128,128, 0.1)"
                                }}
                                >
                                    <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{margin: ".3rem", cursor: "pointer"}} onClick={this.prevPage}>
                                        <path fill={"rgba(128,128,128,0.4)"} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                                        <path fill="none" d="M0 0h24v24H0V0z"/>
                                    </SvgIcon>
                                </div>
                                <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    margin: "1.8rem 0 0 0"
                                }}>
                                    <div>
                                        <Avatar
                                            style={{
                                                display: "inline-block",
                                                border: ".1rem solid #eb3386",
                                                marginRight: "1rem",
                                            }}
                                            size={33}
                                        />
                                        <div
                                            style={{
                                                display: "inline-block"
                                            }}>
                                            <h5>Model Name</h5>
                                            <h6>Model {this.state.page+1}</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>{this.props.todoList[this.state.page].gig}</h5>
                                        <h6>{getDateGig(this.props.todoList[this.state.page].time)}  {this.props.todoList[this.state.page].location}</h6>
                                    </div>
                                    <div>
                                        <span>Amount</span>
                                        <h6>{this.props.todoList[this.state.page].amount}$ per hour</h6>
                                    </div>
                                    <div>
                                        <span>Total hours</span>
                                        <h6>{this.props.todoList[this.state.page].hours}h</h6>
                                    </div>
                                    <div>
                                        <span>Overtime</span>
                                        <h6>{this.props.todoList[this.state.page].overtime}$</h6>
                                    </div>
                                </div>
                                <div style={{
                                    height: "3rem",
                                    margin: "2.4rem 1.3rem 1.6rem 1.6rem",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(128,128,128, 0.1)"
                                }}>
                                    <SvgIcon width="24" height="24" viewBox="0 0 24 24" style={{margin: ".3rem", cursor: "pointer"}} onClick={this.nextPage}>
                                        <path fill={"rgba(128,128,128,0.4)"} d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                        <path fill="none" d="M0 0h24v24H0V0z"/>
                                    </SvgIcon>
                                </div>
                            </div>
                            <div className={'todo-total'}>
                                <h4>1KoX6AA5VTdbBTkw27YEqKfAtTeQo97RRt</h4>
                                <div>
                                    <h5>Total:</h5>
                                    <div>
                                        <h5>{this.props.todoList[this.state.page].amount
                                        * this.props.todoList[this.state.page].hours
                                        + this.props.todoList[this.state.page].overtime}$</h5>
                                        <span>Pay</span>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        )
    }
}

export default Todo;