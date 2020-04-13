import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import storage from '../../config/fbConfig';

export class Dashboard extends Component {
  state = {
    image: null,
    url: '',
    progress: 0,
  };

  handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleEditPicture = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const { auth } = this.props;
    if (auth.uid && !auth.emailVerified) return <Redirect to='verify-email' />;
    return (
      <div className='text-center mt-4'>
        <progress value={this.state.progress} max='100' />
        <h1 className='text-primary mb-4'>Image Upload</h1>
        <input type='file' id='image' onChange={this.handleImageChange} />
        <button
          className='btn btn-lg btn-primary'
          onClick={this.handleEditPicture}
        >
          Upload
        </button>

        <br />
        <img
          src={this.state.url || 'http://via.placeholder.com/400x300'}
          alt='Uploaded images'
          height='300'
          width='400'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
