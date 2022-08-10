import { GitHubRepos } from './components/GitHubRepos'
import { FetchItem } from './components/FetchItem'
import { ListItems } from './components/ListItems'
import { AddItem } from './components/AddItem'

function App() {
  return (
    <>
      <ListItems/>
      <FetchItem />
      <AddItem/>
      {/* <GitHubRepos /> */}
    </>
  )
}

export default App
