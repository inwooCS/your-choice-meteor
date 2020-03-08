import React from 'react';
import { Container, Menu, Dropdown, Image, Icon } from 'semantic-ui-react';

/*
 * This is the TopMenu class that implements the TopMenu.
 * Almost the same syntax as semantic ui.
 */
export default class TopMenu extends React.Component {
  render() {
    // eslint-disable-next-line no-undef
    document.body.classList.add('gray-background');
    const itemStyle = { border: 'none', box: 'none' };
    const itemColor = { color: 'gray' };
    return (
        <Menu style={itemStyle} borderless attached>
          <Container>
            <Image
                src="https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/h6c/he1/8858452525086/wordmark.svg"
                alt="razer img" size="tiny"/>

            <Dropdown /* item */ text="PRODUCTS" icon="none" simple item className="razer-logo-text">
              <Dropdown.Menu>
                <Dropdown.Item>Laptops</Dropdown.Item>
                <Dropdown.Item>Mice</Dropdown.Item>
                <Dropdown.Item>Mats</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown /* item */ text="SOFTWARE" icon="none" simple item>
              <Dropdown.Menu>
                <Dropdown.Item>Cortex Game Booster</Dropdown.Item>
                <Dropdown.Item>Synapse 3 IOT Drivers (beta)</Dropdown.Item>
                <Dropdown.Item>Chroma RGB</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown /* item */ text="COMMUNITY" icon="none" simple item>
              <Dropdown.Menu>
                <Dropdown.Item>Get Started</Dropdown.Item>
                <Dropdown.Item>Insider</Dropdown.Item>
                <Dropdown.Item>Esports</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown /* item */ text="STORE" icon="none" simple item>
              <Dropdown.Menu>
                <Dropdown.Item>RazerStore (Online)</Dropdown.Item>
                <Dropdown.Item>Razer Gift Card</Dropdown.Item>
                <Dropdown.Item>Razer Gold</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <a href="https://support.razer.com/?_ga=2.1962673.1058936434.1550553406-81137462.1550553406">
                SUPPORT</a>
            </Menu.Item>

            <Menu.Item position="right"><Icon name="large grey search"/></Menu.Item>
            <Menu.Item><Icon name="large grey shopping cart"/></Menu.Item>
            <Menu.Item fitted style={itemColor}>US</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
