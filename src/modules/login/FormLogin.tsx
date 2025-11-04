import { useContext } from "react";
import Input from "../../components/Input/Input";
import { AuthContext } from '../../context/AuthContext'
import ButtonApp from "../../components/Button/ButtonApp";



const FormLogin = () => {

    const { handleLogin, handleChange, loginData } = useContext(AuthContext);

  return (
    <main>
      <form onSubmit={handleLogin}>
        <div className='inputContainer'>
          <Input 
            label="Usuario"
            value= {loginData.user}
            onChange={(e)=>handleChange('user',e.target.value)}
            inputVariant='filled'/>
          <Input
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

export default FormLogin;