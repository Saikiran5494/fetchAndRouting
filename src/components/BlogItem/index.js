// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogList

  return (
    <Link className="item-container" to={`/blogs/${id}`}>
      <img src={imageUrl} className="image" alt={title} />
      <div className="details-container">
        <h1 className="topic">{topic}</h1>
        <h1 className="title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={`title${id}`} className="avatar-image" />
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
