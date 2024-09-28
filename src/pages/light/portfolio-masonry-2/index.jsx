import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';
import Header from '@/components/Portfolio/Header';
import MasonryTwoCols from '@/components/Portfolio/Masonry/2Col';

function PortfolioMasonry2Light() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Masonry 2."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Masonry 2 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Header data={metadata} />
        <MasonryTwoCols />
      </main>
      <Footer subBg lightMode />
    </>
  )
}

PortfolioMasonry2Light.getLayout = page => <Layout lightMode>{page}</Layout>

export default PortfolioMasonry2Light;