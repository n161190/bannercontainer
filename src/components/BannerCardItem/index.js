// Write your code here.
import './index.css'

const CardList = probs => {
  const {bannerList} = probs
  const {headerTest, description, className} = bannerList

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerTest}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default CardList
