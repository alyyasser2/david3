import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Contact/Header';
import Form from '@/components/InnerPages/Contact/Form';
import Footer from '@/components/Freelancer/Footer';


function PageContactLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Contact Us</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Header />
        <Form />
      </main>
      <Footer lightMode />
    </>
  )
}

PageContactLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default PageContactLight;