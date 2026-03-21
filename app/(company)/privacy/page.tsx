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
                <meta name="description" content="Read the privacy policy for using Appcoholic.com and Appcoholic Platform."/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <div style={termsStyle}>
                <h1 style={headingStyle}>Privacy Policy</h1>
                <p>Last updated: March 2026</p>

                <Section title="Introduction">
                    <p>Welcome to Appcoholic.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting your privacy.
                        This privacy policy explains what data we collect, how we use it, and what choices you have.
                        It applies to our website appcoholic.com, our platform at platform.appcoholic.com, and our mobile apps.</p>
                </Section>

                <Section title="1. Data We Collect">
                    <h3 style={headingStyle}>1.1 Account Data</h3>
                    <p>When you sign up for the Appcoholic Platform via Google OAuth, we receive and store your name, email address, and profile picture from your Google account. We use this to authenticate you and manage your account.</p>

                    <h3 style={headingStyle}>1.2 Google Play Data</h3>
                    <p>When you connect your Google Play Console, we access your app reviews and reply to them on your behalf. We store review data (author name, review text, rating, reply text) in our database to provide the review management service.</p>

                    <h3 style={headingStyle}>1.3 Analytics Data</h3>
                    <p>We use Google Analytics 4 (GA4) with Advanced Consent Mode v2 to understand how visitors use our website and platform. The GA4 tracking script loads on every page, but <strong>no analytics or advertising data is collected until you give consent</strong> via the cookie banner. When you accept cookies, we collect:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li>Pages visited and time spent</li>
                        <li>Device type, browser, operating system, and screen resolution</li>
                        <li>Approximate geographic location (country/city level, not precise)</li>
                        <li>Referral source (how you found us)</li>
                        <li>Interaction events (clicks, scrolls, form submissions)</li>
                    </ul>
                    <p style={{marginTop: '8px'}}>Google Analytics uses cookies and similar technologies. Google may also combine this data with data from other Google services. For details, see <a href="https://policies.google.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</p>

                    <h3 style={headingStyle}>1.4 AI-Generated Content</h3>
                    <p>We use OpenAI to generate suggested replies to your app reviews. Your review text is sent to OpenAI&apos;s API to generate a response. We do not send your personal data (name, email, account information) to OpenAI &mdash; only the review content. OpenAI processes this data under their <a href="https://openai.com/policies/privacy-policy" style={linkStyle} target="_blank" rel="noopener noreferrer">Privacy Policy</a> and does not use API inputs for training.</p>

                    <h3 style={headingStyle}>1.5 Data We Do Not Collect</h3>
                    <p>We do not collect financial or payment information, Social Security numbers, government IDs, precise geolocation, biometric data, or health information.</p>
                </Section>

                <Section title="2. Legal Basis for Processing (GDPR, Art. 6)">
                    <p>We process your personal data based on the following legal grounds:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li><strong>Contract performance (Art. 6(1)(b))</strong> &mdash; Account creation, Google Play review sync, AI reply generation. These are necessary to provide you the service you signed up for.</li>
                        <li><strong>Consent (Art. 6(1)(a))</strong> &mdash; Analytics cookies, advertising cookies, Google Ads conversion tracking. You give consent via the cookie banner and can withdraw it at any time.</li>
                        <li><strong>Legitimate interest (Art. 6(1)(f))</strong> &mdash; Security measures, fraud prevention, and service improvement. Our legitimate interest is to keep the service secure and functional.</li>
                    </ul>
                </Section>

                <Section title="3. How We Use Your Data">
                    <ul style={{paddingLeft: '20px'}}>
                        <li>To provide and improve the Appcoholic Platform</li>
                        <li>To authenticate you and manage your account</li>
                        <li>To sync and display your Google Play reviews</li>
                        <li>To generate AI-powered reply suggestions</li>
                        <li>To analyze website usage and improve our service (only with your consent)</li>
                        <li>To measure advertising effectiveness via Google Ads conversion tracking (only with your consent)</li>
                        <li>To communicate with you about service updates or respond to your inquiries</li>
                    </ul>
                    <p style={{marginTop: '8px'}}><strong>We do not sell, rent, or trade your personal data to third parties.</strong> We do not share your data with data brokers or for purposes unrelated to providing our service.</p>
                </Section>

                <Section title="4. Cookies &amp; Consent">
                    <p>We implement Google Consent Mode v2 (Advanced mode). By default, all tracking is disabled until you interact with the cookie banner.</p>

                    <h3 style={headingStyle}>4.1 When You Accept Cookies</h3>
                    <p>The following consent signals are granted:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li><strong>analytics_storage</strong> &mdash; allows Google Analytics to store cookies for usage measurement</li>
                        <li><strong>ad_storage</strong> &mdash; allows Google Ads to store cookies for conversion tracking</li>
                        <li><strong>ad_user_data</strong> &mdash; allows sending user data to Google for advertising measurement</li>
                        <li><strong>ad_personalization</strong> &mdash; allows personalized advertising</li>
                    </ul>

                    <h3 style={headingStyle}>4.2 When You Decline Cookies</h3>
                    <p>All four consent signals remain &quot;denied&quot;. No analytics or advertising cookies are stored. No data is sent to Google Analytics or Google Ads. The website remains fully functional.</p>

                    <h3 style={headingStyle}>4.3 Changing Your Choice</h3>
                    <p>You can change your cookie preference at any time by clearing your browser cookies and revisiting the site. The cookie banner will appear again. You can also disable cookies in your browser settings.</p>

                    <h3 style={headingStyle}>4.4 Cookies We Use</h3>
                    <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '8px', fontSize: '14px'}}>
                        <thead>
                            <tr style={{borderBottom: '1px solid #ddd', textAlign: 'left'}}>
                                <th style={{padding: '8px'}}>Cookie</th>
                                <th style={{padding: '8px'}}>Provider</th>
                                <th style={{padding: '8px'}}>Purpose</th>
                                <th style={{padding: '8px'}}>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>appcoholic-cookie-consent</td>
                                <td style={{padding: '8px'}}>Appcoholic</td>
                                <td style={{padding: '8px'}}>Stores your cookie consent choice</td>
                                <td style={{padding: '8px'}}>1 year</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>_ga, _ga_*</td>
                                <td style={{padding: '8px'}}>Google</td>
                                <td style={{padding: '8px'}}>Analytics (only with consent)</td>
                                <td style={{padding: '8px'}}>2 years</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>_gcl_*</td>
                                <td style={{padding: '8px'}}>Google</td>
                                <td style={{padding: '8px'}}>Ads conversion tracking (only with consent)</td>
                                <td style={{padding: '8px'}}>90 days</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>x-experiment</td>
                                <td style={{padding: '8px'}}>Appcoholic</td>
                                <td style={{padding: '8px'}}>A/B testing variant assignment</td>
                                <td style={{padding: '8px'}}>30 days</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                <Section title="5. Third-Party Services &amp; Data Sharing">
                    <p>We share data with the following third parties solely to provide and improve our service:</p>
                    <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '8px', fontSize: '14px'}}>
                        <thead>
                            <tr style={{borderBottom: '1px solid #ddd', textAlign: 'left'}}>
                                <th style={{padding: '8px'}}>Service</th>
                                <th style={{padding: '8px'}}>Data Shared</th>
                                <th style={{padding: '8px'}}>Purpose</th>
                                <th style={{padding: '8px'}}>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>Google Analytics 4</td>
                                <td style={{padding: '8px'}}>Usage data (with consent)</td>
                                <td style={{padding: '8px'}}>Website analytics</td>
                                <td style={{padding: '8px'}}>US (Google LLC)</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>Google Ads</td>
                                <td style={{padding: '8px'}}>Conversion events (with consent)</td>
                                <td style={{padding: '8px'}}>Advertising measurement</td>
                                <td style={{padding: '8px'}}>US (Google LLC)</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>Google OAuth</td>
                                <td style={{padding: '8px'}}>Name, email, profile picture</td>
                                <td style={{padding: '8px'}}>Authentication</td>
                                <td style={{padding: '8px'}}>US (Google LLC)</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>Google Play API</td>
                                <td style={{padding: '8px'}}>Review data, OAuth tokens</td>
                                <td style={{padding: '8px'}}>Review sync &amp; reply</td>
                                <td style={{padding: '8px'}}>US (Google LLC)</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>OpenAI API</td>
                                <td style={{padding: '8px'}}>Review text only (no personal data)</td>
                                <td style={{padding: '8px'}}>AI reply generation</td>
                                <td style={{padding: '8px'}}>US (OpenAI LLC)</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #eee'}}>
                                <td style={{padding: '8px'}}>Amazon Web Services</td>
                                <td style={{padding: '8px'}}>All platform data</td>
                                <td style={{padding: '8px'}}>Hosting &amp; database</td>
                                <td style={{padding: '8px'}}>EU (Frankfurt)</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                <Section title="6. International Data Transfers">
                    <p>Your account and review data is stored in the EU (AWS Frankfurt, eu-central-1). However, some third-party services (Google, OpenAI) are based in the United States. Data transfers to the US are protected by:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li>The <strong>EU-U.S. Data Privacy Framework</strong> (for Google LLC and other certified companies)</li>
                        <li><strong>Standard Contractual Clauses (SCCs)</strong> as adopted by the European Commission</li>
                    </ul>
                    <p style={{marginTop: '8px'}}>We only transfer data to the US when necessary to provide the service and ensure appropriate safeguards are in place.</p>
                </Section>

                <Section title="7. Data Storage &amp; Security">
                    <p>We implement appropriate technical and organizational measures to protect your data:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li>All data in transit is encrypted via HTTPS/TLS</li>
                        <li>Database access is restricted by strong passwords and network security</li>
                        <li>Authentication tokens (JWT) expire after 7 days</li>
                        <li>Google Play OAuth tokens are stored encrypted in our database</li>
                        <li>We do not store passwords &mdash; authentication is handled by Google OAuth</li>
                    </ul>
                </Section>

                <Section title="8. Your Rights &mdash; European Union (GDPR)">
                    <p>If you are located in the EU/EEA/UK, you have the following rights under the General Data Protection Regulation (GDPR):</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li><strong>Right of access</strong> (Art. 15) &mdash; obtain a copy of your personal data</li>
                        <li><strong>Right to rectification</strong> (Art. 16) &mdash; correct inaccurate data</li>
                        <li><strong>Right to erasure</strong> (Art. 17) &mdash; request deletion of your data</li>
                        <li><strong>Right to restriction</strong> (Art. 18) &mdash; restrict processing of your data</li>
                        <li><strong>Right to data portability</strong> (Art. 20) &mdash; receive your data in a machine-readable format</li>
                        <li><strong>Right to object</strong> (Art. 21) &mdash; object to processing based on legitimate interest</li>
                        <li><strong>Right to withdraw consent</strong> (Art. 7) &mdash; withdraw consent at any time without affecting the lawfulness of prior processing</li>
                    </ul>
                    <p style={{marginTop: '8px'}}>To exercise any of these rights, email us at <a href="mailto:support@appcoholic.com" style={linkStyle}>support@appcoholic.com</a>. We will respond within 30 days.</p>
                    <p style={{marginTop: '8px'}}>You also have the right to lodge a complaint with your local data protection authority. In Germany, this is the <em>Hessischer Beauftragter f&uuml;r Datenschutz und Informationsfreiheit</em> (HBDI).</p>
                </Section>

                <Section title="9. Your Rights &mdash; United States">
                    <h3 style={headingStyle}>9.1 California (CCPA/CPRA)</h3>
                    <p>If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant you the following rights:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li><strong>Right to know</strong> &mdash; what personal information we collect, use, and disclose</li>
                        <li><strong>Right to delete</strong> &mdash; request deletion of your personal information</li>
                        <li><strong>Right to opt out of sale/sharing</strong> &mdash; we do <strong>not sell or share</strong> your personal information as defined by the CCPA/CPRA</li>
                        <li><strong>Right to non-discrimination</strong> &mdash; we will not discriminate against you for exercising your rights</li>
                        <li><strong>Right to correct</strong> &mdash; request correction of inaccurate personal information</li>
                        <li><strong>Right to limit use of sensitive personal information</strong> &mdash; we do not collect sensitive personal information as defined by the CPRA</li>
                    </ul>
                    <p style={{marginTop: '8px'}}>To exercise these rights, email <a href="mailto:support@appcoholic.com" style={linkStyle}>support@appcoholic.com</a>. We will verify your identity and respond within 45 days.</p>

                    <h3 style={headingStyle}>9.2 Other US States</h3>
                    <p>Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), Oregon (OCPA), Montana (MCDPA), and other states with privacy laws have similar rights to access, delete, and opt out of data processing. Contact us at <a href="mailto:support@appcoholic.com" style={linkStyle}>support@appcoholic.com</a> to exercise your rights.</p>

                    <h3 style={headingStyle}>9.3 Do Not Sell or Share</h3>
                    <p>We do <strong>not</strong> sell your personal information. We do <strong>not</strong> share your personal information for cross-context behavioral advertising. Google Analytics data collection requires your explicit opt-in consent via our cookie banner.</p>
                </Section>

                <Section title="10. Data Retention">
                    <p>We retain your data for the following periods:</p>
                    <ul style={{paddingLeft: '20px', marginTop: '8px'}}>
                        <li><strong>Account data</strong> &mdash; retained while your account is active. Deleted within 30 days after account deletion.</li>
                        <li><strong>Review data</strong> &mdash; retained while your account is active.</li>
                        <li><strong>Google Play OAuth tokens</strong> &mdash; retained while connected. Deleted when you disconnect or delete your account.</li>
                        <li><strong>Analytics data</strong> &mdash; retained by Google for up to 14 months (our GA4 retention setting). We do not control this data after it is sent to Google.</li>
                        <li><strong>Cookie consent preference</strong> &mdash; stored locally in your browser for 1 year.</li>
                    </ul>
                </Section>

                <Section title="11. Children&apos;s Privacy">
                    <p>Our services are not directed at children under the age of 16 (EU) or 13 (US). We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us at <a href="mailto:support@appcoholic.com" style={linkStyle}>support@appcoholic.com</a> and we will delete it promptly.</p>
                </Section>

                <Section title="12. Do Not Track (DNT)">
                    <p>Some browsers send a &quot;Do Not Track&quot; signal. We honor DNT signals by not loading analytics or advertising scripts when cookies are declined. Our Consent Mode v2 implementation ensures no tracking occurs without your explicit consent, regardless of DNT settings.</p>
                </Section>

                <Section title="13. Data Controller">
                    <p>The data controller responsible for your personal data is:</p>
                    <p style={{marginTop: '8px'}}>Dr. Wahed Hemati<br/>
                        Radilostra&szlig;e 35<br/>
                        60489 Frankfurt am Main<br/>
                        Germany<br/>
                        Email: <a href="mailto:support@appcoholic.com" style={linkStyle}>support@appcoholic.com</a></p>
                </Section>

                <Section title="14. Changes to This Policy">
                    <p>We may update this privacy policy from time to time. When we make material changes, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
                </Section>
            </div>
        </>);
}
