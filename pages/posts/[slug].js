import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-util'

function PostDetailPage(props) {
  return (
    <PostContent post={props.post} />
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