import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import MenuItem from 'material-ui/MenuItem';
import {DropDownMenu} from "material-ui/DropDownMenu";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import Chip from "material-ui/Chip";

const styles = {
    thumbSwitched: {
        backgroundColor: '#EB3386',
    },
    trackSwitched: {
        backgroundColor: '#F599C2',
    },
}

const list = [];
const listEyes = [];
const listHair = [];
const listLenght = [];


['Skinny', 'Fit ', 'Average ', 'Curvy '].forEach((el) => {
    list.push(<MenuItem value={el} key={el} primaryText={el} />)
});

['Blue', 'Green', 'Black ', 'Brown', 'Hazel', 'Other'].forEach((el) => {
    listEyes.push(<MenuItem value={el} key={el} primaryText={el} />)
});

['Black', 'Dark brown', 'Light brown', 'Blond', 'Platinum', 'Auburn', 'Red', 'Gray', 'White', 'Other'].forEach((el) => {
    listHair.push(<MenuItem value={el} key={el} primaryText={el} />)
});

['Short', 'Mid', 'Long'].forEach((el) => {
    listLenght.push(<MenuItem value={el} key={el} primaryText={el} />)
});

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bodyType: null,
            eyes: null,
            hair: null,
            hairLenght: null,
            showTattoo: false,
            tattoo: [
                {key: 0, label: 'Arm'},
                {key: 1, label: 'Leg'},
                {key: 2, label: 'Face'},
                {key: 3, label: 'Neck'},
                {key: 4, label: 'Back'}
            ],
        }
    }

    selectType = (event, index, value) => this.setState({bodyType: value});
    selectEyes = (event, index, value) => this.setState({eyes: value});
    selectHair = (event, index, value) => this.setState({hair: value});
    selectLenght = (event, index, value) => this.setState({hairLenght: value});

    showTattoo = () => {
        this.setState({
            showTattoo: !this.state.showTattoo
        })
    };

    selectedChip = e => {
        let elem = e.target.parentNode;
        if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
            elem.classList.add('hover-chip');
        } else {
            elem.classList.remove('hover-chip');
            elem.classList.add('selected');
        }
    };

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        let {bodyType, eyes, hair, hairLenght} = this.state;

        return [
            <Row>
                <Col xs={12}>
                    <h2 style={{color: '#ea2f85'}}>
                        Please input all parameters carefully and truly. After you save changes, it will be possible to change them only via the admin.
                    </h2>
                    <h2>Body</h2>
                    <h4>Body type</h4>
                    <DropDownMenu
                        value={bodyType}
                        onChange={this.selectType}
                        style={{width: 280}}
                        underlineStyle={{ marginLeft: 0}}
                    >
                        {list}
                    </DropDownMenu>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='cards'>
                        <div className='card-avatar' style={{backgroundColor: '#fafafa', width: '56%'}}>
                            <img src="/static/img/dancer.png" alt="" style={{width: '100%', margin: '30px 10px'}}/>
                        </div>
                        <div className='inputs' style={{width: '50%', display: 'flex', flexDirection: 'column', marginLeft: 40, marginBottom: 10}}>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelText="Height"
                                    floatingLabelFixed={true}
                                    name='height'
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInput}
                                />
                                <img
                                    src="/static/img/height.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Bust"
                                    name='bust'
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInput}
                                />
                                <img
                                    src="/static/img/bust.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Waist"
                                    name='waist'
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInput}
                                />
                                <img
                                    src="/static/img/waist.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Hips"
                                    name='hips'
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInput}
                                />
                                <img
                                    src="/static/img/hips.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>
                            <div style={{position: 'relative'}}>
                                <TextField
                                    floatingLabelFixed={true}
                                    floatingLabelText="Shoe size"
                                    name='size'
                                    inputStyle={{
                                        paddingLeft: 30,
                                        paddingRight: 30
                                    }}
                                    onChange={this.changeInput}
                                    style={{marginBottom: 30}}
                                />
                                <img
                                    src="/static/img/shoe size.svg"
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        width: 24,
                                        top: 37,
                                        left: 1
                                    }}
                                />
                                <label
                                    style={{
                                        position: 'absolute',
                                        top: 42,
                                        left: 235
                                    }}
                                >cm</label>
                            </div>


                        </div>

                    </div>
                </Col>
            </Row>,
            <Row style={{marginTop: 30}}>
                <h4 style={{paddingLeft: 15}}>Appearance</h4>
                <Col xs={12}>
                    <div className='cards'>
                        <div className='card-avatar' style={{backgroundColor: '#fafafa', width: '50%'}}>
                            <img src="/static/img/appearence.png" alt="" style={{width: '60%', margin: '20px auto', display: 'block'}}/>
                        </div>
                        <div className='inputs' style={{
                            display: 'grid',
                            alignItems: 'center',
                            gridTemplateColumns: 300,
                            marginLeft: 40
                        }}>
                            <div style={{position: 'relative'}}>
                                <div style={{
                                    position: 'absolute',
                                    top: -7
                                }}>
                                    <label>Eye color</label>
                                </div>

                                <DropDownMenu
                                    hintText='Eye color'
                                    value={eyes}
                                    onChange={this.selectEyes}
                                    underlineStyle={{ marginLeft: 0}}
                                    style={{width: '100%'}}
                                    labelStyle={{paddingLeft: 30}}
                                >
                                    {listEyes}
                                </DropDownMenu>
                                <div style={{
                                    position: 'absolute',
                                    width: 24,
                                    top: 15,
                                }}>
                                    <img
                                        src="/static/img/eye color.svg"
                                        alt=""
                                    />
                                </div>

                            </div>
                            <div style={{position: 'relative'}}>
                                <div style={{
                                    position: 'absolute',
                                    top: -7
                                }}>
                                    <label>Hair color</label>
                                </div>
                                <DropDownMenu
                                    hintText='Hair color'
                                    value={hair}
                                    onChange={this.selectHair}
                                    underlineStyle={{ marginLeft: 0}}
                                    style={{width: '100%'}}
                                    labelStyle={{paddingLeft: 30}}
                                >
                                    {listHair}
                                </DropDownMenu>
                                <div style={{
                                    position: 'absolute',
                                    width: 24,
                                    top: 15,
                                }}>
                                    <img
                                        src="/static/img/hair color.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div style={{position: 'relative'}}>
                                <div style={{
                                    position: 'absolute',
                                    top: -7
                                }}>
                                    <label>Hair length</label>
                                </div>
                                <DropDownMenu
                                    hintText='Hair length'
                                    value={hairLenght}
                                    onChange={this.selectLenght}
                                    underlineStyle={{ marginLeft: 0}}
                                    style={{width: '100%'}}
                                    labelStyle={{paddingLeft: 30}}
                                >
                                    {listLenght}
                                </DropDownMenu>
                                <div style={{
                                    position: 'absolute',
                                    width: 24,
                                    top: 15,
                                }}>
                                    <img
                                        src="/static/img/hair lenght.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>,
        ]
    }
}

export default connect()(StepOne);