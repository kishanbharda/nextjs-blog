import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I have been involved in the development of Native Cross-Platform Mobile application for the last 2 years and have done many android/ios applications with the help of technology like
        </p>
        <ul>
          <li>#React-Native</li>
          <li>#Ionic</li>
          <li>#Redux</li>
          <li>#Facebook/Twitter/Google+/Instagram API and Auth</li>
          <li>#GraphQL</li>
          <li>#Firebase</li>
          <li>#Shopify</li>
        </ul>
        
        <p>Client satisfaction is my topmost priority.</p>

        <p>
          I believe in bug-free code and clean work of art that anyone can understand, as we know, good things take time.
        </p>

        <p>
          In free time I likes to answering the questions on <a href="https://stackoverflow.com/">Stackoverflow</a>. 
        </p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}