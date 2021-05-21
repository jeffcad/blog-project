import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jeff.jpg"
          alt="Jeff"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Jeff</h1>
      <p>I am making this blog as a demo project while learning NextJS.</p>
    </section>
  )
}

export default Hero