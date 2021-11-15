import { Component } from "react"
import { 
    Table, 
    Button, 
    Container,
    Row,
    Card,
    CardTitle,
    CardBody,
    CardImg,
    CardText     
} from 'reactstrap';
import'../App.css';
import ComicEdit from "./ComicEdit";

const style ={ width: '25rem'};

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
                <Card style={style}>
                    <CardBody>
                        <CardTitle
                            id='bg-mauve'>
                            <h4>Title: {comic.title}</h4>
                            <p><span>CATEGORY:</span> {comic.category}
                             {''} <span>PUBLISHED:</span> {comic.yearCreated}</p>
                        </CardTitle>
                        <CardImg 
                            src={comic.comicImg}
                            style={{ width: '200px' }}
                            alt='...'/>
                        <CardText className='c-text'>
                            <p>by: {comic.author}</p>
                            <h6>About this comic:</h6>{''} {comic.description}
                        </CardText>
                        <ComicEdit 
                            comic={comic}
                            editOff={this.props.editOff}
                            fetchComics={this.props.fetchComics}
                            />                       
                        <Button
                            className='btn-delete'
                            color='black'
                            onClick={() => { 
                                this.deleteComic(comic) 
                            }}>
                                Delete
                        </Button>
                    </CardBody>
                </Card>
            );
        });
    };

    render() {
        return(
            <Container>
                <Row>
                <h1>Available Comics</h1> 
                    {this.comicMapper()}               
                </Row>
            </Container>
        )
    };
};

export default ComicTable;