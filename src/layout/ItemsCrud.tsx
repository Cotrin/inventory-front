import { useEffect, useState } from 'react'
import { FetchItem } from '../components/FetchItem'
import { ListItems } from '../components/ListItems'
import { AddItem } from '../components/AddItem'

export function ItemsCrud() {
  const [items, setItems] = useState([])

  async function fetchItems() {
    const items = await fetch('http://localhost:3333').then(res => res.json())

    setItems(items)
  }

  async function deleteItem(id) {
    await fetch(`http://localhost:3333/items/${id}`, { method: 'delete' })

    fetchItems()
  }

  //to not create an infinite loop of requests
  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <>
      <ListItems items={items} deleteItem={deleteItem} />
      <FetchItem />
      <AddItem fetchItems={fetchItems}/>
    </>
  )
}
