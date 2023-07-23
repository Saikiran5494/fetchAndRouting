import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogList: []}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const camelCase = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogList: camelCase, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <ul className="blogItem-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem blogList={eachItem} key={eachItem.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
