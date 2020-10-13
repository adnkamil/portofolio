import React, {useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Aos from 'aos'
// import About from '../components/About'
import kanban from '../assets/image/projects/kanban.png'
import ecommerce from '../assets/image/projects/e-commerce.png'
import country from '../assets/image/projects/country.png'
import sugoku from '../assets/image/projects/sugoku.png'
import arcadejs from '../assets/image/projects/arcadejs.png'


export default () => {
    useEffect(() => {
        Aos.init({ duration: 750 })
    }, [])
    return (
        <>
            <div className="layer mt-5" id="top">
               <div className="kop" data-aos="fade-up">
                  <h1>PORTOFOLIO</h1>
                  <p>This is list of my project</p>
               </div>
            </div>
            {/* <About/> */}
            <div className="projcts">
                <div className="container mt-5 mb-5" id="projects">
                    <h1 data-aos="fade-up">PROJECTS</h1>
                    <div class="card mb-3 mt-4" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={kanban} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Kanban Apps</h5>
                                    <p class="card-text">Kanban apps let you visualize, organize and manage work in the best possible way. With such tools, you can easily manage your workflow and focus on work that brings real value to your customers.</p>
                                    <Button variant="outline-dark" size="sm" href="https://kanban-ccf82.web.app/" target="_blank">See Project</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">ArcadeJs</h5>
                                    <p class="card-text">ArcadeJS is an online arcade made with JavaScript focusing on more modern UI, fast, and responsive interactivity, and is open source. Our goal is to relive the golden age of arcade video games with a more modern look and fully available for anyone to access and enjoy.</p>
                                    <Button variant="outline-dark" size="sm" href="http://arcadejs.s3-website-ap-southeast-1.amazonaws.com/" target="_blank">See Project</Button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src={arcadejs} class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={country} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Countries</h5>
                                    <p class="card-text">Learn about the countries of the world - capitals, populations, languages, GDPs, religions, flags & more.</p>
                                    <Button variant="outline-dark" size="sm" href="https://country-list-5a6a4.web.app//" target="_blank">See Project</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Sudoku</h5>
                                    <p class="card-text">Sudoku is the #1 Sudoku game for Android phones and tablets, and the best way to learn and improve your skills in this classic puzzle game.</p>
                                    <Button variant="outline-dark" size="sm" href="https://expo.io/@adnkamil/projects/sugoku" target="_blank">See Project</Button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src={sugoku} class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={ecommerce} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">E-Commerce</h5>
                                    <p class="card-text">Electronic commerce or e-commerce (sometimes written as eCommerce) is a business model that lets firms and individuals buy and sell things over the internet</p>
                                    <Button variant="outline-dark" size="sm" href="https://e-commerce-1495f.web.app/" target="_blank">See Project</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="mb-5">there are still more projects that haven't been deployed, you can see them on my github ^^ </h4>
        </>
    )
}

