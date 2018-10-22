import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import GigCard from './GigCard';

class AdditionalGigs extends React.Component {

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className={this.props.containerClassName}>
                <div className={this.props.containerClassName+"-header"}>
                    <h4>
                        Gigs you may be interested in:
                    </h4>
                    <div>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </SvgIcon>
                    </div>
                </div>
                <div className={this.props.containerClassName+"-items"}>
                    <GigCard
                        talents={["Actor", "Model"]}
                        name={"Underwear Catalog"}
                        rate={"4.5"}
                        date={"10-17-2018"}
                        location={"Longnan, China"}
                        cost={"125$"}
                        typeCost={"per gig"}
                        tags={["Female","Kid","Asian"]}
                    />
                    <GigCard
                        talents={["Actor", "Model"]}
                        name={"Underwear Catalog"}
                        rate={"4.5"}
                        date={"10-17-2018"}
                        location={"Longnan, China"}
                        cost={"125$"}
                        typeCost={"per gig"}
                        tags={["Female","Kid","Asian"]}
                    />
                    <GigCard
                        talents={["Actor", "Model"]}
                        name={"Underwear Catalog"}
                        rate={"4.5"}
                        date={"10-17-2018"}
                        location={"Longnan, China"}
                        cost={"125$"}
                        typeCost={"per gig"}
                        tags={["Female","Kid","Asian"]}
                    />
                </div>
            </div>
        )
    }
}

export default AdditionalGigs