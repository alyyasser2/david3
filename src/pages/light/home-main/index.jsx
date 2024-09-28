import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/HomeMain/Header';
import About from '@/components/HomeMain/About';
import Marq from '@/components/HomeMain/Marq';
import Clients from '@/components/HomeMain/Clients';
import Services from '@/components/HomeMain/Services';
import Works from '@/components/HomeMain/Works';
import ServicesTabs from '@/components/HomeMain/ServicesTabs';
import Testimonials from '@/components/HomeMain/Testimonials';
import Blog from '@/components/HomeMain/Blog';
import Footer from '@/components/HomeMain/Footer';

function HomeMainLight() {
  useEffect(() => {
    document.body.classList.add('home-main-crev', 'main-bg');

    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    // Horizontal Scroll
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
        }
      });
    }
    // Footer Animation
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }

    return () => document.body.classList.remove('home-main-crev', 'main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Main</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic lightMode />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <About />
            <Marq />
            <Clients lightMode />
            <Services lightMode />
            <Works />
            <ServicesTabs lightMode />
            <Testimonials lightMode />
            <Blog />
          </main>
          <Footer lightMode />
        </div>
      </div>
    </>
  )
}

HomeMainLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default HomeMainLight;