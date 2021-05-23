import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import { Fragment } from 'react'
import Head from 'next/head'

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
}

export function getStaticProps(context) {
  const { slug } = context.params
  const postData = getPostData(slug)
  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles()
  const fileSlugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    paths: fileSlugs.map(fileSlug => ({ params: { slug: fileSlug } })),
    fallback: false
  }
}

export default PostDetailPage