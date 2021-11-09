
import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'; 
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      
      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state
    return(
      <div className="sign-in">
        <h2>I have already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput 
            type="password" 
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">
              Sign in
            </CustomButton>

            <CustomButton 
              type="button"
              onClick={signInWithGoogle} 
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn