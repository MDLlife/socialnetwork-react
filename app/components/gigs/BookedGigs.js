import * as React from 'react'
import GigCard from './GigCard'
import Navigation from '../payment/Navigation';

class BookedGigs extends React.Component{

    state = {
        gigs: []
    };

    render(){
        let content;
        if (this.state.gigs.length) {
            content = <div>{this.state.gigs.map((item, index) => (
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
            ))}
                <Navigation
                    classes={'navigation'}
                />
            </div>
        }else {
            content = <div>
                <div className={"no-gigs"}>
                    <img src="/static/img/ball.png" alt=""/>
                    <h1>You don't have gigs you are booked on</h1>
                </div>
            </div>

        }
        return(
           content
        )
    }
}

export default BookedGigs;
