import React from 'react'
import Buttons from '@/components/Buttons'
import Table from '@/components/Table'
import Cashier from './Cashier'

export function Home() {
  return (
    <>
      <Cashier />
      <Buttons />
      <Table />
    </>
  )
}
