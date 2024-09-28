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

function HomeDigitalAgency() {
  useEffect(() => {
    document.body.classList.add('home-digital', 'sub-bg');
    return () => document.body.classList.remove('home-digital', 'sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Digital Agency</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar mainBg />
      <Header />
      <main className="position-re">
        <Services />
        <Block />
        <Portfolio />
        <Price />
        <ServicesTab />
        <Clients />
        <Testimonials />
        <Approach />
        <CallToAction />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

HomeDigitalAgency.getLayout = page => <Layout>{page}</Layout>

export default HomeDigitalAgency;