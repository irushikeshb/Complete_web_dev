import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import './index'

export default function AppMenu() {

    return (
      <>
        <div class="small-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 date-sec">
                <div id="Date"></div>
              </div>
              <div class="col-lg-3 offset-lg-5">
                <div class="social-icon"> <Link target="_blank" href="#" class=" fa fa-facebook"></Link> <Link target="_blank" href="#" class=" fa fa-twitter"></Link> <Link target="_blank" href="#" class=" fa fa-google-plus"></Link> <Link target="_blank" href="#" class=" fa fa-linkedin"></Link> <Link target="_blank" href="#" class=" fa fa-youtube"></Link> <Link target="_blank" href="#" class=" fa fa-vimeo-square"></Link> 
                </div>
              </div>
            </div>
          </div>
      </div><div class="top-head left">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <h1>News Pro<small><br />Get the latest News</small></h1>
              </div>
              <div class="col-md-6 col-lg-3 ml-auto admin-bar hidden-sm-down">
                <nav class="nav nav-inline"> <Link to="/" class="nav-link"><span class="ping"></span><i class="fa fa-envelope-o"></i></Link> <Link to="/" class="nav-link"><i class="fa fa-bell-o"></i></Link> <Link to="/" class="nav-link">Click here... <img class="" alt="" /></Link> </nav>
              </div>
            </div>
          </div>
        </div>
        <section class="top-nav">
          <nav class="navbar navbar-expand-lg py-0">
            <div class="container">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="exCollapsingNavbar2">
                <ul class="nav navbar-nav ">
                  <li class="nav-item active"> <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link> </li>
                  <li class="nav-item"> <Link class="nav-link" to="/headlines">Headlines</Link> </li>
                  <li class="nav-item"> <Link class="nav-link" to="/business">Business</Link> </li>
                  <li class="nav-item"> <Link class="nav-link" to="/sports">Sports</Link> </li>
                  <li class="nav-item"> <Link class="nav-link" to="/technology">Tech</Link> </li>
                </ul>
                <form class="ml-auto">
                  <div class="search">
                    <input type="text" class="form-control" maxlength="64" placeholder="Search" />
                    <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </section>
      </>
    )
}


