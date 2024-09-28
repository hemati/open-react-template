import Head from 'next/head';
const style = {
    termsContainer: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        lineHeight: '1.6',
        fontSize: '16px',
        fontFamily: '"Open Sans", sans-serif',
    }, heading: {
        marginTop: '2em', marginBottom: '0.5em',
    }, link: {
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
        marginTop: '2em', marginBottom: '0.5em',
    };

    const linkStyle = {
        color: '#0066cc',
    };

    return (<>
            <Head>
                <title>Privacy Policy - Appcoholic.com</title>
                <meta name="description" content="Read the privacy policy for using Appcoholic apps."/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
        <div style={termsStyle}>
            <h1 style={headingStyle}>Privacy Policy</h1>
            <p>Last updated: 25th Aug 2024</p>

            <Section title="Introduction">
                <p>Welcome to Appcoholic.com. We are committed to protecting your privacy.
                    This privacy policy explains our data practices and the choices you can make about the way
                    your information is used at our website and apps.</p>
            </Section>

            <Section title="1. Data Collection and Use">
                <p>We collect and use personal data to enhance your experience with our services. The data we collect includes:</p>
                <ul>
                    <li>**Firebase Firestore**: We use Firestore to store data relevant to our app's functionality. This may include user-generated content and preferences.</li>
                    <li>**Google Analytics**: We use Google Analytics to collect information about how you use our website and apps. This includes information about your device, browsing actions, and usage patterns.</li>
                    <li>**ChatGPT API**: Our virtual assistant uses the ChatGPT API to answer questions about the Quran. The interactions are processed by the API.</li>
                </ul>
                <p>We ensure that any data collected is used in compliance with applicable privacy laws and regulations.</p>
            </Section>

            <Section title="2. Data Sharing">
                <p>We do not share your personal data with third parties except as described in this policy:</p>
                <ul>
                    <li>**Service Providers**: We may share data with third-party service providers that perform services on our behalf, such as data analysis and customer support.</li>
                    <li>**Legal Requirements**: We may disclose your data if required by law or in response to valid requests by public authorities.</li>
                </ul>
            </Section>

            <Section title="3. Data Security">
                <p>We take appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </Section>

            <Section title="4. Links To External Sites">
                <p>Our Service may contain links to external sites that are not operated by us.
                    If you click on a third party link, you will be directed to that third party's site.
                    We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.
                </p>
                <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of
                    any third party sites, products or services.</p>
            </Section>

            <Section title="5. Changes To This Privacy Policy">
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </Section>

            <Section title="6. Contact Us">
                <p>If you have any questions about this Privacy Policy, please contact us at support@appcoholic.com.</p>
            </Section>
        </div>
    </>);
}

