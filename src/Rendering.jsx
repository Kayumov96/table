import React, { Component } from 'react';
import './index.css';
import { navbar } from './mock';
class Rendering extends Component {
    constructor(props){
        super(props);
        this.state ={
            active: false,
        }
    }
    render() {

        return (
            <div>
                {
                    this.state.active ? (<div className='loginPage'>
                           <h1>Welcome to Webbrain</h1>

                            <div className='navbar'>
                                 
                                 { navbar.map(({id, title})=>(
                                    <h2 onClick={()=>this.setState({active: title})}
                                    className={`link ${this.state.active === title && "active"}`}
                                    >{title}</h2> 
                                 ))}
                            </div>
                        </div>) 
                    : 
                    (<div className='login'>
                        <h1>Please Log in:</h1>
                        <input className='inpt' type="text" placeholder='Enter your name' required  />
                        <input className='inpt' type="text" placeholder='Enter your Surname' required/>
                        <input className='inpt' type="password" placeholder='Enter your password' aria-required/>
                    </div>)
                 }
                <button className='log' onClick={()=> this.setState({active: !this.state.active})}>
                    {this.state.active? 'Log out': 'Log in'}
                </button>
              
            </div>
        );
    }
}

export default Rendering;