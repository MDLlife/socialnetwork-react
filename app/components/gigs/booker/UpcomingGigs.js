import * as React from 'react'
import GigCard from './../../profile/booker/GigCard';
import Navigation from '../../payment/Navigation';

class UpcomingGigs extends React.Component{


    render(){

        const cards = [
            {
                name: "Fashion show",
                date: "8-22-2018",
                location: "Longnan, China",
                cost: "1234$",
                typeCost: "total budget",
                point: "sky-blue",
                talents: {
                    model: {
                        types: [
                            {
                                booked: 3,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Teen", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 2,
                                tags: ["Male", "Teen", "Asian"]
                            },
                            {
                                booked: 3,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Adult", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 3,
                                tags: ["Male", "Adult", "Asian"]
                            }
                        ]
                    },
                    actor: {
                        types: [
                            {
                                booked: 4,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Teen", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 1,
                                tags: ["Male", "Teen", "Asian"]
                            },
                            {
                                booked: 4,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Adult", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 2,
                                tags: ["Male", "Adult", "Asian"]
                            }
                        ]
                    }
                }
            },
            {
                name: "Fashion show",
                date: "8-22-2018",
                location: "Longnan, China",
                cost: "1234$",
                typeCost: "total budget",
                point: "sky-blue",
                talents: {
                    model: {
                        types: [
                            {
                                booked: 3,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Teen", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 2,
                                tags: ["Male", "Teen", "Asian"]
                            },
                            {
                                booked: 3,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Adult", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 3,
                                tags: ["Male", "Adult", "Asian"]
                            }
                        ]
                    },
                    actor: {
                        types: [
                            {
                                booked: 4,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Teen", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 1,
                                tags: ["Male", "Teen", "Asian"]
                            },
                            {
                                booked: 4,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Adult", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 2,
                                tags: ["Male", "Adult", "Asian"]
                            }
                        ]
                    }
                }
            },
            {
                name: "Fashion show",
                date: "8-22-2018",
                location: "Longnan, China",
                cost: "1234$",
                typeCost: "total budget",
                point: "sky-blue",
                talents: {
                    model: {
                        types: [
                            {
                                booked: 3,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Teen", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 2,
                                tags: ["Male", "Teen", "Asian"]
                            },
                            {
                                booked: 3,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Adult", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 3,
                                tags: ["Male", "Adult", "Asian"]
                            }
                        ]
                    },
                    actor: {
                        types: [
                            {
                                booked: 4,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Teen", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 1,
                                tags: ["Male", "Teen", "Asian"]
                            },
                            {
                                booked: 4,
                                preBooked: 0,
                                required: 0,
                                tags: ["Female", "Adult", "Asian"]
                            },
                            {
                                booked: 0,
                                preBooked: 0,
                                required: 2,
                                tags: ["Male", "Adult", "Asian"]
                            }
                        ]
                    }
                }
            }
        ];

        let content;
        if (cards.length) {
            content = <div>
                <div className={"gigs-container"}>
                    <div className={'booker-profile-gig-cards'}>
                    {
                        cards.map((item, index) => (
                            <GigCard
                                name = {item.name}
                                date = {item.date}
                                location = {item.location}
                                cost = {item.cost}
                                typeCost = {item.typeCost}
                                talents = {item.talents}
                                key={"gig-card-"+index}
                                point={item.point}
                            />
                        ))
                    }
                    </div>
                </div>
                <Navigation
                    classes={'navigation'}
                />
            </div>
        }else {
            content = <div>
                <div className={'no-gigs'}>
                    <img src="/static/img/ball.png" alt="ball"/>
                    <h1>You don't have upcoming gigs</h1>
                    <span>Create gig</span>
                </div>
            </div>

        }
        return(
            content
        )
    }
}

export default UpcomingGigs;
