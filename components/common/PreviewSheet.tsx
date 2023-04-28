import { useRecoilState } from "recoil"
import { orderState } from "../store/Order"
import { ReactComponentElement } from "react"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import type { Item } from '@/types/Order'

const PreviewSheet = (): ReactJSXElement => {

  const [order, setOrder] = useRecoilState(orderState)

  return (
    <div className="bg-white p-8 min-h-[50em] sticky top-10">
      <h2 className="text-lg border-b-[1px] pb-1 mb-4 border-gray-300">{order.title.length > 0 ? order.title : 'Shopping list'}</h2>
      <table className="w-full text-center">
        <thead className="border-b-[1px] border-black pb-1 mb-2">
          <tr>
            <th className="w-1/12 text-sm">#</th>
            <th className="w-5/12 text-sm">Product</th>
            <th className="w-1/12 text-sm">Qty</th>
            <th className="w-2/12 text-sm">Price</th>
            <th className="w-3/12 text-sm">Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {order.itemsList ?
          order.itemsList.map((item: Item, index: number) => (
            <tr key={'item-' + index} className="border-b-[1px] border-gray-300 items-center">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{item.productName ? item.productName : <span className="text-gray-400 text-xs">(Not set)</span>}</td>
              <td className="py-2">{item.quantity ? item.quantity + (item.unit ? item.unit : '') : <span className="text-gray-400 text-xs">(Not set)</span> }</td>
              <td className="py-2">{item.price ? item.price : <span className="text-gray-400 text-xs">(Not set)</span>}</td>
              <td className="py-2">{item.price ? item.price * item.quantity : '---'}</td>
            </tr>
          ))
        : ''}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default PreviewSheet