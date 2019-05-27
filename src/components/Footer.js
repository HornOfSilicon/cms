import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/icon.png'
import github from '../img/github-icon.svg'
import twitter from '../img/social/twitter.svg'
import slack from '../img/social/slack.svg'
import email from '../img/social/email.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="mailto:accounts@hornofsilicon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              </div>
              <div className="column is-4 social">
                <a title="Github" href="https://github.com/hornofsilicon">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/hornofsilicon">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="slack" href="https://hornofsilicon.slack.com">
                  <img
                    className="fas fa-lg"
                    src={slack}
                    alt="slack"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="email" href="mailto:accounts@hornofsilicon.com">
                  <img
                    className="fas fa-lg"
                    src={email}
                    alt="email us"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
