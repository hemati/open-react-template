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
                <p>Last updated: March 2026</p>

                <Section title="Introduction">
                    <p>Welcome to Appcoholic.com. This privacy policy applies to the CraftCommand app.
                        We are committed to protecting your privacy and explain below what data we collect and how we use it.</p>
                </Section>

                <Section title="1. Data Collection and Use">
                    <p>CraftCommand does not collect or store any personal data. The app operates without user accounts and does not require any personal information to function.</p>
                    <p>Our website (appcoholic.com) uses Google Analytics 4 with Consent Mode v2 for anonymous usage analytics. No data is collected until you give consent via the cookie banner.</p>
                </Section>

                <Section title="2. Contact">
                    <p>If you have questions about this policy, contact us at <a href="mailto:support@appcoholic.com" style={linkStyle}>support@appcoholic.com</a>.</p>
                </Section>
            </div>
        </>);
}
