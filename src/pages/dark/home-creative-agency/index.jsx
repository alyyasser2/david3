import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/CreativeAgency/Header';
import Marq from '@/components/CreativeAgency/Marq';
import Intro from '@/components/CreativeAgency/Intro';
import SectionImage from '@/components/CreativeAgency/SectionImage';
import Services from '@/components/CreativeAgency/Services';
import Portfolio from '@/components/CreativeAgency/Portfolio';
import Testimonials from '@/components/CreativeAgency/Testimonials';
import Team from '@/components/CreativeAgency/Team';
import HzScroll from '@/components/CreativeAgency/HorizontalScroll';
import Blog from '@/components/CreativeAgency/Blog';
import Footer from '@/components/CreativeAgency/Footer';

function HomeCreativeAgency() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Creative Agency</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg position-re">
        <Header />
        <Marq />
        <Intro />
        <SectionImage />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <HzScroll />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

HomeCreativeAgency.getLayout = page => <Layout>{page}</Layout>

export default HomeCreativeAgency;