import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Panel, PanelGroup} from 'react-bootstrap';

class TalentBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    renderAccordion = (count) => {
        let arrayAccordion = [];
        for (let i = 0; i < count; i++) {
            arrayAccordion.push(
                <PanelGroup accordion id="accordion-example">
                    <Panel eventKey={i}>
                        <Panel.Heading>
                            <Panel.Title toggle>{this.props.role} {i}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            {i}
                        </Panel.Body>
                    </Panel>
                </PanelGroup>
            )
        }

        return <div>{arrayAccordion}</div>
    };

    render() {
        return (
            <div>
                {
                    this.renderAccordion(this.state.count)
                }
            </div>
        )
    }
}

export default connect()(TalentBoard);