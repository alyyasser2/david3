import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/showcases';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import Carousel from '@/components/Showcases/Carousel';


function ShowcaseCarouselLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Carousel</title>
      </Head>

      <Loader />
      <Navigation alwaysDark />
      <Menu lightMode />
      <main>
        <Carousel lightMode />
      </main>
    </>
  )
}

ShowcaseCarouselLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default ShowcaseCarouselLight;