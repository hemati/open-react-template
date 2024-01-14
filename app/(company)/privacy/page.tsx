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

const Section = ({title, children}) => (<>
        <h2 style={style.heading}>{title}</h2>
        {children}
    </>);
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
                <p>Last updated: 17th Nov. 2023</p>

                <Section title="Introduction">
                    <p>Welcome to Appcoholic.com. We are committed to protecting your privacy.
                        This privacy policy explains our data practices and the choices you can make about the way
                        your information is used at our website and apps.</p>
                </Section>

                <Section title="1. Data Collection and Use">
                    <p>We do not collect or store any personal data about our users. Our Website and Apps (CraftCommand)
                        operates without any data storage, and we have no servers that retain user information.
                        There is no collection, use, sharing, or storage of personal or non-personal data from our
                        users.</p>
                </Section>
            </div>
        </>);
}
