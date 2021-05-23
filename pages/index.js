import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'next/head'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Jeff's NextJS Blog</title>
        <meta name="description" content="Using this to learn about NextJS" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1800
  }
}

export default HomePage