import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Explore } from "./pages/Explore"
import { Library } from "./pages/Library"
import { YourPosts } from "./pages/YourPosts"
import { Search } from "./pages/Search"
import { Profile } from "./pages/Profile"
import { Followers } from "./pages/Followers"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/your_posts" element={<YourPosts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </Router>
  )
}

export default App
