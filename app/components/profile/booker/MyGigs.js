import * as React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import SvgIcon from 'material-ui/SvgIcon';
import GigCard from './GigCard';


class MyGigs extends React.Component {


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

        return(
            <div className={"booker-profile-gigs-container"}>
               <div className={"booker-profile-gigs-header"}>
                    <h5>
                        My gigs
                    </h5>
                   <h6>
                       Full view
                   </h6>
               </div>
               <div className={"booker-profile-gigs-navigation"}>
                   <div className={"active"}>Upcoming</div>
                   <div>Ongoing</div>
                   <div>Completed</div>
               </div>
                <Divider/>
                <div className={'booker-profile-search'}>
                    <SvgIcon
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            marginLeft: "1.3rem",
                            position: "relative",
                            top: ".8rem"
                        }}>
                        <path fill={"#808080"}
                              d={"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}/>
                        <path d={"M0 0h24v24H0z"} fill={"none"}/>
                    </SvgIcon>
                    <div style={{display: "inline-block", width: "calc(100% - 5rem)"}}>
                        <TextField
                            underlineShow={false}
                            style={{
                                height: "4rem",
                                marginLeft: ".8rem",
                            }}
                            fullWidth={true}
                            name={"search"}
                        />
                    </div>
                </div>
                <div className={'booker-profile-gig-cards'} >
                 {cards.map((item, index) => (
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
                    ))}
                </div>
            </div>
        )
    }
}

export default MyGigs;