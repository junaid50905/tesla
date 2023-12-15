import { Link } from "react-router-dom";
import Data from "../../data/Data.json"
import './Slider.css'


const Slider = () => {
    const slides = Data.sliders
    return (
        <section id="sliders">
            {
                slides.map((slide, index) => {
                    const { buttons, content, subtitle, title, primary_link, secodary_subtitle, poster, video } = slide
                    return (
                        <div className="slide" style={{ backgroundImage: `url(${poster})` }} key={index}>
                            {
                                video && <>
                                    <video autoPlay loop muted playsInline className="video">
                                        <source src={video}/>
                                    </video>
                                </>
                            }
                            {
                                title && <>
                                    <div className="slide_upper_content text-center">
                                        <h1 className="m-0">{title}</h1>
                                        <p className="subtitle m-0">{subtitle}</p>
                                        {
                                            secodary_subtitle && <span>{secodary_subtitle}</span>
                                        }
                                        {
                                            primary_link && <div dangerouslySetInnerHTML={{ __html: primary_link }} className="primary_link"/>

                                        }
                                    </div>
                                </>
                            }
                            <div className="slide_lower_content text-center">
                                <div>
                                    <div className="buttons d-sm-flex justify-content-sm-center gap-4 mb-sm-3">
                                        {
                                            buttons.button_one && <>
                                                <div className="button my-3">
                                                    <Link to={buttons.button_one.link} className="bottom-button btn btn-light fw-semibold py-2">{buttons.button_one.title}</Link>
                                                </div>
                                            </>
                                        }
                                        {
                                            buttons.button_two && <>
                                                <div className="button my-3">
                                                    <Link to={buttons.button_two.link} className="bottom-button second-button btn btn-dark fw-semibold py-2">{buttons.button_two.title}</Link>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="content text-center">
                                        {
                                            content && <>
                                                <div dangerouslySetInnerHTML={{ __html: content }} className="content_link"/>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Slider
