import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <footer className="py-1 bg-dark" style={{height: '20vh'}}>
                {/* <fontAwesomeIcon icon={faFacebook}/>
                <fontAwesomeIcon icon={faLinkedin}/>
                <fontAwesomeIcon icon={faTwitter}/>
                <fontAwesomeIcon icon={faInstragram}/>
                <Link to='https://www.facebook.com'></Link>
                <Link to='https://www.linkedin.com'></Link>
                <Link to='https://www.twitter.com'></Link>
                <Link to='https://www.instragram.com'></Link> */}
                <p className="text-center mt-1 text-white">
                    Copyright {new Date().getFullYear()}, All Rights Reserved
                </p>
            </footer>
        </Fragment>
    )
}

export default Footer
