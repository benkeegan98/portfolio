import { useEffect } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import { Social, Landing, About, Skills, Work, FeaturedProjects, OtherProjects, Footer, Nav } from '../components'

const StyledMainContainer = styled.main`
  padding: 200px 150px 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`

export default function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <Head>
        <title>Ben Keegan</title>
        <meta name="description" content="Ben Keegan Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main">
        <Nav />
        <Social />
        <StyledMainContainer id="content">
          <Landing />
          <About />
          <Skills />
          <Work />
          <FeaturedProjects />
          <OtherProjects />
          <Footer />
        </StyledMainContainer>
      </main>
    </>
  )
}
