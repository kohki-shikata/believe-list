import { useRecoilState, useRecoilValue } from 'recoil'
import { useState } from 'react'
import { orderState } from '@/components/store/Order'
import { ItemCardProps } from '@/types/ItemCardProps'
import { Order, Item } from '@/types/Order'

export const ItemCard = (props: ItemCardProps) => {

  const [order, setOrder] = useRecoilState<Order>(orderState)
  const [productName, setProductName] = useState<string>()

  const updateProductName = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    setOrder((order: Order) => ({
      ...order,
      itemsList: [
        ...order.itemsList.slice(0, props.index),
        {
          productName: (event.target as HTMLInputElement).value,
          manifucturer: order.itemsList[props.index].manifacturer,
          quantity: order.itemsList[props.index].quantity,
          size: order.itemsList[props.index].size,
          unit: order.itemsList[props.index].unit,
          price: order.itemsList[props.index].price,
          currency: order.itemsList[props.index].currency,
          includeVAT: order.itemsList[props.index].includeVAT,
          minPrice: order.itemsList[props.index].minPrice,
          maxPrice: order.itemsList[props.index].maxPrice,
          shop: order.itemsList[props.index].shop,
          relatedURL: order.itemsList[props.index].relatedURL,
          note: order.itemsList[props.index].note
        },
        ...order.itemsList.slice(props.index + 1)
      ]
    }))
  }

  const removeItem = (index: number) => {
    setOrder((order: Order) => ({
      ...order,
      itemsList: [...order.itemsList.slice(0, index), ...order.itemsList.slice(index + 1)]
    }))
  }

  return (
    <div className="bg-white shadow-md mb-8">
      <h3 className="text-xl font-medium text-gray-900 grid grid-cols-[15%,1fr,15%] md:grid-cols-[10%,1fr,10%] bg-emerald-100">
        <button type="button" className="bg-emerald-200">▼</button>
        <div className="flex flex-col md:flex-row items-start md:items-center p-2 md:p-0 h-full">
          <p className="bg-slate-800 text-white text-xs md:text-sm px-1 py-0 md:px-2 md:py-1 rounded-md md:mx-2"><span className="hidden md:inline">item&nbsp;</span>#{props.index + 1}</p>
          <h4 className="text-xl">{order.itemsList[props.index].productName ? order.itemsList[props.index].productName : <span className="text-slate-500">(Product name is not set)</span>}</h4>
        </div>
        <button type="button" className="button w-full h-full px-0 bg-red-700 text-white text-xs md:text-sm" onClick={() => removeItem(props.index)}>Remove</button>
      </h3>
      <div className="itemContents p-4 md:p-8">
        <div className="grid md:grid-cols-3 gap-0 md:gap-4">
          <div className="mb-8">
            <label htmlFor="productName" className="text-sm">Product Name</label>
            <input
              type="text" 
              id={"productName-" + props.index} 
              placeholder="Yakult 1000" 
              required 
              className="text-xl p-2 border-[1px] border-gray-400 w-full" 
              defaultValue={order.itemsList[props.index].productName} 
              maxLength={80}
              onKeyUp={e => updateProductName(e)}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="manifacturer" className="text-sm">Manifucturer or Brand</label>
            <input type="text" id="manifacturer" placeholder="Yakult co.,ltd." className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
          </div>
          <div className="mb-8">
            <label htmlFor="manifacturer" className="text-sm">Quantity</label>
            <div className="grid grid-cols-[1fr,50px,50px] gap-2">
              <input type="number" min="0" placeholder="1" required id="manifacturer" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
              <button type="button" id="increaseQuantity" className="bg-amber-300">+</button>
              <button type="button" id="decreaseQuantity" className="border-2 border-amber-300">-</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-8">
              <label htmlFor="size" className="text-sm">Size</label>
              <input type="text" id="size" placeholder="Large" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
            </div>
            <div className="mb-8">
              <label htmlFor="unit" className="text-sm">Unit</label>
              <input type="text" id="unit" placeholder="pkg" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
            </div>
          </div>
          <div className="mb-8">
            <div className="grid grid-cols-[1fr,5em] gap-3">
              <div>
                <label htmlFor="price" className="text-sm">Price</label>
                <input type="number" id="price" placeholder="198" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
              </div>
              <div>
              <label htmlFor="currency" className="text-sm">Currency</label>
              <select name="currency" className="border-2 p-2 border-slate-400 text-xl">
                <option value="JPY" defaultValue={'JPY'}>JPY</option>
                <option value="USD">USD</option>
              </select>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <p>Price includes...</p>
            <div className="grid grid-cols-2 gap-3">
              <label className="border-2 border-slate-200 p-2 w-full h-full inline-flex items-center">
                <input type="radio" name="includeVAT" value="includeVAT" className="mr-1" />
                <span className="text-xs">Include VAT</span>
              </label>
              <label className="border-2 border-slate-200 p-2 w-full h-full inline-flex items-center">
                <input type="radio" name="includeVAT" value="notIncludeVAT" className="mr-1" />
                <span className="text-xs">Not include VAT</span>
              </label>
            </div>
          </div>
        </div>
        <h3><button type="button" id="additionalInfoToggle"></button>Additional info</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div>
            <label htmlFor="price" className="text-sm">Min price</label>
            <input type="number" id="minPrice" placeholder="150" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
          </div>
          <div>
            <label htmlFor="price" className="text-sm">Max price</label>
            <input type="number" id="maxPrice" placeholder="230" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
          </div>
          <div className="col-span-2">
            <label htmlFor="shop" className="text-sm">Shop</label>
            <input type="text" id="shop" placeholder="Four seasons Market" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <label className="text-sm">Related URL</label>
            <div className="grid grid-cols-[1fr,50px,50px] gap-2">
              <input type="number" placeholder="230" className="text-xl p-2 border-[1px] border-gray-400 w-full" maxLength={80} />
              <button type="button" className="bg-green-500 text-xs text-white">Add</button>
              <button type="button" className="bg-red-500 text-xs text-white">Remove</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default ItemCard