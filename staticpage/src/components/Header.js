import React from 'react'

const Header = () => {

    return (
        <div className="jumbotron text-center">
            <h1>Company</h1>
            <p>We specialize in blablabla</p>
            <form className="form-inline">
                <div className="input-group">
                    <input type="email" class="form-control" size="50" placeholder="Email Address" required />
                    <div className="input-group-btn">
                        <button type="button" class="btn btn-danger">Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default Header;