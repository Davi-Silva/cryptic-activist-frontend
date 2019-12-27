import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,

  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
} from 'react-share';

import {
  Ul,
} from '../../../styled-components/share-buttons.styled-components';

const ShareButtons = (props) => {
  const {
    path,
  } = props;
  const title = 'Check out this post\n';
  return (
    <>
      <Ul>
        <li>
          <FacebookShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <FacebookIcon
              size={32}
              round
            />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <LinkedinIcon
              size={32}
              round
            />
          </LinkedinShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={path}
            title={title}
            via="Cryptic Activist"
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <TwitterIcon
              size={32}
              round
            />
          </TwitterShareButton>
        </li>
        <li>
          <RedditShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <RedditIcon
              size={32}
              round
            />
          </RedditShareButton>
        </li>
        <li>
          <WhatsappShareButton
            url={path}
            quote={title}
            separator="-"
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <WhatsappIcon
              size={32}
              round
            />
          </WhatsappShareButton>
        </li>
        <li>
          <TelegramShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <TelegramIcon
              size={32}
              round
            />
          </TelegramShareButton>
        </li>
      </Ul>
    </>
  );
};

ShareButtons.propTypes = {
  path: PropTypes.string.isRequired,
};


export default ShareButtons;