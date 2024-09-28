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
import GridTwoCols from '@/components/Portfolio/ClassicGrid/2Col';


function PortfolioClassicGrid2Light() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Classic Grid 2."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Classic Grid 2 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Header data={metadata} />
        <GridTwoCols />
      </main>
      <Footer subBg lightMode />
    </>
  )
}

PortfolioClassicGrid2Light.getLayout = page => <Layout lightMode>{page}</Layout>

export default PortfolioClassicGrid2Light;