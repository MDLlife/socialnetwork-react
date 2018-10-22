import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import GigCard from './GigCard';

class AdditionalGigs extends React.Component {

    state = {
      gigs: [
          {
              talents: ["Actor", "Model"],
              name : "Underwear Catalog",
              rate : "4.5",
              date : "10-17-2018",
              location : "Longnan, China",
              cost:["125$","125$"],
              typeCost: ["per gig","per gig"],
              tags: [["Female", "Kid", "Asian"],["Female", "Mature", "Eurasian"]],
              point: "blue"
          },
          {
              talents: ["Actor", "Model"],
              name : "Underwear Catalog",
              rate : "4.5",
              date : "10-17-2018",
              location : "Longnan, China",
              cost:["125$","125$"],
              typeCost: ["per gig","per gig"],
              tags: [["Female", "Kid", "Asian"],["Female", "Mature", "Eurasian"]],
              point: "blue"
          },
          {
              talents: ["Actor", "Model"],
              name : "Underwear Catalog",
              rate : "4.5",
              date : "10-17-2018",
              location : "Longnan, China",
              cost:["125$","125$"],
              typeCost: ["per gig","per gig"],
              tags: [["Female", "Kid", "Asian"],["Female", "Mature", "Eurasian"]],
              point: "blue"
          },
          {
              talents: ["Actor", "Model"],
              name : "Fashion show",
              rate : "4.5",
              date : "10-17-2018",
              location : "Longnan, China",
              cost:["125$","125$"],
              typeCost: ["per gig","per gig"],
              tags: [["Female", "Kid", "Asian"],["Female", "Mature", "Eurasian"]],
              point: "sky-blue"
          },
          {
              talents: ["Actor", "Model"],
              name : "Fashion show",
              rate : "4.5",
              date : "10-17-2018",
              location : "Longnan, China",
              cost:["125$","125$"],
              typeCost: ["per gig","per gig"],
              tags: [["Female", "Kid", "Asian"],["Female", "Mature", "Eurasian"]],
              point: "sky-blue"
          },
          {
              talents: ["Actor", "Model"],
              name : "Fashion show",
              rate : "4.5",
              date : "10-17-2018",
              location : "Longnan, China",
              cost:["125$","125$"],
              typeCost: ["per gig","per gig"],
              tags: [["Female", "Kid", "Asian"],["Female", "Mature", "Eurasian"]],
              point: "sky-blue"
          }
      ],
        page: 0
    };

    constructor(props){
        super(props);

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    nextPage = () => {
      if (this.state.page*3 < this.state.gigs.length-3){
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
            <div className={this.props.containerClassName}>
                <div className={this.props.containerClassName+"-header"}>
                    <h4>
                        Gigs you may be interested in:
                    </h4>
                    <div>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" onClick={this.prevPage}>
                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" onClick={this.nextPage}>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                </div>
                <div className={this.props.containerClassName+"-items"}>
                    <GigCard
                        talents={this.state.gigs[this.state.page*3].talents}
                        name={this.state.gigs[this.state.page*3].name}
                        rate={this.state.gigs[this.state.page*3].rate}
                        date={this.state.gigs[this.state.page*3].date}
                        location={this.state.gigs[this.state.page*3].location}
                        cost={this.state.gigs[this.state.page*3].cost}
                        typeCost={this.state.gigs[this.state.page*3].typeCost}
                        tags={this.state.gigs[this.state.page*3].tags}
                        point={this.state.gigs[this.state.page*3].point}
                    />
                    <GigCard
                        talents={this.state.gigs[this.state.page*3+1].talents}
                        name={this.state.gigs[this.state.page*3+1].name}
                        rate={this.state.gigs[this.state.page*3+1].rate}
                        date={this.state.gigs[this.state.page*3+1].date}
                        location={this.state.gigs[this.state.page*3+1].location}
                        cost={this.state.gigs[this.state.page*3+1].cost}
                        typeCost={this.state.gigs[this.state.page*3+1].typeCost}
                        tags={this.state.gigs[this.state.page*3+1].tags}
                        point={this.state.gigs[this.state.page*3+1].point}
                    />
                    <GigCard
                        talents={this.state.gigs[this.state.page*3+2].talents}
                        name={this.state.gigs[this.state.page*3+2].name}
                        rate={this.state.gigs[this.state.page*3+2].rate}
                        date={this.state.gigs[this.state.page*3+2].date}
                        location={this.state.gigs[this.state.page*3+2].location}
                        cost={this.state.gigs[this.state.page*3+2].cost}
                        typeCost={this.state.gigs[this.state.page*3+2].typeCost}
                        tags={this.state.gigs[this.state.page*3+2].tags}
                        point={this.state.gigs[this.state.page*3+2].point}
                    />
                </div>
            </div>
        )
    }
}

export default AdditionalGigs