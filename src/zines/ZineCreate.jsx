import React, { Component } from 'react';
import'../App.css';
import ApiURL from "../helper/Environment";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalBody,
    ModalHeader,    
  } from 'reactstrap'

class ZineCreate extends Component {
      constructor(props) {
          super(props);
          this.state = {
              title: '',
              author: '',
              description: '',
              category: '',
              yearCreated: '',
              zineImg: '',
              isOpen: false,              
          };
      }

      UploadImage = async (e) => {
          const files = e.target.files;
          const data = new FormData();
          data.append('file', files[0]);
          data.append('upload_preset', 'zinester');
          this.setState({ loading: true });
          
          let res = await fetch(
              'https://api.cloudinary.com/v1_1/zinester/image/upload', {
              method: 'POST',
              body: data,
          });
          const File = await res.json();
          console.log(this.state.image);
          this.setState({ image: File.secure_url });
          this.setState({ loading: false });
      };

      handleSubmit = (e) => {
        let token = localStorage.getItem('token');        
        e.preventDefault();

        fetch(`${ApiURL}/zine/create`, {
            method: 'POST',
            body: JSON.stringify({
                
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    category: this.state.category,
                    yearCreated: this.state.yearCreated,
                    zineImg: this.state.image
                
            }), 
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token
            }),            
        })
        .then((res) => res.json())
        .then((zineData) => {
            console.log(zineData);
            window.location.href = "/index"; //this is where you will go after hitting submit

            this.setState({ title: '' });
            this.setState({ author: '' });
            this.setState({ description: '' });
            this.setState({ category: '' });
            this.setState({ yearCreated: '' });
            this.setState({ zineImg: '' });
            this.props.fetchZines();
        })        
    };

    toggle = () => 
      this.setState({ 
        isOpen: !this.state.isOpen 
      });

    render() {
        return (
            <div className='mb-3'>
              <Button
                color='black'
                className='btn-create'
                id='padding-create'
                onClick={this.toggle}
              >
                  Add New Zine
              </Button>
              <Modal isOpen={this.state.isOpen}>
                <Button
                  color='black'
                  className='btn-delete'
                  onClick={this.toggle}> cancel 
                </Button>
                <ModalHeader className='e-text'><h2>Upload New Zine</h2></ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                          <Label htmlFor='title' />
                          <Input
                            name='title'
                            placeholder='Title of Zine'
                            value={this.title}
                            onChange={(e) => this.setState({ title: e.target.value })} />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor='author' />
                          <Input
                            name='author'
                            placeholder="Zine Author's Name"
                            value={this.author}
                            onChange={(e) => this.setState({ author: e.target.value })} />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor='description' />
                          <Input
                            name='description'
                            placeholder='Description of Zine'
                            value={this.description}
                            onChange={(e) => this.setState({ description: e.target.value })} />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor='category' />
                          <Input
                            type='select'
                            name='category'
                            placeholder='Category'
                            value={this.category}
                            onChange={(e) => this.setState({ category: e.target.value })} >
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
                            onChange={(e) => this.setState({ yearCreated: e.target.value })} />
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor='zineImg' />
                          <Input
                            type='file'
                          //   name='zineImg'
                            name='file'
                            placeholder='Zine Image Upload'
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
                        type='submit'>Add Zine</Button>
                  </Form>
                </ModalBody>
              </Modal>
          </div>
        )
      };
}

export default ZineCreate;
