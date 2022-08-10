import { useState } from 'react'

export function FetchItem() {
  const [itemData, setItemData] = useState(null)
  const [itemId, setItemId] = useState('')

  async function searchButtonClick(event) {
    event.preventDefault()
    const itemData = await fetchItem(itemId)

    setItemData(itemData)
  }

  async function fetchItem(id) {
    const data = await fetch(`http://localhost:3333/items/${id}`)
    const item = await data.json()

    return item
  }

  return (
    <div>
      <form>
        <div>
          <span>Product ID: </span>
          <input
            type="text"
            value={itemId}
            onChange={event => setItemId(event.target.value)}
          />
          <button onClick={searchButtonClick}>Search</button>
        </div>
      </form>

      {itemData ? <RenderItemData itemData={itemData} /> : null}
    </div>
  )
}

function RenderItemData(props) {
  const { itemData } = props

  return (
    <div>
      <span>ID: {itemData.id}</span> <br />
      <span>Nome: {itemData.name}</span> <br />
      <span>Valor: R${itemData.value}</span> <br />
    </div>
  )
}
