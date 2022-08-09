import { useState } from 'react'

const delay = (time: number) => new Promise(res => setTimeout(res, time))

function GitHubRepos() {
  // const inputRef = useRef<HTMLInputElement>(null)

  const [gitHubUserRepositories, setGitHubUserRepositories] = useState([])
  const [githubUser, setGithubUser] = useState('')

  // const loading = false;
  const [loading, setLoading] = useState(false)

  async function onGithubUserSearchClick(event: any) {
    event.preventDefault()
    // const input = document.querySelector('#gitHubUser')
    const repos = await fetchGitHubUserRepositories(githubUser)

    setGitHubUserRepositories(repos)
  }

  async function fetchGitHubUserRepositories(githubUser: string) {
    setLoading(true)
    
    await delay(1000)
    
    const repositories = await fetch(
        `https://api.github.com/users/${githubUser}/repos`
        ).then(res => res.json())
        
        setLoading(false)

    return repositories
  }

  return (
    <div>
      <h1>Frontend API studies</h1>

      <form>
        <div>
          <span>@</span>
          <input
            // ref={inputRef}
            type="text"
            placeholder="Username"
            value={githubUser}
            onChange={event => setGithubUser(event.target.value)}
          />
          <button onClick={onGithubUserSearchClick}>
            Fetch User Repositories
          </button>
        </div>
      </form>

      {loading ? (
        <Loading />
      ) : (
        <Lista gitHubUserRepositories={gitHubUserRepositories} />
      )}

      <div>=========================================</div>
    </div>
  )
}

function Loading() {
  return (
    <div>
      <span>Loading....</span>
    </div>
  )
}

function Lista(props) {
  const gitHubUserRepositories = props.gitHubUserRepositories

  return (
    <ul>
      {gitHubUserRepositories.map(repo => (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  )
}

export { GitHubRepos }
