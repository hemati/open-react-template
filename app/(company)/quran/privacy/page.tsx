import Head from 'next/head';
import React from 'react';

const style = {
  termsContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    fontSize: '16px',
    fontFamily: '"Open Sans", sans-serif',
  },
  heading: {
    marginTop: '2em',
    marginBottom: '0.5em',
  },
  link: {
    color: '#0066cc',
  },
};

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <>
    <h2 style={style.heading}>{title}</h2>
    {children}
  </>
);

export default function Privacy() {
  const termsStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    fontSize: '16px',
    fontFamily: '"Open Sans", sans-serif',
  };

  const headingStyle = {
    marginTop: '2em',
    marginBottom: '0.5em',
  };

  const linkStyle = {
    color: '#0066cc',
  };

  return (
    <>
      <Head>
        <title>Privacy Policy - Appcoholic.com</title>
        <meta
          name="description"
          content="Read the privacy policy for using Appcoholic apps."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={termsStyle}>
        <h1 style={headingStyle}>Privacy Policy</h1>
        <p>Last updated: 28 Aug 2025</p>

        <Section title="Introduction">
          <p>
            Welcome to Appcoholic.com. We are committed to protecting your
            privacy. This privacy policy explains our data practices and the
            choices you can make about how your information is used across our
            website and apps.
          </p>
        </Section>

        <Section title="1. Data Collection and Use">
          <p>
            We collect and use personal and usage data to provide and improve
            our services, ensure security, and support our business model
            (including advertising). The data we collect may include:
          </p>
          <ul>
            <li>
              <strong>Firebase Firestore</strong>: We store data relevant to
              app functionality (e.g., user-generated content, preferences,
              and app state such as daily chat counters or subscription
              status).
            </li>
            <li>
              <strong>Google Analytics / Firebase Analytics</strong>: We
              collect information about how you use our website and apps,
              including device information, events, and usage patterns.
            </li>
            <li>
              <strong>ChatGPT API</strong>: Our virtual assistant processes
              your prompts to provide Quran-related responses. Interactions you
              submit are transmitted to the API for processing.
            </li>
            <li>
              <strong>Advertising SDKs (e.g., Google AdMob)</strong>: For
              showing ads, including rewarded ads, we and our partners may
              collect or access device information such as advertising IDs
              (e.g., AAID/IDFA where available), app instance IDs, coarse
              location, approximate IP-based location, and engagement signals
              (e.g., ad impressions, views, clicks, completion of rewarded
              videos). This helps deliver, measure, and improve ads and prevent
              fraud.
            </li>
          </ul>
          <p>
            We process this data based on your consent where required and our
            legitimate interests in operating, analyzing, and improving our
            services.
          </p>
        </Section>

        <Section title="2. Advertising and Rewarded Ads">
          <p>
            Our apps may display ads, including <strong>rewarded ads</strong>.
            If you choose to watch a rewarded ad (e.g., to reset your daily
            chat limit), you will receive an in-app benefit once the ad is
            completed. Whether you receive a reward depends on successful ad
            completion as reported by the ad provider.
          </p>
          <p>
            Ads may be <strong>personalized</strong> (based on your activity)
            or <strong>non-personalized</strong>. Where required by law (e.g.,
            in the EEA/UK), we ask for your consent to use personal data for
            personalized ads. You can change your ad consent or choose
            non-personalized ads in the app’s privacy or settings screen (if
            available) or via your device settings as described below.
          </p>
        </Section>

        <Section title="3. Data Sharing">
          <p>We do not sell your personal data. We share data only as follows:</p>
          <ul>
            <li>
              <strong>Service Providers</strong>: We share data with third
              parties that perform services on our behalf (e.g., analytics,
              hosting, customer support).
            </li>
            <li>
              <strong>Advertising Partners</strong>: We integrate SDKs from ad
              partners (e.g., Google AdMob) to serve and measure ads, prevent
              fraud/abuse, and provide rewarded functionality. These partners
              may act as independent controllers for certain processing. Please
              review their privacy policies for details.
            </li>
            <li>
              <strong>Legal Requirements</strong>: We may disclose data if
              required by law or to protect rights, safety, and integrity of
              our users and services.
            </li>
          </ul>
        </Section>

        <Section title="4. Your Choices & Controls">
          <ul>
            <li>
              <strong>Personalized vs. Non-Personalized Ads</strong>: In
              regions requiring consent, we will request your choice. You can
              update it in-app (if available) or via your device’s ad settings.
            </li>
            <li>
              <strong>Device Ad Identifiers</strong>: You can reset or limit
              ad tracking in your device settings (e.g., “Reset advertising ID”
              on Android, “Limit Ad Tracking/Allow Apps to Request to Track” on
              iOS).
            </li>
            <li>
              <strong>Account & Subscription</strong>: You can upgrade to a
              subscription to remove ads where applicable.
            </li>
            <li>
              <strong>Access/Deletion</strong>: Contact us to exercise rights
              of access, deletion, or objection where applicable by law.
            </li>
          </ul>
        </Section>

        <Section title="5. Data Security">
          <p>
            We use appropriate technical and organizational measures to protect
            your data. However, no method of transmission or storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="6. International Data Transfers">
          <p>
            We may process and store information in countries outside your own.
            Where required, we use appropriate safeguards (e.g., Standard
            Contractual Clauses) to protect your data during such transfers.
          </p>
        </Section>

        <Section title="7. Children’s Privacy">
          <p>
            Our services are not directed to children under the age required by
            applicable law (e.g., under 13 in the U.S.). We do not knowingly
            collect personal data from children without appropriate parental
            consent. If you believe a child has provided us data, please
            contact us to request deletion.
          </p>
        </Section>

        <Section title="8. Links To External Sites">
          <p>
            Our Service may contain links to external sites not operated by us.
            We strongly advise you to review the privacy policy and terms of
            every site you visit. We are not responsible for the content or
            practices of third-party sites, products, or services.
          </p>
        </Section>

        <Section title="9. Data Retention">
          <p>
            We retain personal data only for as long as necessary to fulfill
            the purposes outlined in this policy (including legal, accounting,
            or reporting requirements). Analytics and advertising data may be
            retained by our partners according to their policies.
          </p>
        </Section>

        <Section title="10. Changes To This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. We will post
            the new Privacy Policy on this page. Please review it periodically.
            Changes are effective when posted.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your rights, contact us at{' '}
            <a style={linkStyle} href="mailto:support@appcoholic.com">
              support@appcoholic.com
            </a>.
          </p>
        </Section>
      </div>
    </>
  );
}
