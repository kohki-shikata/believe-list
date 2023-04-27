import { atom } from 'recoil'
import type { Order, Item } from '../../types/Order'

export const orderState = atom({
  key: 'order',
  default: {
    title: '' as string,
    itemsList: [] as Item[],
    due: new Date() as Date,
    ordererName: '' as string,
    buyerName: '' as string,
    note: '' as string,
  } as Order
})