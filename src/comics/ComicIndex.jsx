import React, { Component } from 'react'; 
import {   
    Row,
    Col,
} from 'reactstrap';
import '../App.css';
import ComicCreate from './ComicCreate';
import ComicTable from './ComicTable';
import ApiURL from '../helper/Environment';
import ComicEdit from './ComicEdit';
// import zGirlpink from '../assets/zGirlpink.png';
import zthem_nobg from '../assets/zthem_nobg.png';

class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            comic: [],
            updateComic: false,
            comicToUpdate: {}
        }
    }

    fetchComics = () => {
        const token = localStorage.getItem('token');
        
        fetch(`${ApiURL}/comic`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token,
            }),
        })
            .then((res) => res.json())
            .then((comicData) => {
                this.setState({comic: comicData});
                // console.log(comicData);
            });
    };

    editComic = (comic) => {
        this.setState({
            comicToUpdate: comic
        });
        console.log(comic);
    }

    componentDidUpdate(prevProps) {
        if (this.props.comicToUpdate !== prevProps.comicToUpdate) {
            this.fetchComics(this.props.comicToUpdate);
        }
    }

    editOn = () => {
        this.setState({ 
            updateComic: true
        });
    }

    editOff = () => {
        this.setState({
            updateComic: false
        });
    }

    componentDidMount() {
        this.fetchComics();
    }

    render() {     
        return(
            <div>
                <Row>
                    <Col md='3'>
                        <ComicCreate 
                            fetchComics={this.fetchComics}
                            token={this.props.token} />
                        <img
                            src={zthem_nobg}
                            alt='them_comic'
                            className='them-img'
                        />
                    </Col>
                    <Col md='9'>
                        <ComicTable 
                            comic={this.state.comic} 
                            editComic={this.editComic}
                            editOn={this.editOn}
                            editOff={this.editOff}
                            fetchComics={this.fetchComics}
                            token={this.props.token} />
                    </Col>
                    <Col md='12'>
                        { this.state.updateComic ? 
                            <ComicEdit 
                                // t={this.state.updateComic}  // is this doing anything?
                                comic={this.state.comicToUpdate}
                                fetchComics={this.fetchComics}
                                update={this.fetchToEdit}
                                token={this.props.token}
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