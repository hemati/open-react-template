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
                <title>Imprint - Appcoholic.com</title>
                <meta name="description" content="Read the imprint for using Appcoholic apps."/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <div style={termsStyle}>
                <h1 style={headingStyle}>Imprint</h1>

                <Section title="">
                    <p>für die mobile App MindLike und die Webseiten mindlike.ai und mindlike.app sowie sonstige Angebote der MindLike UG, die auf dieses Impressum verweisen.</p>
                </Section>

                <Section title="Anbieterkennzeichnung">
                    <p>MindLike UG (haftungsbeschränkt) <br/>
                        Kurhessenstr. 3 b<br/>
                        D-63075 Offenbach am Main<br/>
                        E-Mail: info@mindlike.ai<br/>
                        Registergericht: Amtsgericht Offenbach am Main<br/>
                        Registernummer: HRB 50940</p>
                </Section>
            </div>
        </>);
}
