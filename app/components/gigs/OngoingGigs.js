import * as React from 'react'
import GigCard from './GigCard'
import Navigation from '../payment/Navigation';

class OngoingGigs extends React.Component{

    state = {
        gigs: [
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "1256",
                nameCost: "per gig",
                rate: 4.5,
                completed: false,
                feedback: false,
                payment: false,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "1256",
                nameCost: "per gig",
                rate: 4.5,
                completed: false,
                feedback: false,
                payment: false,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "1256",
                nameCost: "per gig",
                rate: 4.5,
                completed: false,
                feedback: false,
                payment: false,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "256",
                nameCost: "per hour",
                rate: 4.5,
                completed: false,
                feedback: false,
                payment: false,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "1256",
                nameCost: "per gig",
                rate: 4.5,
                completed: false,
                feedback: false,
                payment: false,
            },
            {
                talent: "Actor",
                point: "sky-blue",
                name: "Fashion show",
                date: "8-14-2018",
                location: "Longnan, China",
                cost: "126",
                nameCost: "per hour",
                rate: 4.5,
                completed: false,
                feedback: false,
                payment: false,
            },
        ]
    };

    render(){
        let content;
        if (this.state.gigs.length) {
            content = <div>
                <div className={"gigs-container"}>

                    {
                        this.state.gigs.map((item, index) => (
                            <GigCard
                                key={index}
                                talent={item.talent}
                                point={item.point}
                                name={item.name}
                                date={item.date}
                                location={item.location}
                                cost={item.cost}
                                nameCost={item.nameCost}
                                rate={item.rate}
                                completed={item.completed}
                                feedback={item.feedback}
                                payment={item.payment}
                            />
                        ))
                    }

                </div>
                <Navigation
                    classes={'navigation'}
                />
            </div>
        }else {
            content = <div>
                <div className={'no-gigs'}>
                    <h1>You don't have gigs you are booked on</h1>
                </div>
            </div>

        }
        return(
            content
        )
    }
}

export default OngoingGigs;
