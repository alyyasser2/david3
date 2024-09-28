import React from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import ParallaxSlider from '@/components/Showcases/ParallaxSlider';


function ShowcaseParallaxSliderLight() {
  return (
    <>
      <Head>
        <title>Geekfolio - Parallax Slider</title>
      </Head>

      <Loader />
      <Navigation lightMode />
      <Menu lightMode />
      <main>
        <ParallaxSlider />
      </main>
    </>
  )
}

ShowcaseParallaxSliderLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default ShowcaseParallaxSliderLight;