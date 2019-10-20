import React, { Component } from "react";

import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "../services/api";

// import GlobalStyle from "./styles/global";
// import { Container, Content } from "./styles";

import Upload from "../components/UI/admin/UploadField.component";
import FileList from "../components/UI/admin/FileList.component";

import {
  Input,
  TextArea,
  Button
} from "../styled-components/forms.styled-components";

export default class UploadNewPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      slug: "",
      category: "",
      title: "",
      description: "",
      tags: "",
      isSlugValid: true,
      uploaded: null,
      uploadedFiles: []
    };
    this.verifySlug = this.verifySlug.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }

  async verifySlug(slug) {
    let response = await fetch(
      // `https://course-backend.herokuapp.com/podcasts/get/${}`,
      `http://localhost:5000/podcasts/validation/slug/${slug}`,
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    let data = await response.json();
    return data;
  }

  async uploadPodcast(podcast) {
    let response = await fetch(
      // `https://course-backend.herokuapp.com/podcasts/get/${}`,
      "http://localhost:5000/podcasts/upload",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(podcast)
      }
    );
    let data = await response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async onChangeTitle(e) {
    this.setStateAsync({
      title: e.target.value
    });
    setTimeout(() => {
      this.changeSlugFromTitle(this.state.title);
    }, 0);
  }

  async changeSlugFromTitle() {
    let slug = this.state.title
      .toLowerCase()
      .split(" ")
      .join("-");
    await this.setStateAsync({ slug });
  }

  async onChangeCategory(e) {
    this.setStateAsync({
      category: e.target.value
    });
  }

  async onChangeDescription(e) {
    this.setStateAsync({
      description: e.target.value
    });
  }

  async onChangeTags(e) {
    this.setStateAsync({
      tags: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const podcast_info = {
      isSlugValid: this.state.isSlugValid,
      category: this.state.category,
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags,
      audio_file: this.state.uploadedFiles[0].id
    };
    console.log("podcast_info:", podcast_info);
    console.log("uploadedFiles:", this.state.uploadedFiles[0].id);
    let isSlugValidRes = await this.verifySlug(this.state.slug);
    console.log("isSlugValidRes:", isSlugValidRes);
    if (isSlugValidRes.valid) {
      let res = await this.uploadPodcast(podcast_info);
      this.setStateAsync({
        uploaded: res.uploaded
      });
      console.log(res);
    } else {
      console.log("Slug is invalid");
    }
  }

  async componentDidUpdate() {
    if (this.state.uploaded) {
      console.log("Podcast Uploaded");
    }
  }

  async componentDidMount() {
    const response = await api.get("/podcasts/audio");

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("/podcasts/upload/audio", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`/podcasts/delete/audio/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { uploadedFiles } = this.state;
    return (
      <React.Fragment>
        <div className="container" style={{ margin: "35px auto" }}>
          <div className="row">
            <div className="col-12">
              <h6
                className="text-center"
                style={{ fontSize: "14px", color: "#999", fontWeight: "900" }}
              >
                UPLOAD NEW PODCAST
              </h6>
            </div>
          </div>
          <form onSubmit={this.onSubmit} method="POST">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: "3px" }}
              >
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingLeft: "3px" }}
              >
                <Input
                  type="text"
                  id="Slug"
                  name="slug"
                  placeholder="Slug"
                  value={this.state.slug}
                  // onChange={this.onChangeTitle}
                  disabled
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: "3px" }}
              >
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={this.state.category}
                  onChange={this.onChangeCategory}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingLeft: "3px" }}
              >
                <Input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Tags"
                  value={this.state.tags}
                  onChange={this.onChangeTags}
                  required
                />
              </div>
              <div className="col-12">
                <TextArea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  required
                />
              </div>
              <div className="col-12">
                {/* <UploadField /> */}
                <div>
                  <Upload onUpload={this.handleUpload} />
                  {!!uploadedFiles.length && (
                    <FileList
                      files={uploadedFiles}
                      onDelete={this.handleDelete}
                    />
                  )}
                </div>
              </div>
              <div className="col-12">
                <Button>Upload</Button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
