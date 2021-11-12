import React, { Component } from 'react'; 
import {   
    Row,
    Col,
} from 'reactstrap';
import ZineCreate from './ZineCreate';
import ZineTable from './ZineTable';
import ApiURL from '../helper/Environment';
import ZineEdit from './ZineEdit';

class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            zine: [],
            updateZine: false,
            zineToUpdate: {}
        }
    }

    fetchZines = () => {
        const token = localStorage.getItem('token');
        
        fetch(`${ApiURL}/zine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token,
            }),
        })
            .then((res) => res.json())
            .then((zineData) => {
                this.setState({zine: zineData});
                // console.log(zineData);
            });
    };

    fetchToEdit = (zine) => {
        const token = localStorage.getItem('token');
        
        return fetch(`${ApiURL}/zine/update/${zine.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token,
            }),
        })
            .then((res) => {
                this.setState({ updateZine: false })
                this.fetchToEdit();
            })
    }

    editZine = (zine) => {
        this.setState({
            zineToUpdate: zine
        });
        console.log(zine);
    }

    componentDidUpdate(prevProps) {
        if (this.props.zineToUpdate !== prevProps.zineToUpdate) {
            this.fetchZines(this.props.zineToUpdate);
        }
    }

    editOn = () => {
        this.setState({ 
            updateZine: true
        });
    }

    editOff = () => {
        this.setState({
            updateZine: false
        });
    }

    componentDidMount() {
        this.fetchZines();
    }

    render() {     
        return(
            <div>
                <Row>
                    <Col md='3'>
                        <ZineCreate 
                            fetchZines={this.fetchZines}
                            token={this.props.token} />
                    </Col>
                    <Col md='9'>
                        <ZineTable 
                            zine={this.state.zine} 
                            editZine={this.editZine}
                            editOn={this.editOn}
                            fetchZines={this.fetchZines}
                            token={this.props.token} />
                    </Col>
                    <Col md='12'>
                        {
                            this.state.updateZine ? 
                            <ZineEdit 
                                t={this.state.updateZine} 
                                update={this.fetchToEdit}
                                zine={this.state.zineToUpdate}
                            /> :
                            <div></div>
                        }
                    </Col>
                </Row>
            </div>
        )
    }   
}

export default Index;