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
import CircleSlider from '@/components/Showcases/CircleSlider';


function ShowcaseCircleSliderLight() {
  useEffect(() => {
    customScript();
    showcaseScript.showcase1();
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Circle Slider</title>
      </Head>

      <Loader />
      <Navigation lightMode />
      <Menu lightMode />
      <main>
        <CircleSlider lightMode />
      </main>
    </>
  )
}

ShowcaseCircleSliderLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default ShowcaseCircleSliderLight;