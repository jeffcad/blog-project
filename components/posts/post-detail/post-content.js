import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function PostContent(props) {
  const { slug, title, content, image } = props.post

  const imagePath = `/images/posts/${slug}/${image}`
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       // image.src below is not the props.image, it's the parameter
    //       src={`/images/posts/${slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              // image.src below is not the props.image, it's the parameter
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { className, children } = code
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter
          style={vs}
          language={language}
          children={children}
        />
      )
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent