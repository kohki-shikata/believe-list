import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../layouts/default'
import Link from 'next/link'
import NestedLayout from '../../layouts/nested'
import Header from '../../components/common/Header'
import BulkInsert from '../../components/common/BulkInsert'
import ItemCard from '../../components/common/ItemCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import { orderState } from '../../components/store/Order'
import type { NextPageWithLayout } from '../_app'
import type { Order, Item } from '../../types/Order'


const Page: NextPageWithLayout = () => {

  const [showBulk, setShowBulk] = useState(false)

  const [order, setOrder] = useRecoilState(orderState)

  const toggleBulkModal = (state: boolean): void => {
    document.body.classList.toggle('openModal')
    setShowBulk(state)
  }

  const addItem = () => {
    const item: Item = {
      productName: 'test',
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
      <div id="contentWrap" className="grid md:grid-cols-[70vw,30vw]">
        <main id="main">
          <div className="inner p-[20px] md:p-[40px] lg:w-[1100px] lg:p-[80px] lg:mx-auto">
            <h2 className="text-xl text-gray-400 mb-3">Crete your new shopping list</h2>
            <div className="mb-4">
              <label htmlFor="title" className="text-sm">Title of Shopping list</label>
              <input type="text" id="title" className="text-xl p-2 border-[1px] border-gray-400 w-full" defaultValue={order.title} maxLength={80} onKeyUp={e => setOrder(order => { const { target } = e; let title = ''; target instanceof HTMLInputElement ? title = target.value : ''; return { ...order, title }})} />
            </div>
            <p className="text-xl text-gray-400 mb-3">Add Items</p>
            <BulkInsert showBulk={showBulk} setShowBulk={setShowBulk} />
            <button onClick={() => toggleBulkModal(true)} className="button">Bulk insert</button>
            <div id="list" className="bg-slate-100 p-2 md:p-8 mb-10">
              {order.itemsList.map((item: Item) => <ItemCard key={item.productName} />)}
              <button type="button" className="button" onClick={addItem}>Add new item</button>
            </div>
            
            <div className="mb-4">
              <label htmlFor="due" className="text-sm">Due</label>
              <input type="text" id="due" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
            </div>
            <div className="mb-4">
              <label htmlFor="orderer" className="text-sm">Orderer name</label>
              <input type="text" id="orderer" className="text-xl p-2 border-[1px] border-gray-400 w-full" placeholder="Jane" maxLength={80} defaultValue={order.ordererName} />
            </div>
            <div className="mb-4">
              <label htmlFor="orderer" className="text-sm">Buyer name</label>
              <input type="text" id="buyer" className="text-xl p-2 border-[1px] border-gray-400 w-full" placeholder="John" maxLength={80} defaultValue={order.buyerName} />
            </div>
            <div className="mb-4">
              <label htmlFor="note" className="text-sm">Note</label>
              <textarea id="note" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} placeholder="If you have special things for this order, please write down here." defaultValue={order.note}></textarea>
            </div>
          </div>
        </main>
        <div id="preview" className="hidden md:block bg-gray-200 p-10">
          <div className="bg-white p-8 min-h-[50em] sticky top-10">
            <p>{order.title.length > 0 ? order.title : '(Title is not set.)'}</p>
            {order.itemsList ? order.itemsList.map((item: Item) => (<p key={item.productName}>{item.productName}</p>)) : ''}
          </div>
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