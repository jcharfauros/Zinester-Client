import React, { Component } from 'react';
import'../App.css';
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

class ComicIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            category: '',
            yearCreated: '',
            comicImg: '',
            isOpen: false
        };
    }

    UploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'zinester');
        this.setState({ loading: true });
      // setLoading(true);
        let res = await fetch(
            'https://api.cloudinary.com/v1_1/zinester/image/upload', {
            method: 'POST',
            body: data,
        });
        const File = await res.json();
        this.setState({ image: File.secure_url });
        this.setState({ loading: false });
    };

    handleSubmit = (e) => {
      let token = localStorage.getItem('token');
      
      e.preventDefault();
      fetch('http://localhost:3000/comic/create', {
          method: 'POST',
          body: JSON.stringify({
              
                  title: this.state.title,
                  author: this.state.author,
                  description: this.state.description,
                  category: this.state.category,
                  yearCreated: this.state.yearCreated,
                  comicImg: this.state.comicImg
              
          }), 
          headers: new Headers({
              'Content-Type': 'application/json',
              Authorization: token
          }),            
      })
      .then((res) => res.json())
      .then((comicData) => {
          console.log(comicData);
          window.location.href = "/comicindex";

          this.setState({ title: '' });
          this.setState({ author: '' });
          this.setState({ description: '' });
          this.setState({ category: '' });
          this.setState({ yearCreated: '' });
          this.setState({ zineImg: '' });
          this.props.fetchComics();
      })        
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
      return (
          <div>
            <Button
              color='black'
              className='btn-create'
              id='padding-create'
              onClick={this.toggle}
              >
                Add a New Comic
            </Button>
            <Modal isOpen={this.state.isOpen}>
              <Button
                onClick={this.toggle}> X 
              </Button>
              <ModalHeader>Upload a New Comic</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='title' />
                        <Input
                          name='title'
                          placeholder='Title of Comic'
                          value={this.title}
                          onChange={(e) => this.setState({ title: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='author' />
                        <Input
                          name='author'
                          placeholder="Comic Author's Name"
                          value={this.author}
                          onChange={(e) => this.setState({ author: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description' />
                        <Input
                          name='description'
                          placeholder='Description of Comic'
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
                          onChange={(e) => this.setState({ yearCreated: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='zineImg' />
                        <Input
                          type='file'
                          name='file'
                          placeholder='Comic Image Upload'
                          onChange={this.UploadImage} />
                    </FormGroup>
                    <Button type='submit'>Add Comic</Button>
                </Form>
              </ModalBody>
            </Modal>
        </div>
      )
    };
}

export default ComicIndex;