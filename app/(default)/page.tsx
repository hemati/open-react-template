export const metadata = {
  title: 'Appcoholic - Google Play Review Management',
  description: 'Manage your Google Play reviews with AI. Automate replies, analyze sentiment, and improve your app ratings.',
}

import Hero from '@/components/google-play/Hero'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* How it works Section */}
      <section className="relative bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
             <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">How it works</h2>
              <p className="text-xl text-gray-400">Simple, fast, and effective.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {/* Step 1 */}
               <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">1</div>
                  <h3 className="text-xl font-bold mb-2">Connect</h3>
                  <p className="text-gray-400">Link your Google Play Console account securely.</p>
               </div>
               {/* Step 2 */}
               <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">2</div>
                  <h3 className="text-xl font-bold mb-2">Analyze</h3>
                  <p className="text-gray-400">Our AI scans your reviews and drafts personalized replies.</p>
               </div>
               {/* Step 3 */}
               <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">3</div>
                  <h3 className="text-xl font-bold mb-2">Publish</h3>
                  <p className="text-gray-400">Approve and publish replies with a single click.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Everything you need to grow</h2>
              <p className="text-xl text-gray-400">
                Stop wasting hours on manual replies. Focus on building great apps while we handle the community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Smart Auto-Replies */}
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Replies</h3>
                <p className="text-gray-400">Context-aware responses that sound human. Choose from different tones and styles.</p>
              </div>
              
              {/* Feature 2: Sentiment Analysis */}
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sentiment Tracking</h3>
                <p className="text-gray-400">Monitor your app's health with real-time sentiment analysis of user feedback.</p>
              </div>
              
              {/* Feature 3: Multi-Language Support */}
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Language</h3>
                <p className="text-gray-400">Automatically translate and reply to reviews in any language supported by Google Play.</p>
              </div>

               {/* Feature 4: Custom Templates */}
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Templates</h3>
                <p className="text-gray-400">Create and save your own response templates for common issues and questions.</p>
              </div>

               {/* Feature 5: Team Collaboration */}
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-gray-400">Invite team members and manage permissions to handle reviews together.</p>
              </div>

               {/* Feature 6: Analytics Dashboard */}
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-400">Visualize your review performance and track improvements over time.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="h2 mb-4">Ready to improve your ratings?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join hundreds of developers who are saving time and improving their app store presence with Appcoholic.
              </p>
              <a href="https://platform.appcoholic.com" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto px-8 py-4 text-lg">
                Get Started for Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Apps Section */}
      <section className="relative bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-4">More from Appcoholic</h2>
              <p className="text-xl text-gray-400 mb-8">
                We don't just build tools for developers. We build apps for everyone. Check out our portfolio of mobile applications.
              </p>
              <Link href="/apps" className="btn text-white bg-gray-700 hover:bg-gray-600">
                View Our Apps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
