import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/DigitalAgency/Header';
import Services from '@/components/DigitalAgency/Services';
import Block from '@/components/DigitalAgency/Block';
import Portfolio from '@/components/DigitalAgency/Portfolio';
import Price from '@/components/DigitalAgency/Price';
import ServicesTab from '@/components/DigitalAgency/ServicesTab';
import Clients from '@/components/DigitalAgency/Clients';
import Testimonials from '@/components/DigitalAgency/Testimonials';
import Approach from '@/components/DigitalAgency/Approach';
import CallToAction from '@/components/DigitalAgency/CallToAction';
import Blog from '@/components/DigitalAgency/Blog';
import Footer from '@/components/DigitalAgency/Footer';

function HomeDigitalAgencyLight() {
  useEffect(() => {
    document.body.classList.add('home-digital', 'main-bg');
    return () => document.body.classList.remove('home-digital', 'main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Digital Agency</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar mainBg lightMode />
      <Header lightMode />
      <main className="position-re">
        <Services lightMode />
        <Block lightMode />
        <Portfolio />
        <Price />
        <ServicesTab lightMode />
        <Clients lightMode />
        <Testimonials />
        <Approach />
        <CallToAction lightMode />
        <Blog />
      </main>
      <Footer lightMode />
    </>
  )
}

HomeDigitalAgencyLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default HomeDigitalAgencyLight;