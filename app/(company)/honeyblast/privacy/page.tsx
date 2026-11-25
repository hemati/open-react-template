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
      <p>Last updated: 25 November 2026</p>

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
            The game is free and financed by ads: a banner during a round, full-screen ads between some games and
            reward videos you can choose to watch for a second chance. Google AdMob and its mediation partners deliver
            these ads and process device data for that purpose, as described below.
          </li>
          <li>
            In the EEA, the United Kingdom and Switzerland, ads use your personal data for personalisation only if you
            agree. You can change your choice at any time in the game.
          </li>
          <li>
            With your consent, we measure how the game is used with Google Analytics for Firebase. Outside the EEA, the
            United Kingdom and Switzerland, we also use these statistics to measure our own ads for the game on Google
            Ads. If the game crashes, a crash report is sent to Firebase Crashlytics so that we can fix the error.
          </li>
          <li>
            Outside the EEA, the United Kingdom and Switzerland, the game records its own screen during the first session
            after installing it (at most three minutes) and sends the recording to PostHog, so that we can see where new
            players get stuck.
          </li>
          <li>
            If you allow notifications, the game reminds you now and then to play. These reminders are planned on your
            device; no data is sent for them.
          </li>
        </ul>
      </Section>

      <Section title="3. Data that stays on your device">
        <p>
          The game stores its state on your device: the current board, scores, best score, the number of games played,
          your adventure progress, theme, sound and vibration settings, how ads and second chances were offered in
          recent games, when the game last asked for a rating and which reminders are planned. To decide when an ad or a
          second chance may appear, the game also reads the installation date of the app, how long you play and the
          device&apos;s memory figures from Android. This information is evaluated on the device and is not sent to us.
          It is deleted when you clear the app data or uninstall the app.
        </p>
      </Section>

      <Section title="4. Advertising (Google AdMob and mediation partners)">
        <p>
          During a round, Honey Blast shows a banner ad at the bottom of the screen. Between some games it shows a
          full-screen ad. When you run out of space, it may offer a second chance in exchange for watching a reward
          video; watching it is up to you. Ads are requested through{' '}
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
          <li>
            <strong>InMobi</strong> (InMobi Pte. Ltd.) –{' '}
            <ExternalLink href="https://advertising.inmobi.com/privacy-policy-for-eea">privacy policy</ExternalLink>
          </li>
          <li>
            <strong>Mintegral</strong> –{' '}
            <ExternalLink href="https://www.mintegral.com/en/privacy">privacy policy</ExternalLink>
          </li>
        </ul>
        <p>
          In addition, ad exchanges that bid through AdMob without their own SDK in the app, such as Index Exchange
          and Magnite, can take part in this auction. They receive the information in the ad request from Google and
          pass it on to their advertisers.
        </p>
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

      <Section title="6. Firebase and PostHog (configuration, usage statistics, crash reports, screen recordings)">
        <p>
          The game uses the following services of Firebase, a platform of Google (Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Ireland).
        </p>
        <p>
          <strong>Remote Config.</strong> The game loads configuration values, for example when and for whom ads and
          second chances are shown, from{' '}
          <strong>Firebase Remote Config</strong>, a service of Google. For this, a Firebase installation ID, the app
          version, the device language and country, and the IP address are transmitted to Google. We use this to
          operate and adjust the game without an app update (Art. 6(1)(f) GDPR; storing the installation ID on the
          device is strictly necessary for this service, § 25(2) No. 2 TDDDG). More information:{' '}
          <ExternalLink href="https://firebase.google.com/support/privacy">Privacy and Security in Firebase</ExternalLink>.
        </p>
        <p>
          <strong>Google Analytics for Firebase.</strong> If you agree, the game sends usage statistics to Google: an
          app instance ID, device and operating system information (model, Android version, language, screen size),
          the app version, an approximate location derived from the IP address (country, region), and how the game is
          used (for example first launch, sessions, engagement time, the ads shown and, if you share the game, that
          you shared it and which app you picked for it). We use these statistics to
          understand and improve the game and its advertising. Legal basis is your consent (Art. 6(1)(a) GDPR,
          § 25(1) TDDDG); without it, Analytics stores no identifier and sends no usage statistics that identify you
          (Google consent mode). You can withdraw your consent at any time via <strong>Settings → Privacy
          settings</strong>. Where no consent is required by law, we rely on our legitimate interest in improving the
          game (Art. 6(1)(f) GDPR). Google keeps the event data for 2 months.
        </p>
        <p>
          <strong>Measuring our own ads for the game.</strong> We advertise Honey Blast on Google Ads. Outside the EEA,
          the United Kingdom and Switzerland, Google Analytics for Firebase also passes the usage statistics described
          above, together with your advertising ID, to Google Ads (Google LLC). This lets us see which of our ads lead
          to the game being opened and played (for example the first launch or a finished tutorial), and lets Google
          Ads show ads for the game again to people who have played it before. In U.S. states with privacy laws, this
          data is not used to personalise ads; only the measurement remains. We rely on our legitimate interest in
          advertising the game effectively (Art. 6(1)(f) GDPR, where it applies). You can object at any time by
          deleting your advertising ID or turning off ads personalisation in the Android settings (see section 5). In
          the EEA, the United Kingdom and Switzerland this happens only if you agree in the consent form.
        </p>
        <p>
          <strong>Crashlytics.</strong> If the game crashes, a crash report is sent to Google: the error details (stack
          trace), device model, Android version, app version, free memory and storage, the time of the crash and a
          Crashlytics installation ID. We use these reports only to find and fix errors, based on our legitimate
          interest in a stable game (Art. 6(1)(f) GDPR). Crash reports are deleted after 90 days.
        </p>
        <p>
          <strong>Screen recordings of the first session (PostHog).</strong> To find out where new players get stuck,
          the game records its own screen during the first session after it is installed, for at most three minutes,
          and only outside the EEA, the United Kingdom and Switzerland. The recording consists of pictures of the
          game&apos;s screen (about one per second) and the places on the screen you touch; it does not include other
          apps, notifications or system dialogs, and the game shows no personal data. It is sent to{' '}
          <strong>PostHog</strong> (PostHog Inc.) together with a random recording ID, the device model, the Android
          and app version and the IP address, which PostHog uses only to derive the country and does not store. The
          recordings are stored on PostHog&apos;s servers in the EU and deleted after 30 days. We use them only to
          improve the game, based on our legitimate interest (Art. 6(1)(f) GDPR, where it applies). More information:{' '}
          <ExternalLink href="https://posthog.com/privacy">PostHog privacy policy</ExternalLink>.
        </p>
      </Section>

      <Section title="7. Sharing the game">
        <p>
          In the settings and after a new best score you can share Honey Blast with friends. The game then opens
          Android&apos;s share menu with a short text and a link to our website appcoholic.com. Which app you use and
          whom you send it to is up to you; the game does not learn who receives the message.
        </p>
        <p>
          When someone opens such a link, our website counts the visit: the type of device (iPhone, Android or
          computer), where in the game the link was shared from, and the country that our hosting provider derives from
          the IP address of the request. A tap on &quot;I want it on iPhone&quot; on that page is counted the same way.
          No cookies are set for this, and we neither store the IP address or any device identifier nor pass them on.
          Our server sends the count to Google Analytics (Google Ireland Limited) as an anonymous event with a random
          number that changes with every visit, so the visitor cannot be recognised. Visitors with an Android device are
          then forwarded to Google Play. We use these counts to see whether sharing works and on which devices people
          want the game, based on our legitimate interest (Art. 6(1)(f) GDPR).
        </p>
      </Section>

      <Section title="8. Google Play">
        <p>
          The app is distributed through Google Play. Google processes data in connection with downloads, updates and,
          if you allow it in your device settings, crash and usage statistics, under its own responsibility. We receive
          only aggregated, non-identifying reports from Google Play.
        </p>
        <p>
          After some games with a new best score, the game may show Google Play&apos;s rating card. Your rating and
          review are handled by Google Play; the game does not learn whether or how you rated.
        </p>
        <p>
          The game supports Google Play Games for achievements and a best-score leaderboard. You do not need it to
          play. The game counts your progress on your device; if you have a Play Games profile, or create one when you
          open the achievements or the leaderboard, the game sends your unlocked achievements and your best score to
          Google Play Games at the end of a round. Google links them to your Play Games profile and, depending on your
          Play Games settings, shows your profile name, avatar and score to other players on the leaderboard. Google
          processes this data under its own responsibility (privacy policy: policies.google.com/privacy); we only see
          the leaderboard and aggregated statistics in the Play Console. The legal basis is the performance of the
          function you use (Art. 6(1)(b) GDPR). You can manage or delete your Play Games profile and its data in the
          Google Play Games settings.
        </p>
      </Section>

      <Section title="9. Device permissions">
        <ul style={style.list}>
          <li>
            <strong>Internet and network state</strong>: to load ads and the app configuration and to send usage
            statistics and crash reports.
          </li>
          <li>
            <strong>Advertising ID</strong> (<code>AD_ID</code>): used by the ad SDKs as described in section 4.
          </li>
          <li>
            <strong>Vibration</strong>: for haptic feedback; you can turn it off in the game settings.
          </li>
          <li>
            <strong>Notifications</strong> (<code>POST_NOTIFICATIONS</code>): for local reminders, for example about an
            unfinished round, once a few days after your first games, and for returning players a lunchtime reminder
            that opens the game with a short ad-free break. Android asks you first; you can turn them off at any time
            in the Android settings for the app.
          </li>
          <li>
            <strong>Run at startup</strong> (<code>RECEIVE_BOOT_COMPLETED</code>): to keep planned reminders after the
            device restarts.
          </li>
        </ul>
      </Section>

      <Section title="10. Transfers outside the EU">
        <p>
          Google, Meta, Unity, InMobi, Mintegral, PostHog and the ad exchanges named in section 4 may process data in the
          United States and other countries outside the EU. Where this happens, the providers rely on an adequacy decision of the European Commission, on the
          EU–U.S. Data Privacy Framework or on the European Commission&apos;s Standard Contractual Clauses.
        </p>
      </Section>

      <Section title="11. Retention">
        <p>
          Data on your device is kept until you clear the app data or uninstall the app. The providers named above keep
          data according to their own privacy policies.
        </p>
      </Section>

      <Section title="12. Children">
        <p>
          Honey Blast is not directed at children under 13, and ads in the game are limited to content suitable for
          teens. If you believe a child has provided personal data, please contact us.
        </p>
      </Section>

      <Section title="13. Your rights">
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

      <Section title="14. Changes to this policy">
        <p>
          We may update this policy when the app or the services it uses change. The current version is always
          available on this page.
        </p>
      </Section>

      <Section title="15. Contact">
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
