import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Corporate/Header';
import Services from '@/components/Corporate/Services';
import About from '@/components/Corporate/About';
import Marq from '@/components/Corporate/Marq';
import Portfolio from '@/components/Corporate/Portfolio';
import Numbers from '@/components/Corporate/Numbers';
import Testimonials from '@/components/Corporate/Testimonials';
import Block from '@/components/Corporate/Block';
import Pricing from '@/components/Corporate/Pricing';
import Blog from '@/components/Corporate/Blog';
import Footer from '@/components/Corporate/Footer';

function HomeCorporateLight() {
  useEffect(() => {
    document.body.classList.add('home-corp', 'main-bg');
    return () => document.body.classList.remove('home-corp', 'main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Corporate</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar lightMode />
      <main className="main-bg">
        <Header />
        <Services lightMode />
        <About lightMode />
        <Marq />
        <Portfolio />
        <Numbers />
        <Testimonials lightMode />
        <Block lightMode />
        <Pricing />
        <Blog />
      </main>
      <Footer lightMode />
    </>
  )
}

HomeCorporateLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default HomeCorporateLight;