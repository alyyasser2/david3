import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Shop/Header';
import Checkout from '@/components/Shop/Checkout';
import Footer from '@/components/Startup/Footer';

function ShopCheckout() {
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
    title: "checkout."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Shop Checkout</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Checkout />
          </main>
          <Footer subBg />
        </div>
      </div>
    </>
  )
}

ShopCheckout.getLayout = page => <Layout>{page}</Layout>

export default ShopCheckout;