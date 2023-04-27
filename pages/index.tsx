import type { ReactElement } from 'react'
import Layout from '../layouts/default'
import Link from 'next/link'
import NestedLayout from '../layouts/nested'
import type { NextPageWithLayout } from './_app'
import Logo from '../components/common/Logo'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div id="hero" className="hero py-10">
        <h1 className="flex flex-col justify-center w-full text-center">
          <span className="w-fit block mx-auto mb-4">
            <Logo />
          </span>
          <span className="text-sm text-gray-600">The last shopping list I will never mistake, finally we found.</span>
        </h1>
      </div>
      <main id="main">
        <div className="text-center pt-8">
          <Link href="/create" className="button bg-[var(--bl-link)] text-white text-base py-4 px-10">Create new list</Link>
          <p className="text-sm mt-6 text-gray-400">No need to sign up!</p>
        </div>
      </main>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>
        {page}
      </Layout>
    </>
  )
}

export default Page