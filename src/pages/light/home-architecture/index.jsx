import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Architecture/Header';
import BgPattern from '@/components/Architecture/BgPattern';
import Intro from '@/components/Architecture/Intro';
import Clients from '@/components/Architecture/Clients';
import Services from '@/components/Architecture/Services';
import Portfolio from '@/components/Architecture/Portfolio';
import About from '@/components/Architecture/About';
import SectionImage from '@/components/Architecture/SectionImage';
import Testimonials from '@/components/Architecture/Testimonials';
import Blog from '@/components/Architecture/Blog';
import Footer from '@/components/Architecture/Footer';

function HomeArchitecture() {
  useEffect(() => {
    document.body.classList.add('home-arch', 'main-bg');
    return () => document.body.classList.remove('home-arch', 'main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Architecture</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main className="position-re">
        <Header />
        <div className="block-pattern">
          <BgPattern />
          <Intro />
          <Clients lightMode />
          <Services lightMode />
        </div>
        <Portfolio />
        <About />
        <SectionImage />
        <Testimonials lightMode />
        <Blog />
      </main>
      <Footer lightMode />
    </>
  )
}

HomeArchitecture.getLayout = page => <Layout lightMode>{page}</Layout>

export default HomeArchitecture;