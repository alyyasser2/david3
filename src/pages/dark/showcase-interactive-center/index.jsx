import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/showcases';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import InteractiveCenter from '@/components/Showcases/InteractiveCenter';


function ShowcaseInteractiveCenter() {
  useEffect(() => {
    document.body.classList.add('main-bg', 'inter-center');
    return () => document.body.classList.remove('main-bg', 'inter-center');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Interactive</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <InteractiveCenter />
      </main>
    </>
  )
}

ShowcaseInteractiveCenter.getLayout = page => <Layout>{page}</Layout>

export default ShowcaseInteractiveCenter;