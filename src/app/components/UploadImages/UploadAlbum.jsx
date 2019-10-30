import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Input, Button, Icon } from "semantic-ui-react";
import Dropzoneinput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import { addPosts } from "../../../actions/posts/postAction";
import ProgressBar from './ProgressBar/ProgressBar'




const UploadPostModal = ({
  user,
  addPosts
}) => {
  const [description, setDescription] = useState("");
  
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [percentage, setPercentage] = useState(0)

  const checkValidFile = () => {
    if (description === "" || files.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const onChange = (e, name) => {
    name(e.target.value);
  };

  const toggleEmojiPicker = () => {
    setEmojiPicker(!emojiPicker);
  };

  const closeModals = () => {
    setFiles([]);
    setImage(null);
    setEmojiPicker(false)
  };

  const upload = async () => {
    const body = {
      user: user.uid,
      description
    };
    addPosts(files, body, setPercentage);
    closeModals();
  };
  

  return (
    <Fragment>
      <Input
        value={description}
        onChange={e => onChange(e, setDescription)}
      />
      <ProgressBar percentage={percentage}/>
      <h2>Select an Image</h2>
      <Dropzoneinput setFiles={setFiles} />
      {files.length > 0 &&
        files.map((file, index) => (
          <CropperInput
            key={index}
            files={files}
            index={index}
            setImage={setImage}
            setFiles={setFiles}
            file={file}
          />
        ))}

      <Button.Group>
        <Button
          color="green"
          disabled={checkValidFile()}
          inverted
          onClick={() => upload()}
        >
          <Icon name="upload" />
          Upload
        </Button>
        <Button color="red" inverted onClick={() => closeModals()}>
          <Icon name="remove" />
          Cancel
        </Button>
        <Button color="red" inverted>
          <Icon name="upload" />
          Upload
        </Button>
      </Button.Group>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { addPosts }
)(UploadPostModal);
