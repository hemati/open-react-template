import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Honey Blast Privacy Policy - Appcoholic.com',
  description: 'Privacy policy for the Honey Blast puzzle game by Appcoholic.',
};

const CONTACT_EMAIL = 'support@appcoholic.com';
const CONTROLLER = ['Dr. Abdul Wahed Hemati (Appcoholic)', 'Frankfurt am Main, Germany'];

const style = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    fontSize: '16px',
    fontFamily: '"Open Sans", sans-serif',
  },
  title: {
    marginTop: '2em',
    marginBottom: '0.5em',
    fontSize: '2em',
    fontWeight: 700,
  },
  heading: {
    marginTop: '2em',
    marginBottom: '0.5em',
    fontSize: '1.3em',
    fontWeight: 600,
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '1.5em',
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

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a style={style.link} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default function HoneyBlastPrivacy() {
  return (
    <div style={style.container}>
      <h1 style={style.title}>Honey Blast Privacy Policy</h1>
      <p>Last updated: 11 November 2026</p>

      <p>
        This policy explains which personal data is processed when you use the Android game{' '}
        <strong>Honey Blast</strong> (package <code>com.appcoholic.honeyblast</code>), why, and what choices you have.
      </p>

      <Section title="1. Who is responsible">
        <p>
          {CONTROLLER.map((line) => (
            <React.Fragment key={line}>
              {line}
              <br />
            </React.Fragment>
          ))}
          Postal address: see the{' '}
          <a style={style.link} href="/imprint">
            Imprint
          </a>
          <br />
          E-mail:{' '}
          <a style={style.link} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </Section>

      <Section title="2. Summary">
        <ul style={style.list}>
          <li>Honey Blast needs no account and no sign-in, and it has no in-app purchases.</li>
          <li>
            Your game progress (scores, best score, statistics and settings) is stored only on your device. We do not
            run servers that receive it.
          </li>
          <li>
            The game is free and financed by banner ads. Google AdMob and its mediation partners deliver these ads and
            process device data for that purpose, as described below.
          </li>
          <li>
            In the EEA, the United Kingdom and Switzerland, ads use your personal data for personalisation only if you
            agree. You can change your choice at any time in the game.
          </li>
        </ul>
      </Section>

      <Section title="3. Data that stays on your device">
        <p>
          The game stores its state on your device: the current board, scores, best score, the number of games played,
          theme, sound and vibration settings, and whether a banner has already been shown in the current game. To
          decide when a banner may appear, the game also reads the installation date of the app and the device&apos;s
          memory figures from Android. This information is evaluated on the device and is not sent to us. It is deleted
          when you clear the app data or uninstall the app.
        </p>
      </Section>

      <Section title="4. Advertising (Google AdMob and mediation partners)">
        <p>
          During a round, Honey Blast shows a banner ad at the bottom of the screen. Ads are requested through{' '}
          <strong>Google AdMob</strong> (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). AdMob
          runs an auction in which the following partners can bid for the ad space and, if they win, deliver the ad:
        </p>
        <ul style={style.list}>
          <li>
            <strong>Meta Audience Network</strong> (Meta Platforms Ireland Limited) –{' '}
            <ExternalLink href="https://www.facebook.com/privacy/policy/">privacy policy</ExternalLink>
          </li>
          <li>
            <strong>Unity Ads</strong> (Unity Technologies) –{' '}
            <ExternalLink href="https://unity.com/legal/game-player-and-app-user-privacy-policy">
              privacy policy
            </ExternalLink>
          </li>
        </ul>
        <p>
          For this, the ad SDKs in the app collect and transmit to these providers in particular: the advertising ID of
          your device (where available), IP address and an approximate location derived from it, device and operating
          system information (model, Android version, language, screen size), information about the app, your consent
          choice, and interactions with ads (impressions, clicks). The providers use this data to deliver, limit the
          frequency of and measure ads, to prevent fraud and, if you have agreed, to personalise ads. They may act as
          independent controllers for parts of this processing. See also{' '}
          <ExternalLink href="https://policies.google.com/technologies/partner-sites">
            how Google uses information from apps that use its services
          </ExternalLink>{' '}
          and the{' '}
          <ExternalLink href="https://policies.google.com/privacy">Google privacy policy</ExternalLink>.
        </p>
        <p>
          <strong>Legal basis:</strong> Where you are asked for consent, storing and reading information on your device
          and personalised advertising are based on your consent (Art. 6(1)(a) GDPR, § 25(1) TDDDG). Without consent,
          only non-personalised or limited ads are shown as far as the providers support this; this serves our
          legitimate interest in financing the free game (Art. 6(1)(f) GDPR).
        </p>
      </Section>

      <Section title="5. Consent and privacy settings">
        <p>
          Consent is collected with Google&apos;s User Messaging Platform, which implements the IAB Transparency &amp;
          Consent Framework. In the EEA, the United Kingdom and Switzerland the consent form appears when you first
          start the game. Where U.S. state privacy laws apply, you can opt out of the sale or sharing of your personal
          data. In both cases you can change or withdraw your choice at any time via <strong>Settings → Privacy
          settings</strong> in the game. A withdrawal does not affect the lawfulness of processing before it.
        </p>
        <p>
          You can also reset or delete your advertising ID in the Android settings (Google → Ads, or Security &amp;
          privacy → Privacy → Ads, depending on the device).
        </p>
      </Section>

      <Section title="6. App configuration (Firebase Remote Config)">
        <p>
          The game loads configuration values, for example when and for whom banners are shown, from{' '}
          <strong>Firebase Remote Config</strong>, a service of Google. For this, a Firebase installation ID, the app
          version, the device language and country, and the IP address are transmitted to Google. We use this to
          operate and adjust the game without an app update (Art. 6(1)(f) GDPR; storing the installation ID on the
          device is strictly necessary for this service, § 25(2) No. 2 TDDDG). More information:{' '}
          <ExternalLink href="https://firebase.google.com/support/privacy">Privacy and Security in Firebase</ExternalLink>.
        </p>
      </Section>

      <Section title="7. Google Play">
        <p>
          The app is distributed through Google Play. Google processes data in connection with downloads, updates and,
          if you allow it in your device settings, crash and usage statistics, under its own responsibility. We receive
          only aggregated, non-identifying reports from Google Play.
        </p>
      </Section>

      <Section title="8. Device permissions">
        <ul style={style.list}>
          <li>
            <strong>Internet and network state</strong>: to load ads and the app configuration.
          </li>
          <li>
            <strong>Advertising ID</strong> (<code>AD_ID</code>): used by the ad SDKs as described in section 4.
          </li>
          <li>
            <strong>Vibration</strong>: for haptic feedback; you can turn it off in the game settings.
          </li>
        </ul>
      </Section>

      <Section title="9. Transfers outside the EU">
        <p>
          Google, Meta and Unity may process data in the United States and other countries. Where this happens, the
          providers rely on the EU–U.S. Data Privacy Framework or on the European Commission&apos;s Standard
          Contractual Clauses.
        </p>
      </Section>

      <Section title="10. Retention">
        <p>
          Data on your device is kept until you clear the app data or uninstall the app. The providers named above keep
          data according to their own privacy policies.
        </p>
      </Section>

      <Section title="11. Children">
        <p>
          Honey Blast is not directed at children under 13, and ads in the game are limited to content suitable for
          teens. If you believe a child has provided personal data, please contact us.
        </p>
      </Section>

      <Section title="12. Your rights">
        <p>
          Under the GDPR you have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction
          of processing (Art. 18), data portability (Art. 20) and objection (Art. 21), and the right to withdraw consent
          at any time (Art. 7(3)). Because we do not store your data on our own servers, requests about advertising data
          are usually best directed to the providers named above; we will help you with this. You also have the right
          to lodge a complaint with a data protection supervisory authority, for example the Hessian Commissioner for
          Data Protection and Freedom of Information (
          <ExternalLink href="https://datenschutz.hessen.de">datenschutz.hessen.de</ExternalLink>).
        </p>
      </Section>

      <Section title="13. Changes to this policy">
        <p>
          We may update this policy when the app or the services it uses change. The current version is always
          available on this page.
        </p>
      </Section>

      <Section title="14. Contact">
        <p>
          Questions about this policy or your data:{' '}
          <a style={style.link} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </Section>
    </div>
  );
}
