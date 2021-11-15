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

class ZineEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {

            title: this.props?.zine?.title,
            author: this.props?.zine?.author,
            description: this.props?.zine?.description,
            category: this.props?.zine?.category,
            yearCreated: this.props?.zine?.yearCreated,
            zineImg: this.props?.zine?.zineImg,
            isOpen: false
            
        }
    }

    zineUpdate = (e, zine) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
                
        fetch(`${ApiURL}/zine/update/${this.props.zine.id}`, {
            method: 'PUT',
            body: JSON.stringify({

                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                category: this.state.category,
                yearCreated: this.state.yearCreated,
                zineImg: this.state.zineImg

            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token
            }),
        })
        .then((res) => {
            this.props.fetchZines();
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
                    onClick={this.toggle}>
                        Update
                    </Button>
                <Modal isOpen={this.state.isOpen}>
                    <Button
                        onClick={this.toggle}> X 
                    </Button>
                    <ModalHeader>Edit this Zine</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.zineUpdate}>
                            <FormGroup>
                                <Label htmlFor='title' />
                                <Input
                                    name='title'
                                    placeholder='Title of Zine'
                                    value={this.state.title}                                   
                                    onChange={(e) => this.setState({ title: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author' />
                                <Input
                                    name='author'
                                    placeholder="Zine Author's Name"
                                    value={this.state.author}
                                    onChange={(e) => this.setState({ author: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description' />
                                <Input
                                    name='description'
                                    placeholder='Description of Zine'
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
                                    // onChange={this.handleChange}
                                    onChange={(e) => this.setState({ yearCreated: e.target.value })} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='zineImg' />
                                <Input
                                    type='file'
                                //   name='zineImg'
                                    name='file'
                                    placeholder='Zine Image Upload'
                                    onChange={this.UploadImage} />
                            </FormGroup>
                            <Button type='submit'
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

export default ZineEdit;