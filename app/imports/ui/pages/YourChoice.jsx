import React from 'react';
import TopMenu from '../components/TopMenu';
import PageImage from '../components/PageImage';
import BottomImage from '../components/BottomImage';
import Footer from '../components/Footer';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <PageImage/>
          <BottomImage/>
          <Footer/>
        </div>
    );
  }
}