import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';

const title = "Oops! This Page Not Found";
const desc = "We are Really Sorry But the Page you Requested is Missing";

class ForeZeroPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Error Page'} />
                <section className="fore-zero padding-tb">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="zero-item">
                                <div className="zero-thumb">
                                    <img src="assets/images/404.png" alt="404" />
                                </div>
                                <div className="zero-content">
                                    <h2>{title}</h2>
                                    <p> {desc} <i className="icofont-worried"></i></p>
                                    <Link to="/" className="lab-btn"><span>Go Back to Home <i className="icofont-double-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterSection />
            </div>
        );
    }
}

export default ForeZeroPage;