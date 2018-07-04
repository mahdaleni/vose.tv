import React from 'react';
import PropTypes from 'prop-types';
import objstr from 'obj-str';
import { Subscribe } from 'unstated';
import StateContainer from '../state-container';
import VideoItem from '../video-item';
import Link from '../link';
import './styles.css';

// States:
//  - With videos
//  - No filtered videos
//  - Empty
//  - Loading
const VideoList = ({ videos, currentVideoIndex, changeVideo }) => (
  <Subscribe to={[StateContainer]}>
    {({ state, changeVideo }) => (
      <div
        className={objstr({
          'video-list': true,
          'video-list--preview': !state.videos,
        })}
      >
        {state.videos ? (
          state.videos.length ? (
            <ul className="list">
              {state.videos.map((video, i) => (
                <VideoItem
                  title={video.title}
                  thumbnail={video.thumbnail}
                  isSelected={state.currentVideoIndex === i}
                  isWatched={!!state.watchedVideos[video.id]}
                  onClick={() => changeVideo(i)}
                  key={video.id}
                  index={i}
                />
              ))}
            </ul>
          ) : (
            <div className="message">
              <p>No videos to show...</p>
              <button>Clear all filters</button>
            </div>
          )
        ) : (
          <ul className="list">
            {[...Array(32)].map((_, i) => (
              <li className="video-item" key={i}>
                <div className="video-item__thumb" />
                <div className="video-item__title" />
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
  </Subscribe>
);

export default VideoList;