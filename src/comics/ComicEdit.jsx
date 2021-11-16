import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    Button,
} from 'reactstrap'
import ApiURL from '../helper/Environment';

class ComicEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {

            title: this.props?.comic?.title,
            author: this.props?.comic?.author,
            description: this.props?.comic?.description,
            category: this.props?.comic?.category,
            yearCreated: this.props?.comic?.yearCreated,
            comicImg: this.props?.comic?.image,
            isOpen: false
            
        }
    }

    comicUpdate = (e, comic) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
                
        fetch(`${ApiURL}/comic/update/${this.props.comic.id}`, {
            method: 'PUT',
            body: JSON.stringify({

                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                category: this.state.category,
                yearCreated: this.state.yearCreated,
                comicImg: this.state.image

            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token
            }),
        })
        .then((res) => {
            this.props.fetchComics();
            this.props.editOff();        
        });
    }

    toggle = () => 
        this.setState({ 
            isOpen: !this.state.isOpen 
        });

    render() {
        return (
            <div>
                <Button
                    className='btn-edit'
                    color='black'
                    onClick={this.toggle}
                    >
                        Update
                    </Button>
                <Modal isOpen={this.state.isOpen}>
                    <Button
                        color='black'
                        className='btn-delete'
                        onClick={this.toggle}> cancel 
                    </Button>
                    <ModalHeader className='e-text'><h2>Edit this Comic</h2></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.comicUpdate}>
                            <FormGroup>
                                <Label htmlFor='title' />
                                <Input
                                    name='title'
                                    placeholder='Title of Comic'
                                    value={this.state.title}                                   
                                    onChange={(e) => this.setState({ title: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author' />
                                <Input
                                    name='author'
                                    placeholder="Comic Author's Name"
                                    value={this.state.author}
                                    onChange={(e) => this.setState({ author: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description' />
                                <Input
                                    name='description'
                                    placeholder='Description of Comic'
                                    value={this.state.description}
                                    // onChange={this.handleChange}
                                    onChange={(e) => this.setState({ description: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='category' />
                                <Input
                                    type='select'
                                    name='category'
                                    placeholder='Category'
                                    value={this.state.category}
                                    // onChange={this.handleChange}
                                    onChange={(e) => this.setState({ category: e.target.value })} 
                                >
                                    <option></option>
                                    <option value='Adventure'>Adventure</option>
                                    <option value='Adult'>Adult</option>
                                    <option value='Alternative'>Alternative</option>
                                    <option value='Children'>Children</option>
                                    <option value='Esoteric'>Esoteric</option>
                                    <option value='Fantasy'>Fantasy</option>
                                    <option value='Horro'>Horror</option>
                                    <option value='Humor'>Humor</option>
                                    <option value='Manga'>Manga</option>
                                    <option value='Romance'>Romance</option>
                                    <option value='ScienceFiction'>SciFi</option>
                                    <option value='TrueCrime'>True Crime</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='yearCreated' />
                                <Input
                                    name='yearCreated'
                                    placeholder='Published Year'
                                    value={this.yearCreated}
                                    // onChange={this.handleChange}
                                    onChange={(e) => this.setState({ yearCreated: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='comicImg' />
                                <Input
                                    type='file'
                                    name='file'
                                    placeholder='Comic Image Upload'
                                    onChange={this.UploadImage} />
                                    <br />
                             {this.state.loading ? (
                                <h6>Loading...</h6>
                                    ) : (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img src={this.image} />
                              )}     
                            </FormGroup>
                            <Button 
                                className='btn-create'
                                color='black'
                                type='submit'
                                onClick={this.toggle}
                            >
                                Submit Edits
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ComicEdit;