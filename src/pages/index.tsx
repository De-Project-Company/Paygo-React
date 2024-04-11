import clsx from 'clsx';

import Header from '../components/header/header';

import commonStyles from '../styles/common.module.css';
import homePageStyles from '../styles/home.module.css';
import SvgIcon from '../components/svg-icon/svg-icon';
import { ISvgIconNameTypes } from '../types/svg-icon-type';
import Footer from '../components/footer/footer';

interface IDataProps {
  icon: ISvgIconNameTypes;
  title: string;
  description: string;
}

const features: IDataProps[] = [
  {
    title: 'Easy Invoice Creation',
    description:
      'Invoicing has never been so simple. With our easy-to-use interface and powerful features, you can create and manage invoices with ease',
    icon: 'create',
  },
  {
    title: 'Real-time updates',
    description:
      "With real-time updates, you'll always have the most up- to - date information at your fingertips.You'll be able to track payments manage client information, and view invoice statuses instantly",
    icon: 'notification',
  },
  {
    title: 'Customizable Templates',
    description:
      'With Invoice Suite, you can create beautiful invoices that showcase your unique brand personality. Make a lasting impression with every invoice you send',
    icon: 'customize',
  },
];

const benefits = [
  {
    title: '30% Reduction in Late Payments:',
    description:
      'Enjoy consistent cash flow and say goodbye to chasing invoices.',
  },
  {
    title: '50% More Time Focus',
    description:
      'Automate tasks, eliminate administrative burdens, and reclaim precious hours.',
  },
  {
    title: 'Increased Customer Satisfaction',
    description:
      'Automate tasks, eliminate administrative burdens, and reclaim precious hours.',
  },
];

const howItWorks: IDataProps[] = [
  {
    icon: 'template',
    title: 'Choose a Template',
    description: 'Select from a variety of beautifully designed templates',
  },
  {
    icon: 'customize',
    title: 'Customize Details',
    description:
      'Easily add your business logo, item descriptions, and payment terms.',
  },
  {
    icon: 'download',
    title: 'Send or Download Invoice',
    description: 'Send invoices directly to clients or download for offline ',
  },
];

const Home = () => {
  return (
    <>
      <Header />
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

      <section
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

      <section
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
          >
            <img src="/assets/testimony-2-avatar.png" alt="" />
            <SvgIcon name="arrow-left" />
          </button>
          <div className={homePageStyles.testimonyCard}>
            <div>
              <img src="/assets/testimony-1-avatar.png" alt="" />
            </div>

            <div>
              <div className={homePageStyles.testimonyQuoteMark}>
                <SvgIcon name="quote" />
              </div>
              <p>
                PayGO has truly transformed our invoicing process. The
                simplicity and efficiency have saved us valuable time and
                improved our cash flow.
              </p>

              <div>
                <p>
                  <strong>Bisi Oge</strong>
                </p>

                <p>Founder XYZ Company</p>
              </div>
            </div>
          </div>
          <button
            className={homePageStyles.testimonyPaginationButton}
            aria-label="next"
          >
            <img src="/assets/testimony-3-avatar.png" alt="" />
            <SvgIcon name="arrow-right" />
          </button>
        </div>

        <div className={homePageStyles.mobilePagination}>
          <button>
            <SvgIcon name="arrow-left" />
          </button>
          <button>
            <SvgIcon name="arrow-right" />
          </button>
        </div>
      </section>

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
              homePageStyles.secondary
            )}
          >
            <div>
              <h3>Free Plan</h3>
              <p>Free</p>
              <p>Ideal for Startups and freelancers</p>
            </div>

            <button>Get Started</button>
          </div>

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
          </div>
        </div>
      </section>

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

      <section
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
