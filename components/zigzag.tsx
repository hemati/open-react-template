import Image from 'next/image'

import FeatImage01 from '@/public/images/craftcommand.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>*/}
            <h1 className="h2 mb-4">Dive into the World of Our Apps</h1>
            <p className="text-xl text-gray-400">Browse, Discover, Download – Experience the Diversity of Our Applications.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <div className="rounded-3xl overflow-hidden">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" layout="responsive" />
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Build, Defend, and Explore
                  </div>
                  <h3 className="h3 mb-3">CraftCommand™</h3>
                  <p className="text-xl text-gray-400 mb-4">CraftCommand elevates the Mindustry experience with smooth
                    gameplay and innovative features, allowing players to construct factories, combat foes, and
                    collaborate with friends.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span><b>Build Anything</b>: Factories, robots, vehicles.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span><b>Play Together</b>: Cross-device multiplayer.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span><b>Regular Updates</b>: Enhanced, community-driven.</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a href='https://play.google.com/store/apps/details?id=com.appcoholic.craftcommand&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
                        alt='Get it on Google Play'
                        src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                        style={{width: '200px'}}/></a>
                  </div>
                  <div className="mt-4">
                    <a href="/craftcommand/privacy" className="text-purple-600 hover:underline">Privacy</a>
                  </div>
                  <div className="mt-4">
                    <a href="/source/craftcommand.zip" className="text-purple-600 hover:underline">Download Source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
