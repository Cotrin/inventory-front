import { Link } from 'react-router-dom'

export function ListItems(props) {
  const { items, deleteItem } = props

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
            <td>
              <Link to={`/edit/${item.id}`}>Edit</Link>
            </td>
            <td>
              <button onClick={() => deleteItem(item.id)}>✖</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
