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

class ZineEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            category: '',
            yearCreated: '',
            zineImg: '',
        }
    }

    componentWillMount() {
        this.setState({
            title: this.props.zine.title,
            author: this.props.zine.author,
            description: this.props.zine.description,
            category: this.props.zine.category,
            yearCreated: this.props.zine.yearCreated,
            zineImg: this.props.zine.zineImg
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal 
                    isOpen={true}
                >
                    <ModalHeader>Edit this Zine</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.ZineEdit}>
                            <FormGroup>
                                <Label htmlFor='title' />
                                <Input
                                    name='title'
                                    placeholder='Title of Zine'
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    // onChange={(e) => this.setState({ editTitle: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author' />
                                <Input
                                    name='author'
                                    placeholder="Zine Author's Name"
                                    value={this.state.author}
                                    onChange={this.handleChange}
                                    // onChange={(e) => this.setState({ editAuthor: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description' />
                                <Input
                                    name='description'
                                    placeholder='Description of Zine'
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    // onChange={(e) => this.setState({ editDescription: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='category' />
                                <Input
                                    type='select'
                                    name='category'
                                    placeholder='Category'
                                    value={this.state.category}
                                    onChange={this.handleChange}
                                    // onChange={(e) => this.setState({ editCategory: e.target.value })} 
                                >
                                    <option></option>
                                    <option value='Animals'>Animals</option>
                                    <option value='Art'>Art</option>
                                    <option value='DIY'>DIY</option>
                                    <option value='Education'>Education</option>
                                    <option value='Fanzine'>Fanzine</option>
                                    <option value='Feminism'>Feminism</option>
                                    <option value='Food'>Food</option>
                                    <option value='Health'>Health</option>
                                    <option value='LGBTIA'>LGBTIA</option>
                                    <option value='Literary'>Literary</option>
                                    <option value='Love'>Love</option>
                                    <option value='Media'>Media</option>
                                    <option value='Minicomic'>Mini comic</option>
                                    <option value='Music'>Music</option>
                                    <option value='Political'>Political</option>
                                    <option value='Science'>Science</option>
                                    <option value='Spiritual'>Spiritual</option>
                                    <option value='TrueCrime'>True Crime</option>
                                    <option value='Travel'>Travel</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='yearCreated' />
                                <Input
                                    name='yearCreated'
                                    placeholder='Published Year'
                                    value={this.yearCreated}
                                    onChange={this.handleChange}
                                    // onChange={(e) => this.setState({ editYearCreated: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='zineImg' />
                                <Input                                    
                                    name='zineImg'
                                    value={this.state.zineImg}
                                    onChange={this.handleChange}                                    
                                    // onChange={(e) => this.setState({ editZineImg: e.target.value })} 
                                />
                            </FormGroup>
                            <Button
                                type='submit'
                                onClick={this.handleSubmit}
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

export default ZineEdit;