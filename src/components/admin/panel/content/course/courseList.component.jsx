import React, { Component } from 'react';

import {
  ToggleButton,
  Expand,
  Edit,
  Delete,
  GoTo,
} from '../../../../../styled-components/admin.styled-components';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      category: '',
      title: '',
      date: null,
      description: '',
      short_description: '',
      slug: '',
      audio_file_url: '',
      liID: '',
      editTo: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onDeletePodcast = this.onDeletePodcast.bind(this);
    this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
  }

  componentDidMount() {
    const type = this.props.type.toLowerCase();
    const title = this.props.title
      .toLowerCase()
      .split(' ')
      .join('-');
    const editTo = `/edit/${type}/${title}`;

    // const date = date;

    const dateFormatted = this.parseDate(this.props.date);
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
    const formattedDate =			`${months[dateFormatted.getMonth()]
    } ${
      dateFormatted.getDate()
    } ${
      dateFormatted.getFullYear()}`;

    const short_desc = this.props.description.split('\n');

    this.setState({
      type: this.props.type,
      category: this.props.category,
      title: this.props.title,
      date: formattedDate,
      description: this.props.description,
      short_description: short_desc[0],
      slug: this.props.slug,
      audio_file_url: this.props.path,
      liID: this.props.liID,
      editTo,
    });
  }

  async onDeletePodcast() {
    let podcast = await this.getPodcastBySlug();
    podcast = podcast[0];
    // await fetch(
    //   `http://localhost:5000/podcasts/delete/audio/${podcast.cover._id}`,
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
    // await fetch(
    //   `http://localhost:5000/podcasts/delete/cover/${podcast.audio_file._id}`,
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
    await fetch(`http://localhost:5000/podcasts/delete/${podcast.id}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getPodcastBySlug() {
    const response = await fetch(
      `http://localhost:5000/podcasts/get/${this.state.slug}`,
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
    const data = await response.json();
    return data;
  }


  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]); // months are 0-based
  }

  render() {
    return (
      <li style={{ margin: '0px 15px 6px 0px' }}>
        <ToggleButton
          type="button"
          data-toggle="collapse"
          data-target={`#${this.props.liID}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="row">
            <div className="col-10">
              <b
                style={{
								  color: '#999',
								  marginBottom: '0px',
								  float: 'left',
								  fontSize: '12px',
								  lineHeight: '24px',
                }}
              >
                {`${this.state.type} > ${this.state.category}`}

              </b>
              <br />
              <h5
                style={{
								  color: '#0058e4',
								  marginBottom: '0px',
								  float: 'left',
                }}
              >
                {this.state.title}
              </h5>
              <br />
              <span
                style={{
								  color: '#999',
								  fontSize: '14px',
								  float: 'left',
                }}
              >
                {this.state.date}
              </span>
            </div>
            <div className="col-2">
              <Expand to={`/admin/course/${this.state.path}`}>
                <i className="fas fa-sort-down" />
              </Expand>
            </div>
          </div>
        </ToggleButton>
        <div
          className="collapse"
          id={this.state.liID}
          style={{ padding: '10px 10px 40px 10px' }}
        >
          <div
            style={{ color: '#999' }}
            dangerouslySetInnerHTML={{ __html: this.state.short_description }}
          />
          <Delete onClick={this.onDeletePodcast}>Delete</Delete>
          <Edit to={this.state.editTo}>Edit</Edit>
          <GoTo to={`/podcast/${this.state.slug}`}>Podcast Page</GoTo>
        </div>
      </li>
    );
  }
}
