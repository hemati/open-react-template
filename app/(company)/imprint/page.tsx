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
                <meta name="description" content="Read the imprint for Appcoholic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <div style={termsStyle}>
                <h1 style={headingStyle}>Imprint</h1>

                <Section title="Angaben gem. &sect; 5 DDG">
                    <p>Dr. Wahed Hemati<br/>
                        Radilostrase 35<br/>
                        60489 Frankfurt am Main<br/>
                        Deutschland</p>
                </Section>

                <Section title="Kontakt">
                    <p>E-Mail: support@appcoholic.com</p>
                </Section>

                <Section title="Umsatzsteuer-ID">
                    <p>Umsatzsteuer-Identifikationsnummer gem. &sect; 27a Umsatzsteuergesetz:<br/>
                        DE454994696</p>
                </Section>

                <Section title="Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV">
                    <p>Dr. Wahed Hemati<br/>
                        Radilostrase 35<br/>
                        60489 Frankfurt am Main</p>
                </Section>

                <Section title="Verbraucherstreitbeilegung">
                    <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </Section>

                <Section title="Haftungsausschluss">
                    <h3 style={headingStyle}>Haftung f&uuml;r Inhalte</h3>
                    <p>Die Inhalte dieser Website wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte kann ich jedoch keine Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter bin ich gem. &sect; 7 Abs. 1 DDG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>

                    <h3 style={headingStyle}>Haftung f&uuml;r Links</h3>
                    <p>Diese Website enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>

                    <h3 style={headingStyle}>KI-generierte Inhalte</h3>
                    <p>Diese Plattform nutzt k&uuml;nstliche Intelligenz zur Generierung von Antworten auf App-Bewertungen. Die KI-generierten Inhalte basieren auf den vom Nutzer bereitgestellten Informationen. Ich &uuml;bernehme keine Gew&auml;hr f&uuml;r die Richtigkeit oder Eignung der KI-generierten Antworten. Der Nutzer ist selbst verantwortlich f&uuml;r die &Uuml;berpr&uuml;fung und Ver&ouml;ffentlichung der erstellten Inhalte.</p>
                </Section>

                <p style={{marginTop: '2em', color: '#666'}}>Stand: M&auml;rz 2026</p>
            </div>
        </>);
}
