// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, detailsData: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(` https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({detailsData: updatedData, isLoading: false})
  }

  renderDetailsBlog = () => {
    const {detailsData} = this.state
    const {id, author, content, imageUrl, title, avatarUrl} = detailsData
    return (
      <div className="details-container">
        <h1 className="title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} className="avatar-img" alt={`item${id}`} />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image-detail" alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {' '}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderDetailsBlog()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
