import './TopBanner.css'
import TopBannerContent from '../../data/Data.json'
import { Link } from 'react-router-dom'

const TopBanner = () => {
  return (
    <>
      <section id='topBannerSection'>
        <div className="container-fluid">
          <div className="row">
            <div className="banner-left-content col-xxl-5 col-xl-5 col-lg-6 col-12">
              <h4>{TopBannerContent.top_banner.primaryContent}</h4>
            </div>
            <div className="d-sm-flex banner-right-content col-xxl-7 col-xl-7 col-lg-6 col-12 text-xxl-center text-xl-center text-lg-center text-start">
              <p>{TopBannerContent.top_banner.secondaryContent}</p>
              <span className='ms-sm-4'><Link className='text-light fw-light'>See Details</Link></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBanner
