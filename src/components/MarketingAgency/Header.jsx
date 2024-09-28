import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-main-crev sub-bg">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption">
              <h1 className="fz-80">Digital marketing <br /> the new way.</h1>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center">
            <div>
              <div className="text">
                <p>We take a similar approach to design commercial we do impactfully approches over the flowchart of user friendly wireframe.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 valign">
            <div className="md-hide">
              <Link href="/dark/page-about" className="hover-this">
                <div className="circle-button in-bord hover-anim">
                  <div className="rotate-circle fz-30 text-u">
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                        </path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle" textLength="900">Explore More - Explore More -</textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="arrow">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="img">
              <img src="/dark/assets/imgs/background/19.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header