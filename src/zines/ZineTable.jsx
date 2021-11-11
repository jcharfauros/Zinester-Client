import { Component } from "react"
import { 
    Table, 
    Button, 
    Container,     
} from 'reactstrap';
import'../App.css';

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
        // console.log(this.props.zines);
    }

    zineMapper = () => {
        console.log(this.props.zines); //undefined
        return this.props.zine.map((zine, index) => {
            return (
                <tr key={index}>
                    <th scope='row'>{zine.id}</th>
                    <td>{zine.title}</td>
                    <td>{zine.author}</td>
                    <td>{zine.description}</td>
                    <td>{zine.category}</td>
                    <td>{zine.yearCreated}</td>
                    <td>
                        <img 
                            src={zine.zineImg}
                            style={{ width: '200px' }}
                            alt='zine img'
                        />{''}
                        </td>
                        <td>
                        <Button
                            // className=''
                            color='black'
                            onClick={() => {
                                this.props.editZine(zine);
                                this.props.editOn();
                            }}>
                                Update
                        </Button>
                        <Button
                            // className=''
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
                
                <Table>
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