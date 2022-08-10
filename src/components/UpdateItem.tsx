import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function UpdateItem() {
  const { id } = useParams()

  const [itemName, setItemName] = useState('')
  const [itemValue, setItemValue] = useState(0)

  useEffect(() => {
    onPageLoad()
  }, [])

  // busca item no backend
  async function onPageLoad() {
    const item = await fetch(`http://localhost:3333/items/${id}`).then(res =>
      res.json()
    )

    setItemName(item.name)
    setItemValue(item.value)
  }

  async function updateItem(e) {
    e.preventDefault()

    // cria objeto item
    const item = {
      name: itemName,
      value: itemValue
    }

    //seta loading true


    // manda pro backend
    await fetch(`http://localhost:3333/items/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(item)
    })
    // alert se der errado ?
    
    //seta loading false

    // redireciona pra home ?
    //react-router-dom doc navigate
  }

  return (
    <div>
      <h1>Update Item</h1>

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
        <button disabled={false} onClick={updateItem}>
          Update
        </button>
      </form>
    </div>
  )
}
