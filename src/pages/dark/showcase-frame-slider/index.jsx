import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/showcases';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';
import showcaseScript from '@/common/showcase-script';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import FrameSlider from '@/components/Showcases/FrameSlider';


function ShowcaseFrameSlider() {
  useEffect(() => {
    customScript();
    showcaseScript.demo();
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Frame Slider</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <FrameSlider />
      </main>
    </>
  )
}

ShowcaseFrameSlider.getLayout = page => <Layout>{page}</Layout>

export default ShowcaseFrameSlider;