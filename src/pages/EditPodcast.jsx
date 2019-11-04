/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  Wrapper,
  Input,
  TextArea,
  UploadedOn,
  Update,
} from '../styled-components/edit-podcast.styled-components';


export default class EditPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      slug: '',
      title: '',
      description: '',
      category: '',
      audioFile: null,
      cover: null,
      tags: '',
      uploadedOn: '',
      updatedOn: null,
      updated: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const podcast = await this.getPodcastBySlug();
    console.log('edit podcast:', podcast);
    if (podcast.length > 0) {
      const {
        id, slug, title, description, audioFile, cover, category, tags, uploadedOn, updated,
      } = podcast[0];
      const dateFormatted = this.parseDate(uploadedOn);
      const months = [
        'January',
        'February',
        'March',
        'April',
        'may',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const formattedDate = `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
      await this.setStateAsync({
        id,
        slug,
        title,
        category,
        description,
        audioFile,
        cover,
        tags,
        uploadedOn: formattedDate,
        uploaded: false,
      });
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  // async componentDidUpdate() {
  //   const { history } = this.props;
  //   history.push('/404');
  // }


  async onSubmit(e) {
    e.preventDefault();
    const {
      title, category, description, tags, slug,
    } = this.state;
    const { history } = this.props;
    const podcastInfo = {
      category,
      title,
      description,
      tags,
    };

    const res = await this.updatePodcast(podcastInfo);
    console.log('res podcast update:', res);
    history.push(`/podcast/${slug}`);
    if (res.updated) {
      this.setStateAsync({
        uploaded: res.updated,
      });
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async onChangeTitle(e) {
    await this.setStateAsync({
      title: e.target.value,
    });
  }

  async onChangeDescription(e) {
    await this.setStateAsync({
      description: e.target.value,
    });
  }

  async getPodcastBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    this.response = await fetch(
      `http://localhost:5000/podcasts/get/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await this.response.json();
    return data;
  }


  async updatePodcast(podcast) {
    const { id } = this.state;
    this.response = await fetch(
      // `https://course-backend.herokuapp.com/podcasts/get/${}`,
      `http://localhost:5000/podcasts/update/${id}`,
      {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(podcast),
      },
    );
    const data = await this.response.json();
    return data;
  }

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title, description, category, audioFile, cover, tags, uploadedOn,
    } = this.state;
    const coverUrl = cover;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <form onSubmit={this.onSubmit} method="POST">
                <Wrapper>
                  {/* <img
                    src={cover}
                    alt="Cover"
                    style={{ width: '100%' }}
                  /> */}
                  <Update>
                    <i className="fas fa-edit" />
                  </Update>
                  <UploadedOn>
Uploaded on&nbsp;
                    <span style={{ color: '#0058e4' }}>{uploadedOn}</span>
                  </UploadedOn>
                  <Input value={title} style={{ width: '100%' }} onChange={this.onChangeTitle} />
                  <TextArea
                    value={description}
                    style={{
                      textAlign: 'justify',
                      width: '97%',
                      paddingRight: '23px',
                    }}
                    onChange={this.onChangeDescription}
                  />
                  <b>{}</b>
                </Wrapper>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
