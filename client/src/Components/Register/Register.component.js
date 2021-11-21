import React from 'react'

export default function RegisterComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 m-auto p-5">
                    <h4>Sign Up</h4>
                    <p> We do no share your personal details with anyone </p>
                </div>
                <div className="col-sm-4 mr-auto p-4">

                    <form>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="text" name="firstName" placeholder="First Name"/>
                        </div>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="text" name="lastName" placeholder="LastName"/>
                        </div>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group mb-3">
                            <input className="form-control border-bottom" type="password" name="confirmPassword" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group my-3">
                            <button className="btn btn-danger btn-block w-100">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
