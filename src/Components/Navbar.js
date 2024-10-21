import React from 'react'
import PropTypes from 'prop-types'

// write rfc for react function. 
// write impt for import proptypes

export default function Navbar(props) {

  const nav = document.querySelector('.nav')
  window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


  return (
    // always put your jsx code in empty tags(jsx fragment) cause jsx must be covered in a single tag
    // put "/" in all single tags.
    // change class to className.

    <>
    <div className="App">
      <nav class="nav">
      <div class="container">
        <h1 class="logo"><a href="/index.html">{props.heading}</a></h1>
        <ul>
          <li><a href="/" class="current">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className='form-check form-switch' >
        <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id='darkmodet'/>
        <label htmlFor="darkmodet" style={{color: `${props.mode==='Light'?'black':'white'}`, backgroundColor: '#222222'}}>&nbsp; {props.btntext}</label>
        </div>
      </div>
    </nav>
    </div>
    </>
  );
}



Navbar.propTypes = {heading : PropTypes.string};
// here we are assigning the var type of the prop name and can add more using comma(,)
// you can also add .isRequired to make it required to fillout.

Navbar.defaultProps = {heading : 'Adeshara Brijesh'};
