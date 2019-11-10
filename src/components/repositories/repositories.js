import React from 'react'
import jsonFetch from 'simple-json-fetch'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import Loader from '../loader'

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=public&sort=updated&per_page=50&page=1`

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading',
    }
  }
  async componentDidMount() {
    let repos

    try {
      repos = await jsonFetch(endpoint)
    } catch (err) {
      console.error(`Unable to load repositories. Reason: ${err}`)
    }

    if (repos.json && repos.json.length > 0) {
      this.setState({ repos: repos.json, status: 'ready' })
    }
  }
  render() {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Selected Works</h2>
        {status === 'loading' && (
          <div className="repositories-loader">
            <Loader />
          </div>
        )}
        {status === 'ready' && this.state.repos && (
          <React.Fragment>
            <div className="repositories-content">
              {this.state.repos
                .filter(repo => !repo.fork && repo.stargazers_count > 0)
                .sort(
                  (repo1, repo2) =>
                    repo2.stargazers_count - repo1.stargazers_count
                )
                .map(repo => (
                  <React.Fragment key={repo.name}>
                    <div className="repositories-repo">
                      <a
                        className="repositories-repo-link"
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </a>
                      <div>{repo.description}</div>
                      <div className="repositories-repo-date">
                        Last Updated:{' '}
                        {new Date(repo.updated_at).toLocaleString(['en', 'fi'])}
                      </div>
                      <div className="repo-stargazers">
                        <span role="img" aria-label="stars">
                          ⭐
                        </span>{' '}
                        {repo.stargazers_count}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories-content {
    margin-bottom: 40px;
  }

  .repositories-repo {
    position: relative;
    padding-bottom: 30px;
  }

  .repositories-repo-link {
    font-weight: 700;
    text-decoration: none;
    color: #25303b;
  }

  .repositories-repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repo-stargazers {
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 700;
  }

  .repositories-loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
