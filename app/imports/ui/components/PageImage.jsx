import React from 'react';

import { Header } from 'semantic-ui-react';

/*
 * This is the PageImage class that implements the first big picture.
 * The only way to add a text or an image I could find was making an header
 * and creating the background image in the header.
 */
export default class PageImage extends React.Component {
  render() {
    return (
        <Header
            as='h1'
            inverted
            style={{
              height: '470px',
              width: '100%',
              flex: 1,
              // eslint-disable-next-line max-len
              backgroundImage: `url(${'https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/hd8/h8c/9285102075934/razer-blade-15-GTX-1660-desktop-home-large2x.jpg'})`,
              backgroundSize: 'contain',
              fontWeight: 'normal',
              marginTop: '0px',
              paddingTop: 20,
              marginBottom: '-2px',
              color: '#999999',
              textAlign: 'Center',
            }}
        >
          Ultra Fast. Ultra Small. Ultra
          <p> Powerful.</p>
          <p style={{ fontSize: 14, color: 'white', marginTop: -20 }}>
            Starting from $1499.99
          </p>
          <p style={{ fontSize: 14, color: 'white', marginTop: -10 }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Shop Razer Blade 15 - Base Model >
          </p>
        </Header>
    );
  }
}
