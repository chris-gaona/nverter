import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react'
import './View.scss';
import Cookie from 'js-cookie';

export default class extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    let uid = Cookie.get('_uid');

    return (
      <div className="video-container">
        <Player
          autoPlay
          poster="/assets/poster.png"
          src={`../encoded/${uid}/${this.props.match.params.filename}`}
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    )
  }
}