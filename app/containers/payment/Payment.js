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
                    gigUnpaidList = {[{
                        talents: ["Actor","Model"],
                        point: "blue",
                        name: "Underwear catalog",
                        date: "8-14-2018",
                        location: "Longnan, China",
                        cost: 12,
                        address: false,
                        paid: 3,
                        unpaid: 1,
                        pending: 5,
                    },{
                        talents: ["Actor","Model"],
                        point: "blue",
                        name: "Underwear catalog",
                        date: "8-14-2018",
                        location: "Longnan, China",
                        cost: 124,
                        address: true,
                        paid: 3,
                        unpaid: 2,
                        pending: 5,
                    },{
                        talents: ["Actor","Model","Dancer"],
                        point: "blue",
                        name: "Underwear catalog",
                        date: "8-14-2018",
                        location: "Longnan, China",
                        cost: 1205,
                        address: false,
                        paid: 3,
                        unpaid: 1,
                        pending: 1,
                    },{
                        talents: ["Actor","Model"],
                        point: "sky-blue",
                        name: "Fashion show",
                        date: "8-14-2018",
                        location: "Longnan, China",
                        cost: 760,
                        address: true,
                        paid: 3,
                        unpaid: 6,
                        pending: 5,
                    },{
                        talents: ["Actor","Model"],
                        point: "blue",
                        name: "Underwear catalog",
                        date: "8-14-2018",
                        location: "Longnan, China",
                        cost: 125,
                        address: false,
                        paid: 0,
                        unpaid: 1,
                        pending: 5,
                    },{
                        talents: ["Actor","Model","Dancer"],
                        point: "sky-blue",
                        name: "Fashion show",
                        date: "8-14-2018",
                        location: "Longnan, China",
                        cost: 250,
                        address: true,
                        paid: 3,
                        unpaid: 1,
                        pending: 5,
                    },]}
                    gigPaidList ={[
                        {
                            talents: ["Actor"],
                            point: "sky-blue",
                            name: "Fashion show",
                            date: "8-14-2018",
                            location: "Longnan, China",
                            cost: "1256",

                        }
                    ]}
                />,
            </Col>
        )
    }
}

export default Payment;