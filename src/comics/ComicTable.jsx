import { Component } from "react"
import { 
    Table, 
    Button, 
    Container,     
} from 'reactstrap';
import'../App.css';
import ComicEdit from "./ComicEdit";

class ComicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteComic = (comic) => {
        const token = localStorage.getItem('token');        
       
        fetch(`http://localhost:3000/comic/delete/${comic.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token
            }),
        })
        .then(() => this.props.fetchComics());
        // console.log(this.props.comic);
    }

    comicMapper = () => {
        // console.log(this.props.comic);
        return this.props.comic.map((comic, index) => {
            return (
                <tr key={index}>
                    <th scope='row'>{comic.id}</th>
                    <td>{comic.title}</td>
                    <td>{comic.author}</td>
                    <td>{comic.description}</td>
                    <td>{comic.category}</td>
                    <td>{comic.yearCreated}</td>
                    <td onClick={()=> window.open([comic.comicImg], "_blank")}>
                        <img 
                            src={comic.comicImg}
                            style={{ width: '200px' }}
                            alt='comic img'
                        />{''}
                        </td>
                        <td>
                        <ComicEdit 
                            comic={comic}
                            editOff={this.props.editOff}
                            fetchComics={this.props.fetchComics}
                            />                       
                        <Button
                            className='btn-delete'
                            // color='black'
                            onClick={() => { 
                                this.deleteComic(comic) 
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
                    Available Comics
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
                            <th>Comic</th>
                        </tr>
                    </thead>
                    <tbody>{this.comicMapper()}</tbody>
                </Table>
            </Container>
        )
    };
};

export default ComicTable;