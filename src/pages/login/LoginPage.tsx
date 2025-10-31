import { useContext } from "react";
import InputApp from "../../components/Input/InputApp";
import { AuthContext } from '../../context/AuthContext'
import ButtonApp from "../../components/Button/ButtonApp";



const LoginPage = () => {

    const { handleLogin, handleChange, loginData } = useContext(AuthContext);

  return (
    <main>
      <form onSubmit={handleLogin}>
        <div className='inputContainer'>
          <InputApp 
            label="Usuario"
            value= {loginData.user}
            onChange={(e)=>handleChange('user',e.target.value)}
            inputVariant='filled'/>
          <InputApp
            label='Password'
            value= {loginData.password}
            onChange={(e)=>handleChange('password',e.target.value)}
            inputVariant='filled'/>
        </div>
        <div>
          <ButtonApp label="Ingresar" action={()=>{}} />
        </div>

      </form>
    </main>
  )
};

export default LoginPage;