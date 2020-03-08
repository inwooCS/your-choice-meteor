import React from 'react';
import { Header } from 'semantic-ui-react';

/*
 * This is the BottomImage class that implements the next big picture.
 * Same as the previous implementation.
 */
export default class BottomImage extends React.Component {
  render() {
    return (
        <Header
            as='h1'
            inverted
            style={{
              height: '465px',
              width: '100%',
              flex: 1,
              // eslint-disable-next-line max-len
              backgroundImage: `url(${'https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/hc8/h9c/9293892648990/HH-True-Wireless-A-3840x1400-desktop-v2.jpg'})`,
              backgroundSize: 'contain',
              fontWeight: 'normal',
              marginTop: '1px',
              paddingTop: 50,
              marginBottom: '50px',
              color: '#999999',
              textAlign: 'Center',
              marginLeft: 0,
              marginRight: 0,
              fontSize: '36px',
            }}
        >
          True Audio Freedom
          <p style={{ fontSize: 14, color: 'white', marginTop: 5 }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Razer Hammerhead True Wireless Earbuds >
          </p>
        </Header>
    );
  }
}
