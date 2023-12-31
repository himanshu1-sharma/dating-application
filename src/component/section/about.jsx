import React, { Component } from 'react';
import SectionHeader from './sectionheader';

const subtitle= <h4>About Our Turulav</h4>;
const title= <h2>It All Starts With A Date</h2>;
const alignment= 'section-header';

let AboutContentList = [
    {
        imgUrl: 'assets/images/about/01.png',
        imgAlt: 'About Thumb',
        countNumber: '29,991',
        countTitle: "Members in Total",
    },
    {
        imgUrl: 'assets/images/about/02.png',
        imgAlt: 'About Thumb',
        countNumber: '29,000',
        countTitle: "Members Online",
    },
    {
        imgUrl: 'assets/images/about/03.png',
        imgAlt: 'About Thumb',
        countNumber: '14,000',
        countTitle: "Men Online",
    },
    {
        imgUrl: 'assets/images/about/04.png',
        imgAlt: 'About Thumb',
        countNumber: '15,000',
        countTitle: "Women Online",
    },
]


class AboutSection extends Component {
    state = {  } 
    render() { 
        return (
            <section className="about-section padding-tb bg-img">
                <div className="container">
                    <SectionHeader 
                        title={ title } 
                        subtitle={ subtitle }
                        alignment={alignment}
                    />
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-4">
                            {AboutContentList.map((val, i) =>(
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12" key={i}>
                                    <div className="lab-item about-item">
                                        <div className="lab-inner text-center">
                                            <div className="lab-thumb">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </div>
                                            <div className="lab-content">
                                                <h2 className="counter">{val.countNumber}</h2>
                                                <p>{val.countTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutSection;