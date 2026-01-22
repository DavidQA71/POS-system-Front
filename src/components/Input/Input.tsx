import './Input.css';
import TextField from '@mui/material/TextField';

interface IInputProps {
  label: string;
  value: number | string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean
  inputVariant: 'outlined' | 'filled' | 'standard';
  type?: 'text' | 'password' | 'email';
}

const Input = ({ label, value ,onChange, inputVariant='standard', type= 'text' }: IInputProps) => {

  return (
    <TextField label={label} value={value} onChange={onChange} variant={inputVariant} type={type}/>
  )
};

export default Input;