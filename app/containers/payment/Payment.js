import * as React from 'react';
import { Col } from 'react-bootstrap';
import Todo from 'components/payment/Todo';
import Gigs from 'components/payment/Gigs';

class Payment extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Col xs={10}>
                <Todo
                todoList={[{
                    amount: 5,
                    hours: 5,
                    overtime: 12,
                    location: "Longnan, China",
                    time: "8-14-2018",
                    point: "sky-blue",
                    gig: "Underwear catalog",
                },
                    {
                        amount: 10,
                        hours: 5,
                        overtime: 2,
                        location: "Longnan, China",
                        time: "8-14-2018",
                        point: "sky-blue",
                        gig: "Underwear catalog",
                    },
                    {
                        amount: 8,
                        hours: 4,
                        overtime: 7,
                        location: "Longnan, China",
                        time: "8-14-2018",
                        point: "sky-blue",
                        gig: "Underwear catalog",
                    },
                    {
                        amount: 3,
                        hours: 6,
                        overtime: 6,
                        location: "Longnan, China",
                        time: "8-14-2018",
                        point: "sky-blue",
                        gig: "Underwear catalog",
                    },
                    {
                        amount: 9,
                        hours: 15,
                        overtime: 7,
                        location: "Longnan, China",
                        time: "8-14-2018",
                        point: "sky-blue",
                        gig: "Underwear catalog",
                    },]}/>
                <Gigs

                />
            </Col>
        )
    }
}

export default Payment;