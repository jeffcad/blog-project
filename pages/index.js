import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS = [
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites easy!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites easy!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs-2',
  },
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites easy!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs-3',
  },
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites easy!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs-4',
  }
]

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default HomePage