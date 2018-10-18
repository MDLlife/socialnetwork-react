import * as React from 'react';
import Gig from './Gig';

class MonthTable extends React.Component{
    constructor(props){
        super(props);

        this.checkDate = this.checkDate.bind(this);
        this.addKey = this.addKey.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    state={
      openedGigs: {}
    };

    checkDate = (index,date) =>{
      if (((index === 0) && (date > 7))||((this.props.items[index+1]===undefined)&&(date < 21))){
          return "another-month-date";
      }
      return "";
    };

    addKey = (key) => {
      let newState = {...this.state.openedGigs};
      newState[key] = false;
      this.setState({openedGigs: newState})
    };

    handleClick = (e) => {
        console.log(e);
    };

    render(){
    return (
        <div>
            {
                this.props.items.map((item,rowIndex) =>(
                <div className={"calendar-table-row"} key={"row"+rowIndex}>

                    {item.map((day, cellIndex) => (
                        <div className={"calendar-table-cell"} key={"cell"+cellIndex}>
                            <h6 className={this.checkDate(rowIndex, (new Date(day.date)).getDate())}>{(new Date(day.date)).getDate()}</h6>

                            {this.props.gigs.map((item, index) => {
                                if((new Date(item.date).toString()) === (new Date(day.date)).toString()){
                                    return(
                                        <Gig key={"gig"+index} className={"calendar-table-cell-gig"} item={item} />
                                    )
                                }
                            })
                            }

                        </div>
                    ))}
                </div>))
            }
        </div>
    )}
}

export default MonthTable;
