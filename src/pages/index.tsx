import clsx from 'clsx';

import Header from '../components/header/header';
import SvgIcon from '../components/svg-icon/svg-icon';
import Footer from '../components/footer/footer';

import commonStyles from '../styles/common.module.css';
import homePageStyles from '../styles/home.module.css';
import { benefits, features, howItWorks, testimonialData } from '../data/home-page-data';
import { useState } from 'react';
import { ITestimonialTypes } from '../types/home-page-data-types';


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeTestimonial: ITestimonialTypes = testimonialData[activeIndex];

  // get next and previous button background image 
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : testimonialData.length - 1;
  const nextIndex = activeIndex < testimonialData.length - 1 ? activeIndex + 1 : 0;
  const prevItem = testimonialData[prevIndex];
  const nextItem = testimonialData[nextIndex];

  const handlePagination = (page: number) => {
    let newIndex = page;

    if (newIndex < 0) {
      newIndex = testimonialData.length - 1;
    } else if (newIndex >= testimonialData.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  return (
    <>
      <Header />
      {/* hero section  */}
      <section className={homePageStyles.heroSection}>
        <img
          src="/assets/hero-bg.png"
          alt=""
          className={homePageStyles.heroBg}
        />
        <div
          className={clsx(
            commonStyles.fullBleed,
            homePageStyles.heroSubContainer
          )}
        >
          <div className={homePageStyles.heroTextContainer}>
            <h1 className={homePageStyles.headText}>
              Manage Payments & Boost Customer Retention with PayGo
            </h1>
            <p>
              Manage Clients, Track Payments, Get Insights: All in one simple
              app
            </p>
            <a
              href="#"
              className={clsx(
                commonStyles.btn,
                commonStyles.secondary,
                homePageStyles.heroBtn
              )}
            >
              Get Started
            </a>
          </div>

          <div className={homePageStyles.heroImagesContainer}>
            <img src="/assets/hero-image-1.png" alt="" />

            <img
              src="/assets/hero-gradient.png"
              alt=""
              className={homePageStyles.overlayImageBg}
            />
          </div>
        </div>
      </section>

      {/* core features section  */}
      <section
        id='features'
        className={clsx(
          commonStyles.fullBleed,
          homePageStyles.coreFeaturesSection
        )}
      >
        <h2 className={homePageStyles.sectionHeaderText}>Our core features</h2>
        <p>Streamline payment, automate invoices, and delight customers.</p>

        <div className={homePageStyles.coreFeaturesFlex}>
          {features.map((feature) => (
            <div key={feature.title} className={homePageStyles.coreFeatureCard}>
              <div className={homePageStyles.coreFeatureIconContainer}>
                <SvgIcon name={feature.icon} />
              </div>

              <p className="">{feature.title}</p>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* benefits section  */}
      <section
        className={clsx(commonStyles.fullBleed, homePageStyles.benefitsSection)}
      >
        <div className={homePageStyles.benefitsSectionImageContainer}>
          <img src="/assets/benefits-bg.png" alt="" className="bg" />
          <div>
            <img src="/assets/benefits-image.png" alt="" />
          </div>
        </div>

        <div className={homePageStyles.benefitsTextContainer}>
          <p className={homePageStyles.benefitsSubHeader}>
            Unleash Your Business Potential
          </p>
          <h3 className={homePageStyles.sectionHeaderText}>
            Reap the Rewards of <span>PayGo</span>
          </h3>

          <ul className={homePageStyles.benefitsList}>
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <p>{benefit.title}</p>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* how it works section  */}
      <section
        id='how-it-works'
        className={clsx(
          commonStyles.fullBleed,
          homePageStyles.sectionPadding,
          homePageStyles.howItWorksSection
        )}
      >
        <span className={homePageStyles.blurredBg} />
        <div>
          <h3 className={homePageStyles.sectionHeaderText}>
            How PayGo Suite works
          </h3>
          <p>A new way to manage your invoices with ease</p>

          <div className={homePageStyles.howItWorksData}>
            {howItWorks.map((data, index) => (
              <div key={index}>
                <p>STEP {index + 1}</p>
                <div className={homePageStyles.howItWorksSvgContainer}>
                  <SvgIcon name={data.icon} />
                </div>

                <div className={homePageStyles.howItWorksTextContainer}>
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials section  */}
      <section
        className={clsx(
          commonStyles.fullBleed,
          homePageStyles.sectionPadding,
          homePageStyles.testimonialSection
        )}
      >
        <div className={homePageStyles.testimonialEclipseImg}>
          <img src="/assets/eclipse.png" alt="" />
        </div>

        <h3 className={homePageStyles.sectionHeaderText}>
          Client Testimonials
        </h3>
        <p>Here's what our users have to say about Invoice Suite</p>

        <div className={homePageStyles.testimoniesFlexContainer}>
          <button
            className={homePageStyles.testimonyPaginationButton}
            aria-label="previous"
            onClick={() => handlePagination(activeIndex - 1)}
          >
            <img src={prevItem.image} alt="" />
            <SvgIcon name="arrow-left" />
          </button>
          <div className={homePageStyles.testimonyCard}>
            <div>
              <img src={activeTestimonial.image} alt="" />
            </div>

            <div>
              <div className={homePageStyles.testimonyQuoteMark}>
                <SvgIcon name="quote" />
              </div>
              <p>{activeTestimonial.testimony} </p>

              <div>
                <p>
                  <strong>{activeTestimonial.name}</strong>
                </p>

                <p>{activeTestimonial.companyAndRole}</p>
              </div>
            </div>
          </div>
          <button
            className={homePageStyles.testimonyPaginationButton}
            aria-label="next"
            onClick={() => handlePagination(activeIndex + 1)}
          >
            <img src={nextItem.image} alt="" />
            <SvgIcon name="arrow-right" />
          </button>
        </div>

        <div className={homePageStyles.mobilePagination}>
          <button
            aria-label="previous"
            onClick={() => handlePagination(activeIndex - 1)}
          >
            <SvgIcon name="arrow-left" />
          </button>
          <button
            aria-label="next"
            onClick={() => handlePagination(activeIndex + 1)}
          >
            <SvgIcon name="arrow-right" />
          </button>
        </div>
      </section>

      {/* pricing section  */}
      <section
        className={clsx(
          commonStyles.fullBleed,
          homePageStyles.sectionPadding,
          homePageStyles.pricingSection
        )}
      >
        <h3 className={homePageStyles.sectionHeaderText}>Pricing Plans</h3>
        <p>Choose the plan that's right for you. </p>

        <div className={homePageStyles.pricingFlexContainer}>
          <div
            className={clsx(
              homePageStyles.pricingCard,
              // homePageStyles.secondary
            )}
          >
            <div>
              <h3>Free Plan</h3>
              <p>Free</p>
              <p>Ideal for Startups and freelancers</p>
            </div>

            <button>Get Started</button>
          </div>
          {/*
          <div className={homePageStyles.pricingCard}>
            <div>
              <h3>Pro Plan</h3>
              <p>₦2,500/month</p>
              <p>Ideal for Startups and freelancers</p>
            </div>

            <button>Get Started</button>
          </div>

          <div className={homePageStyles.pricingCard}>
            <div>
              <h3>Business Plan</h3>
              <p>₦5,500/month</p>
              <p>Ideal for Startups and freelancers</p>
            </div>

            <button>Get Started</button>
          </div> */}
        </div>
      </section>

      {/* free trial banner section  */}
      <section
        className={clsx(
          homePageStyles.sectionPadding,
          homePageStyles.automatedInvoicingSection
        )}
      >
        <div className={commonStyles.fullBleed}>
          <div>
            <img src="/assets/automated-section-image.png" alt="" />
          </div>

          <div>
            <p>Automate Your Invoicing Process Today!</p>
            <p>
              Join the ranks of successful businesses using PayGo. Start your
              free trial now and experience the difference.
            </p>

            <button className={clsx(commonStyles.btn, commonStyles.secondary)}>
              Start Your Free Trial
            </button>
          </div>

          <div className={homePageStyles.automatedSectionBgContainer}>
            <img src="/assets/bottom-ring.png" alt="" />
            <img src="/assets/bottom-ring.png" alt="" />
          </div>
        </div>
      </section>

      {/* contact section  */}
      <section
        id='contact-us'
        className={clsx(
          commonStyles.fullBleed,
          homePageStyles.sectionPadding,
          homePageStyles.contactSection
        )}
      >
        <div>
          <h3>Contact Us</h3>
          <p>
            Have questions or need assistance? Our support team is here to help
          </p>
          <a href="#" className={commonStyles.btn}>
            Contact Us
          </a>
        </div>

        <div className={homePageStyles.contactSectionImageContainer}>
          <img src="/assets/benefits-bg.png" alt="" className="bg" />
          <div>
            <img
              src="/assets/man-calling-on-a-phone.png"
              alt="young man making call and smiling"
            />
          </div>
        </div>

        <div></div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
