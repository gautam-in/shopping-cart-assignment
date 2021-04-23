import React from 'react';

class SigninForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input:{},
            errors:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let input = this.state.input;
        input[event.target.name]= event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event){
        event.preventDefault();

        if(this.validate){


        }
    }
    render(){
        return (<>
            <form onSubmit={this.handleSubmit}>
                <div className="group">
                    <label for="email">Email</label>
                    <input type="email" name="email" onChange={this.handleChange} id="email" required="required" />
                </div>
                <div className="group">
                    <input type="password" name="password" onChange={this.handleChange} id="password" required="required" />
                </div>

                <input type="submit" value="Login" />
            </form>
        
        </>)

    }
}

export default SigninForm;
