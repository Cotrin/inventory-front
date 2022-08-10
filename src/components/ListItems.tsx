import { useEffect, useState } from 'react'

export function ListItems() {
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
    <div>
      <h1>Items List</h1>
      {items.length > 0 ? (
        <RenderItemsList items={items} deleteItem={deleteItem} />
      ) : null}
      {/* {items.length > 0 && <RenderItemsList items={items} /> } */}
    </div>
  )
}

function RenderItemsList(props) {
  const { items, deleteItem } = props

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td onClick={() => deleteItem(item.id)}>✖</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
