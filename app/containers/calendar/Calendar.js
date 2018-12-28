import * as React from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import Bar from 'components/calendar/Bar';
import MonthTable from 'components/calendar/MonthTable';
import AdditionalGigs from 'components/calendar/AdditionalGigs';

const monthes = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

class Calendar extends React.Component {

    state = {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth(),
    };

    constructor(props) {
        super(props);

        this.handleYear = this.handleYear.bind(this);
        this.handleMonth = this.handleMonth.bind(this);
        this.createWeeks = this.createWeeks.bind(this);
    }

    handleYear = (e) => this.setState({year: e});
    handleMonth = (e) => this.setState({month: e});

    createWeeks = (currentDate) => {
        let weeks = [];
        let date = new Date(currentDate);
        date.setDate(date.getDate() - date.getDay());

        for (let i = 0; i < 5; i++) {
            weeks.push([]);
            for (let d = 0; d < 7; d++) {
                weeks[i].push({
                    date: date.toString(),
                });
                let day = date.getDate() + 1;
                date.setDate(day);
            }
        }
        return weeks;
    };

    render() {
        return (
            <Col xs={9}>
                <hr style={{margin: '-1px 0px 0px', height: '10px', border: 'none'}}/>

                <div className={"calendar-container"}>
                    <div className={"calendar-item"}>
                        <Bar
                            items={[this.state.year - 1, this.state.year]}
                            values={[this.state.year - 1, this.state.year]}
                            active={this.state.year}
                            activeItemClassName={"active-year"}
                            itemClassName={"years-item"}
                            containerClassName={"years-container"}
                            handler={this.handleYear}
                        />
                        <Bar
                            items={monthes}
                            values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
                            active={this.state.month}
                            activeItemClassName={"active-month"}
                            itemClassName={"monthes-item"}
                            containerClassName={"monthes-container"}
                            handler={this.handleMonth}
                        />
                        <Divider/>
                        <Bar
                            containerClassName={"week-days-container"}
                            items={weekDays}
                        />
                        <Divider/>
                        <MonthTable
                            items={this.createWeeks(new Date(this.state.year, this.state.month, 1))}
                            gigs={[{
                                point: "blue",
                                name: "Underwear catalog",
                                date: "10-17-2018",
                                startTime: "13:00",
                                endTime: "15:00",
                                location: "Longnan, China",
                                payment: "125$ per gig"
                            },
                                {
                                    point: "sky-blue",
                                    name: "Fashion show",
                                    date: "10-17-2018",
                                    startTime: "15:00",
                                    endTime: "18:00",
                                    location: "Longnan, China",
                                    payment: "150$ per gig"
                                },
                                {
                                    point: "sky-blue",
                                    name: "Fashion show",
                                    date: "10-17-2018",
                                    startTime: "22:00",
                                    endTime: "23:00",
                                    location: "Longnan, China",
                                    payment: "175$ per gig"
                                },
                                {
                                    point: "blue",
                                    name: "Underwear catalog",
                                    date: "10-25-2018",
                                    startTime: "13:00",
                                    endTime: "15:00",
                                    location: "Longnan, China",
                                    payment: "125$ per gig"
                                }]}
                        />
                    </div>
                    <AdditionalGigs containerClassName={"calendar-gigs"}/>
                </div>
            </Col>)
    }
}

export default connect()(Calendar);