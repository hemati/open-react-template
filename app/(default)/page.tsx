export const metadata = {
  title: 'Appcoholic - Home',
  description: 'Welcome to Appcoholic. We are a team of developers and designers who love to create beautiful and functional apps. We are passionate about our work and we love to share our knowledge with the world. '
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      {/*<Features />*/}
      <Zigzag />
      {/*<Testimonials />*/}
      {/*<Newsletter />*/}
    </>
  )
}
