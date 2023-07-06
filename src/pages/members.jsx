import React, { Component } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import AppsSection from '../component/section/apps';
import Footer from '../component/layout/footer';
import MemberItemTwo from '../component/items/memberitemtwo';
import PaginaTion from '../component/section/pagination';


class MembersPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Members'} />
                <section className="member-page-section">
                    <div className="container">
                        <div className="member-filter">
                            <div className="member-filter-inner">
                                <form action="/" className="filter-form">
                                    <div className="gender">
                                        <div className="custom-select right w-100">
                                            <select name="gender" id="gender" className="">
                                                <option value="0">I am a </option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="person">
                                        <div className="custom-select right w-100">
                                            <select name="gender" id="gender-two" className="">
                                                <option value="0">Looking for</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="age">
                                        <div className="right d-flex justify-content-between w-100">
                                            <div className="custom-select">
                                                <select name="age-start" id="age">
                                                    <option value="1">18</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>

                                            <div className="custom-select">
                                                <select name="age-end" id="age-two">
                                                    <option value="1">36</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="city">
                                        <div className="custom-select right w-100">
                                            <select name="country" id="country" className="">
                                                <option value="0">Choose Your Country
                                                </option>
                                                <option value="1">USA</option>
                                                <option value="2">UK</option>
                                                <option value="3">Spain</option>
                                                <option value="4">Brazil</option>
                                                <option value="5">France</option>
                                                <option value="6">Newzeland</option>
                                                <option value="7">Australia</option>
                                                <option value="8">Bangladesh</option>
                                                <option value="9">Turki</option>
                                                <option value="10">Chine</option>
                                                <option value="11">India</option>
                                                <option value="12">Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="lab-btn" type="submit">Search now <i className="icofont-search-2"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="member-wrapper">
                            <ul className="member-info mb-4">
                                <li className="all-member">
                                    <p>All Members </p>
                                    <p>20 365 587</p>
                                </li>
                                <li className="member-cat">
                                    <div className="custom-select right w-100">
                                        <select name="member" id="member-cat" className="">
                                            <option value="0">Newest Registerd</option>
                                            <option value="1">Oldest</option>
                                            <option value="2">Popular</option>
                                            <option value="3">Most Active</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                            <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                                <MemberItemTwo />
                            </div>
                            <PaginaTion />
                        </div>
                    </div>
                </section>
                <AppsSection />
                <Footer />
            </div>
        );
    }
}

export default MembersPage;