import React, { useState } from "react";
import firebase from "../../config/fbConfig";

const FlyerUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const db = firebase.firestore();
  const storage = firebase.storage();

  const onChangeUpload = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    setImage(image);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            let flyer = {
              name: image.name,
              url: url,
              added: new Date(),
            };
            db.collection("flyer").add(flyer);
            setUrl(url);
          });
      }
    );
  };

  console.log(image, url);

  return (
    <div className="col text-center mt-4">
      <h1 className="text-primary mb-4">Flyer Upload</h1>
      <progress value={progress} max="100" />
      <br />

      <input
        type="file"
        onChange={onChangeUpload}
        className="btn btn-success btn-lg mr-4"
      />
      <button onClick={handleUpload} className="btn btn-success btn-lg">
        Submit
      </button>

      <div className="my-4">
        <img
          src={url || "http://via.placeholder.com/300x200"}
          alt="Uploaded flyer"
          height="200"
          width="300"
        />
      </div>
    </div>
  );
};

export default FlyerUpload;
