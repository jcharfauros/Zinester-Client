import React, { Component } from 'react'; 
import {   
    Row,
    Col,
} from 'reactstrap';
import ZineCreate from './ZineCreate';
import ZineTable from './ZineTable';

class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            zine: [], //or zines?
            updateZine: false,
            zineToUpdate: {}
        }
    }

    fetchZines = () => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:3000/zine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token,
            }),
        })
            .then((res) => res.json())
            .then((zineData) => {
                this.setState({zine: zineData});
                console.log(zineData);
            });
    };

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
                    <p>Hello from the Zine Index. Delete this line!</p>
                    <Col md='3'>
                        <ZineCreate fetchZines={this.fetchZines}
                            token={this.props.token} />
                    </Col>
                    <Col md='6'>
                        <ZineTable 
                            zine={this.state.zine} 
                            editZine={this.editZine}
                            editOn={this.editOn}
                            fetchZines={this.fetchZines}
                            token={this.props.token} />
                    </Col>
                </Row>
            </div>
        )
    }   
}

export default Index;


// import React, { useState, useEffect } from 'react';
// import {
//     Container,
//     Row,
//     Col
// } from 'reactstrap';
// import ZineCreate from './ZineCreate';
// import ZineTable from './ZineTable';

// export const Index = (props) => {
//     const [ zine, setZine ] = useState([]);
//     const [ updateZine, setUpdateZine ] = useState(false);
//     const [ zineToUpdate, setZineToUpdate ] = useState({});

//     const fetchZines = () => {
//         fetch('http://localhost:3000/zine', {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 Authorization: props.token,
//             }),
//         })
//             .then((res) => res.json())
//             .then((zineData) => {
//                 setZine(zineData);
//                 console.log(zineData);
//             });
//     };

//     const editZine = (zine) => {
//         setZineToUpdate(zine);
//         console.log(zine);
//     }
    
//     const editOn = () => {
//         setUpdateZine(true);            
//     }
                
//     const editOff = () => {
//         setUpdateZine(false);
//     }

//     useEffect(() => {
//         fetchZines();
//     }, []);


//     return(
//         <div>
//             <Row>
//             <p>Hello from Zines index</p>
//                 <Col md='3'>   
//                     <ZineCreate fetchZines={fetchZines} token={props.token} />
//                 </Col>
//                 <Col md='9'>
//                     <h2>Available Zines</h2>
//                     <ZineTable 
//                         zine={zine}
//                         fetchZines={fetchZines}
//                         editZine={editZine}
//                         editOn={editOn}
//                         token={props.token} />
//                 </Col>

//             </Row>
//             <Row>
                
//             </Row>
//         </div>
//     )
// }