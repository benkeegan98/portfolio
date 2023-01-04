import Head from 'next/head'
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google'
import { Container, Text, Icon, Image, FadeInContainer, Side, Social } from '../components'
import { BLUE } from '../styles/colors';
import Nav from '../components/Nav';
import styled from 'styled-components';
import Landing from '../components/sections/Landing';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Work from '../components/sections/Work';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import OtherProjects from '../components/sections/OtherProjects';

const inter = Inter({ subsets: ['latin'] })

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
        <StyledMainContainer>
          <Landing />
          <About />
          <Skills />
          <Work />
          <FeaturedProjects />
          <OtherProjects />
        </StyledMainContainer>
      </main>
    </>
  )
}
