import PostsManager from "../pages/PostsManager.tsx"
import { Provider } from "./providers/provider.tsx"

const App = () => {
  return (
    <Provider>
      <PostsManager />
    </Provider>
  )
}

export default App
