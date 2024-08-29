import React from 'react'
import './Rdffrant.css'

function Rdffrant() {
  return (
    <div className='container'>
        <header className='Header'>
            <div className="logo"> RDF</div>
            <div className="sign"><button>Sign in</button></div>
        </header>
        <div className="text"> <h3>Request call to the Admin</h3></div>
        <div className="field">
            <input type="text" placeholder='Mobile No'/>
            <button id='send'>Send</button>
        </div>
      
    </div>
  )
}

export default Rdffrant
