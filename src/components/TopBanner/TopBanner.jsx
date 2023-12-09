import './TopBanner.css'
import TopBannerContent from '../../data/Data.json'

const TopBanner = () => {
  return (
    <>
      <section id='topBannerSection' className='py-3'>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h4>{TopBannerContent.top_banner.primaryContent}</h4>
            <h5>{TopBannerContent.top_banner.secondaryContent}</h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBanner
