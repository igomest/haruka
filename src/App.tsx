import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader"


const App = () => {
  const Home = lazy(() => import("./pages/Home"))
  const Login = lazy(() => import("./pages/Login"))
  const Explore = lazy(() => import("./pages/Explore"))
  const Library = lazy(() => import("./pages/Library"));
  const YourPosts = lazy(() => import("./pages/YourPosts"))
  const Search = lazy(() => import("./pages/Search"))
  const Followers = lazy(() => import("./pages/Followers"))
  const PostPage = lazy(() => import("./pages/PostPage"))
  const Profile = lazy(() => import("./pages/Profile"))


  return (
    <Suspense fallback={<Loader />}>
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
          <Route path="/create" element={<PostPage />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
