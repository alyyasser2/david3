import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Shop/Header';
import List from '@/components/Shop/List';
import Footer from '@/components/Startup/Footer';

function ShopList() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "SHOPPING",
    title: "List."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Shop List</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <List />
          </main>
          <Footer subBg />
        </div>
      </div>
    </>
  )
}

ShopList.getLayout = page => <Layout>{page}</Layout>

export default ShopList;