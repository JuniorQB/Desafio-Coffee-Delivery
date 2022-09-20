import { createContext, ReactNode, useState } from 'react'

interface coffeOrderProps {
  idCoffe: number
  quantity: number
  price: number
}

interface OrderContextData {
  coffeeOrder: (data: coffeOrderProps) => void
  quantityItemsInOrder: () => void
  quantityItems: number
}

export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<coffeOrderProps[]>([])
  const [quantityItems, setQuantityItems] = useState(0)

  function coffeeOrder(data: coffeOrderProps) {
    setOrder([...order, data])
    console.log(order)
    quantityItemsInOrder()
  }

  function quantityItemsInOrder() {
    let sum = 0

    for (let i = 0; i < order.length; i++) {
      sum = +order[i].quantity
    }

    setQuantityItems(sum)
  }

  return (
    <OrderContext.Provider
      value={{
        coffeeOrder,
        quantityItemsInOrder,
        quantityItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
