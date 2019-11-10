import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMastodon,
  FaTelegram,
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

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
      console.warn(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      )
    }

    const title = siteConfig.siteTitle
    const { keywords } = siteConfig
    return (
      <Layout location={this.props.location}>
        <SEO title={title} keywords={keywords} />

        <Hero heroImg={siteConfig.siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src={siteConfig.authorAvatar}
                  alt="user avatar"
                />
                <div className="social">
                  {siteConfig.social.github && (
                    <a
                      className="social-link github"
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.mastodon && (
                    <a
                      className="social-link mastodon"
                      href={siteConfig.social.mastodon}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaMastodon className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.telegram && (
                    <a
                      className="social-link telegram"
                      href={siteConfig.social.telegram}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <FaTelegram className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${siteConfig.social.email}`}
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
              <Col xs={4} sm={4}>
                <About title="Story" text={siteConfig.authorDescription} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title="Skills" skills={siteConfig.skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Repositories />
            <Row>
              <Col xs={12} sm={12}>
                <p className="follow-up">
                  Want to work with me? Send me a{' '}
                  <a href={siteConfig.social.telegram}>message</a>.
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
    text-align: center;
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
