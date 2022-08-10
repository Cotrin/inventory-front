import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UpdateItem } from './components/UpdateItem'
import { ItemsCrud } from './layout/ItemsCrud'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemsCrud />} />
        <Route path="edit/:id" element={<UpdateItem />} />
      </Routes>

      {/* <GitHubRepos /> */}
    </BrowserRouter>
  )
}

export default App
