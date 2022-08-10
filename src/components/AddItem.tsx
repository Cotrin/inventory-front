import { useState } from 'react'

export function AddItem(props) {
  const { fetchItems } = props
  const [itemName, setItemName] = useState('')
  const [itemValue, setItemValue] = useState<number>(0)

  const isButtonDisabled = !itemName || !itemValue

  async function createItem(e) {
    e.preventDefault()

    if (itemValue < 0) {
      alert('Valor menor que zero')
    }

    // cria um objeto do tipo Item
    const item = {
      name: itemName,
      value: itemValue
    }

    // manda request POST
    await fetch('http://localhost:3333/items', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(item)
    })

    fetchItems()
  }

  return (
    <div>
      <h1>Create New Item:</h1>
      <form>
        <label htmlFor="name">Item name:</label>
        <input
          type="text"
          id="name"
          value={itemName}
          onChange={event => setItemName(event.target.value)}
        />
        <br />
        <label htmlFor="value">Item value:</label>
        <input
          type="number"
          id="value"
          min={0}
          step={0.01}
          value={itemValue}
          onChange={e => setItemValue(Number(e.target.value))}
        />
        <br />
        <button disabled={isButtonDisabled} onClick={createItem}>
          Create
        </button>
      </form>
    </div>
  )
}
