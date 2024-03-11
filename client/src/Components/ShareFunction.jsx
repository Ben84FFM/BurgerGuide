import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => (
  <div style={{ display: 'flex', gap: '5px' }}>
    <FacebookShareButton url={url} quote={title}>
      <FacebookIcon size={24} round />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={24} round />
    </TwitterShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={24} round />
    </WhatsappShareButton>
  </div>
);

export default ShareButtons;