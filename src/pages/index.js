import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMastodon,
  FaTelegram,
  FaDev,
} from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import Education from '../components/education'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    const {
      siteTitle: title,
      siteCover,
      authorAvatar,
      keywords,
      social,
      authorDescription,
      skills,
      education,
    } = siteConfig

    return (
      <Layout location={this.props.location}>
        <SEO title={title} keywords={keywords} />

        <Hero heroImg={siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src={authorAvatar}
                  alt="user avatar"
                />
                <div className="social">
                  {social.devto && (
                    <a
                      className="social-link devto"
                      href={social.devto}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaDev className="social-icon" size="32" />
                    </a>
                  )}
                  {social.github && (
                    <a
                      className="social-link github"
                      href={social.github}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {social.mastodon && (
                    <a
                      className="social-link mastodon"
                      href={social.mastodon}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaMastodon className="social-icon" size="32" />
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={social.linkedin}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {social.telegram && (
                    <a
                      className="social-link telegram"
                      href={social.telegram}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaTelegram className="social-icon" size="32" />
                    </a>
                  )}
                  {social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${social.email}`}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10} sm={10}>
                <About title="Story" text={authorDescription} />
              </Col>
            </Row>
            <Separator />
            <Row>
              <Col xs={4} sm={4}>
                <Education title="Education" degrees={education} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title="Core Skills" skills={skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Repositories />
            <Separator />
            <Row>
              <Col xs={3} sm={3}>
                <p className="follow-up">
                  Psst. Want to work with me? Send me a{' '}
                  <a href={social.telegram}>message</a>.
                </p>
              </Col>
              <Col xs={5} sm={5}>
                <p className="copyright">
                  &copy; Niko Heikkilä
                  <br />
                  Made with ❤ and Gatsby
                </p>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  p.follow-up {
    font-style: italic;
  }

  p.copyright {
    text-align: right;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
