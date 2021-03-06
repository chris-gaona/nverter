import React, { Component } from 'react';
import Plyr from 'react-plyr'
import './VideoPlayer.scss';
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
        <Plyr
          type="video"
          title="View From A Blue Moon"
          // poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
          sources={[
            {
              src: `../encoded/${uid}/1545260402584_1080p.mov_Fast 576p25_to_.mp4`,
              type: 'video/mp4',
              size: '576',
            },
            // {
            //   src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
            //   type: 'video/mp4',
            //   size: '720',
            // },
            {
              src: `../encoded/${uid}/1545260402584_1080p.mov_Fast 1080p30_to_.mp4`,
              type: 'video/mp4',
              size: '1080',
            },
            // {
            //   src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
            //   type: 'video/mp4',
            //   size: '1440',
            // },
          ]}
        />
      </div>
    )
  }
}