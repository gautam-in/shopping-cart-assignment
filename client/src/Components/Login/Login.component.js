import React from 'react'

export default function LoginComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 m-auto p-5">
                    <h4>Login</h4>
                    <p> Get access to your Orders, wishlist and Recommendations </p>
                </div>
                <div className="col-sm-4 mr-auto p-4">

                    <form>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group my-3">
                            <button className="btn btn-danger btn-block w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
