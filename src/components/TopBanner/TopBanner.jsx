import './TopBanner.css'
import TopBannerContent from '../../data/Data.json'

const TopBanner = () => {
  return (
    <>
      <section id='topBannerSection'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-12">
              <h4>{TopBannerContent.top_banner.primaryContent}</h4>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-12 text-xxl-center text-xl-center text-lg-center text-start">
              <p>{TopBannerContent.top_banner.secondaryContent}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBanner
