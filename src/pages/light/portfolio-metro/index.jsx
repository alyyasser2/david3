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
import Metro from '@/components/Portfolio/Metro';


function PortfolioMetroLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Work Metro."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Metro</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main className="main-bg">
        <Header data={metadata} />
        <Metro />
      </main>
      <Footer subBg lightMode />
    </>
  )
}

PortfolioMetroLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default PortfolioMetroLight;