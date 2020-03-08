import React from 'react';
import { Icon, List, Grid } from 'semantic-ui-react';

/*
 * This is the Footer class that implements the footer.
 * The implementation is basically the same as semantic ui.
 */
export default class Footer extends React.Component {
  render() {
    const colorStyle = { color: 'white' };
    return (
        <Grid container>
          <Grid.Row columns={6}>
            <Grid.Column>
              <List className="gray">
                <List.Item style={colorStyle}>Our Network</List.Item>
                <List.Item>Razer.com</List.Item>
                <List.Item>Razer Gold & Silver</List.Item>
                <List.Item>Game Pay</List.Item>
                <List.Item>Game Deals</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List className="gray">
                <List.Item style={colorStyle}>Shop</List.Item>
                <List.Item>Razer Store (Online)</List.Item>
                <List.Item>Razer Gift Card</List.Item>
                <List.Item>My Account</List.Item>
                <List.Item>Corporate Program</List.Item>
                <List.Item>Education Program</List.Item>
                <List.Item>RazerStore (Retail)</List.Item>
                <List.Item>Partners and Affiliate</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List className="gray">
                <List.Item style={colorStyle}>Software/Services</List.Item>
                <List.Item>Razer ID</List.Item>
                <List.Item>Synapse 3</List.Item>
                <List.Item>Chroma RGB</List.Item>
                <List.Item>Cortex</List.Item>
                <List.Item>Developer Portal</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List className="gray">
                <List.Item style={colorStyle}>Company</List.Item>
                <List.Item>About Razer</List.Item>
                <List.Item>Press Room</List.Item>
                <List.Item>Investor Relations</List.Item>
                <List.Item>Careers</List.Item>
                <List.Item>zVentures</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List className="gray">
                <List.Item style={colorStyle}>Need Help?</List.Item>
                <List.Item>Support</List.Item>
                <List.Item>Warranty</List.Item>
                <List.Item>Store FAQs</List.Item>
                <List.Item>Self-help Returns</List.Item>
                <List.Item>Contact Us</List.Item>
                <List.Item>Store Locator</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List className="gray">
                <List.Item style={colorStyle}>Connect</List.Item>
                <List.Item>Get Started</List.Item>
                <List.Item>Insider</List.Item>
                <List.Item>Newsletter Sign Up </List.Item>
                <List.Item><Icon name="green facebook f"/>Facebook</List.Item>
                <List.Item><Icon name="green twitter"/>Twitter</List.Item>
                <List.Item><Icon name="green instagram"/>Instagram</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
