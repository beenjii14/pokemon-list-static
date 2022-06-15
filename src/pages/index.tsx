import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from 'components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title="Home">
      <Button color={'gradient'}>Hello</Button>
    </Layout>
  )
}

export default HomePage
