import { Bookmark } from "lucide-react"

const Card = ({ companyLogo, companyName, postedTime, jobRole, tag1, tag2, payPerHour, city }) => {
  
  return (
    <div className='card'>
      <div className="card__top">
        <div className="logo-cover">
          <img src={companyLogo} alt="Brand Logo" />
        </div>
        <button className="btn-save">
          Save <Bookmark size={13} />
        </button>
      </div>
      <div className="card__middle">
        <div className="company-name">
          <h3>{companyName}</h3>
          <span>{postedTime}</span>
        </div>

        <div className="job-role">
          <h2>{jobRole}</h2>
        </div>
        <div className="tags">
          <span className="tag1">{tag1}</span>
          <span className="tag1">{tag2}</span>
        </div>

      </div>
      <div className="card__bottom">
        <div className="price-city">
          <h3>{payPerHour}</h3>
          <span>{city}</span>
        </div>
        <button className="btn-apply">
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default Card
