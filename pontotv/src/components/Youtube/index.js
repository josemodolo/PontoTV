import React from "react";
import PropTypes from "prop-types";
import './style.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vo116l0xprQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
