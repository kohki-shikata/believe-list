import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import Layout from '@/layouts/default'
import Link from 'next/link'
import NestedLayout from '@/layouts/nested'
import Header from '@/components/common/Header'
import BulkInsert from '@/components/common/BulkInsert'
import ItemCard from '@/components/common/ItemCard'
import PreviewSheet from '@/components/common/PreviewSheet'
import { useRecoilState, useRecoilValue } from 'recoil'
import { orderState } from '@/components/store/Order'
import type { NextPageWithLayout } from '../_app'
import type { Order, Item } from '@/types/Order'


const Page: NextPageWithLayout = () => {

  const [showBulk, setShowBulk] = useState(false)

  const [order, setOrder] = useRecoilState(orderState)

  const toggleBulkModal = (state: boolean): void => {
    document.body.classList.toggle('openModal')
    setShowBulk(state)
  }

  const addItem = () => {
    const item: Item = {
      productName: '',
      quantity: 1,
      includeVAT: true
    }
    setOrder((order: Order) => ({
      ...order,
      itemsList: [
        ...order.itemsList,
        item
      ],
    }))
  }


  return (
    <>
      <div id="hero" className="hero py-4 flex flex-col md:flex-row items-center pl-[30px]">
        <div className="w-[150px] h-auto mb-3 lg:mb-0">
          <Header />
        </div>
        <p className="text-gray-600 text-xs text-center md:text-left">The last shopping list I will never mistake, <br className="md:hidden" />finally we found.</p>
      </div>
      <div id="contentWrap" className="grid lg:grid-cols-[calc(70vw_-_(100vw_-_100%)_*_0.7),calc(30vw_-_(100vw_-_100%)_*_0.3)]">
        <main id="main">
          <div className="inner p-[20px] md:p-[40px] lg:w-[780px] xl:w-[1000px] lg:p-[80px] lg:mx-auto">
            <h2 className="text-xl text-gray-400 mb-3">Crete your new shopping list</h2>
            <div className="mb-4">
              <div className="grid grid-cols-[1fr,30%] gap-8">
                <div>
                  <label htmlFor="title" className="text-sm">Title of Shopping list</label>
                  <input type="text" id="title" className="text-xl p-2 border-[1px] border-gray-400 w-full" defaultValue={order.title} maxLength={80} onKeyUp={e => setOrder(order => { const { target } = e; let title = ''; target instanceof HTMLInputElement ? title = target.value : ''; return { ...order, title }})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="due" className="text-sm">Due</label>
                  <input type="datetime-local" id="due" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-400 mb-3">Add Items</p>
            <BulkInsert showBulk={showBulk} setShowBulk={setShowBulk} />
            <button onClick={() => toggleBulkModal(true)} className="button">Bulk insert</button>
            <div id="list" className="bg-slate-100 p-2 md:p-8 mb-10">
              {order.itemsList.map((item: Item, index: number) => <ItemCard index={index} key={'item-card-' + index} />)}
              <button type="button" className="block button mx-auto mb-0" onClick={addItem}>Add new item</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[30%,70%] gap-4">
              <div>
                <div className="mb-4">
                  <label htmlFor="orderer" className="text-sm">Orderer name</label>
                  <input type="text" id="orderer" className="text-xl p-2 border-[1px] border-gray-400 w-full" placeholder="Jane" maxLength={80} defaultValue={order.ordererName} />
                </div>
                <div className="mb-4">
                  <label htmlFor="orderer" className="text-sm">Buyer name</label>
                  <input type="text" id="buyer" className="text-xl p-2 border-[1px] border-gray-400 w-full" placeholder="John" maxLength={80} defaultValue={order.buyerName} />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="note" className="text-sm">Note</label>
                <textarea id="note" className="text-xl p-2 border-[1px] border-gray-400 w-full h-32" maxLength={80} placeholder="If you have special things for this order, please write down here." defaultValue={order.note}></textarea>
              </div>
            </div>
          </div>
        </main>
        <div id="preview" className="hidden lg:block bg-gray-200 p-10">
          <PreviewSheet />
        </div>
      </div>
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