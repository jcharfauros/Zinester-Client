import { Component } from "react"
import { 
    Table, 
    Button, 
    Container,     
} from 'reactstrap';
import'../App.css';
import ApiURL from "../helper/Environment";
import ZineEdit from "./ZineEdit";

class ZineTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteZine = (zine) => {
        const token = localStorage.getItem('token');        
       
        fetch(`${ApiURL}/zine/delete/${zine.id}`, {
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
                <tr key={index}>
                    <th scope='row'>{zine.id}</th>
                    <td>{zine.title}</td>
                    <td>{zine.author}</td>
                    <td>{zine.description}</td>
                    <td>{zine.category}</td>
                    <td>{zine.yearCreated}</td>
                    <td onClick={()=> window.open([zine.zineImg], "_blank")}>
                        <img 
                            src={zine.zineImg}
                            style={{ width: '100px' }}
                            alt='zine img'
                        />{''}
                        </td>
                        <td>
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
                    </td>
                </tr>
            );
        });
    };

    render() {
        return(
            <Container>
                <h1>
                    Available Zines
                </h1>
                <p className='note-text'>note: click the image for larger image</p>                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Catalog#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Year</th>
                            <th>Zine</th>
                        </tr>
                    </thead>
                    <tbody>{this.zineMapper()}</tbody>
                </Table>
            </Container>
        )
    };
};

export default ZineTable;