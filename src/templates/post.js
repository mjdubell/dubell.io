import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import UserInfo from '../components/UserInfo'
import PostTags from '../components/PostTags'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    const date = formatDate(post.date)
    const githubLink = editOnGithub(post)
    const twitterUrl = `https://twitter.com/search?q=${config.siteUrl}/${post.slug}/`
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
      config.siteUrl
    }/${post.slug}/&via=dubs3c`

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header className="single-header no-thumbnail">
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>/
                <a className="twitter-link" href={twitterShare}>
                  Share
                </a>
                /
                <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">
                  Edit on Github <span role="img" aria-label="Edit">✏️</span>
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>
          <div className="post" dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div>
            {' '}
            <a className="button twitter-button" href={twitterShare} target="_blank" rel="noopener noreferrer">
              Share
            </a>{' '}
            <a className="button twitter-button" href={twitterUrl} target="_blank" rel="noopener noreferrer">
              Discuss
            </a>
          </div>
        </article>
        <UserInfo config={config} />
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        date
        categories
        tags
        template
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`