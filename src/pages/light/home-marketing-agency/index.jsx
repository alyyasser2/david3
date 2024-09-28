import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
//= Layout
import Layout from '@/layouts/default';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/MarketingAgency/Header';
import Marq from '@/components/MarketingAgency/Marq';
import About from '@/components/MarketingAgency/About';
import Clients from '@/components/MarketingAgency/Clients';
import SideImage from '@/components/MarketingAgency/SideImage';
import Services from '@/components/MarketingAgency/Services';
import Portfolio from '@/components/MarketingAgency/Portfolio';
import Intro from '@/components/MarketingAgency/Intro';
import Testimonials from '@/components/MarketingAgency/Testimonials';
import Blog from '@/components/MarketingAgency/Blog';
import CallToAction from '@/components/MarketingAgency/CallToAction';
import Marq2 from '@/components/MarketingAgency/Marq2';
import Footer from '@/components/MarketingAgency/Footer';

function HomeMarketingAgencyLight() {
  useEffect(() => {
    document.body.classList.add('digital-marketing', 'sub-bg');
    customScript();
    return () => document.body.classList.remove('digital-marketing', 'sub-bg');
  }, []);

  return (
    <ParallaxProvider>
      <Head>
        <title>Geekfolio - Marketing Agency</title>
      </Head>

      <Loader />
      <Navbar noStatic subBg lightMode />
      <main className="main-bg">
        <Header lightMode />
        <Marq />
        <About lightMode />
        <Clients lightMode />
        <SideImage />
        <Services lightMode />
        <Portfolio />
        <Intro />
        <Testimonials lightMode />
        <Blog />
        <CallToAction lightMode />
        <Marq2 />
      </main>
      <Footer lightMode />
    </ParallaxProvider>
  )
}

HomeMarketingAgencyLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default HomeMarketingAgencyLight;