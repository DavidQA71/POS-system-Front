import { useContext } from "react";
import Input from "../../components/Input/Input";
import { AuthContext } from '../../context/AuthContext'
import Button from "../../components/Button/Button";
import './FormLogin.css';



const FormLogin = () => {

    const { handleLogin, handleChange, loginData } = useContext(AuthContext);

  return (
    <main className="mainContainer">
      <h1 className="titleForm">Factory</h1>
      <form onSubmit={handleLogin} className="formContainer">
        <div className='inputContainer'>
          <Input 
            label="Usuario"
            value= {loginData.email}
            onChange={(e)=>handleChange('email',e.target.value)}
            inputVariant='filled'/>
          <Input
            label='Password'
            value= {loginData.password}
            onChange={(e)=>handleChange('password',e.target.value)}
            inputVariant='filled'/>
        </div>
        <div className='btnContainer'>
          <Button label="Ingresar" action={()=>{}} type="submit" />
        </div>

      </form>
    </main>
  )
};

export default FormLogin;