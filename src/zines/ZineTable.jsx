import { Component } from "react"
import { 
    // Table, 
    Button,
    // Col,
    Row, 
    Container,   
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText  
} from 'reactstrap';
import'../App.css';
import zAnxious from '../assets/zAnxious.png';
import ZineEdit from "./ZineEdit";

const style ={ width: '25rem'};
class ZineTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteZine = (zine) => {
        const token = localStorage.getItem('token');        
       
        fetch(`http://localhost:3000/zine/delete/${zine.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token
            }),
        })
        .then(() => this.props.fetchZines());
        // console.log(this.props.zine);
    }

    zineMapper = () => {
        // console.log(this.props.zine);
        return this.props.zine.map((zine, index) => {
            return (
                
                <Card style={style}>    
                    <CardBody>
                        <CardTitle id='bg-pink'>
                            <h4>Title: {zine.title}</h4>
                            <p><span>CATEGORY:</span> {zine.category}
                             {''} <span>published:</span> {zine.yearCreated}</p>
                        </CardTitle>
                        <CardImg 
                            src={zine.zineImg}
                            style={{ width: '200px' }}
                            alt='...' />
                        {/* <CardImg 
                            alt='...'
                            src={zAnxious}
                            style={{ width: '250px'}}
                        /> */}
                        <CardText className='z-text'>
                            <p>by: {zine.author}</p>
                            <h6>About this zine:</h6>{''} {zine.description}
                        </CardText>
                        <ZineEdit 
                            zine={zine}
                            editOff={this.props.editOff}
                            fetchZines={this.props.fetchZines}
                            />                       
                        <Button
                            className='btn-delete'
                            color='black'
                            onClick={() => { 
                                this.deleteZine(zine) 
                            }}>
                                Delete
                        </Button>
                    </CardBody>
                </Card>
            );
        })
    };

    render() {
        return(
            <Container>
                <Row>
                <h1>Available Zines</h1>     
                    {this.zineMapper()}
                </Row>
            </Container>
        )
    };
};

export default ZineTable;