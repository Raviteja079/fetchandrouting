import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => {
  console.log('hi')
  return (
    <div className="home-container">
      <UserInfo />
      <BlogList />
    </div>
  )
}

export default Home
