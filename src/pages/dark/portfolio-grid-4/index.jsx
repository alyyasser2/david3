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
import GridFourCols from '@/components/Portfolio/ClassicGrid/4Col';


function PortfolioClassicGrid3() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Classic Grid 4."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Classic Grid 4 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <GridFourCols />
      </main>
      <Footer subBg />
    </>
  )
}

PortfolioClassicGrid3.getLayout = page => <Layout>{page}</Layout>

export default PortfolioClassicGrid3;