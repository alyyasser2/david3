import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Details from '@/components/InnerPages/Blog/Details';
import Footer from '@/components/Startup/Footer';


function BlogDetailsLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Blog Details</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Details />
      </main>
      <Footer lightMode />
    </>
  )
}

BlogDetailsLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default BlogDetailsLight;