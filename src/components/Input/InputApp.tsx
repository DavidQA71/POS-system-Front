import './Input.css';
import TextField from '@mui/material/TextField';

interface IInputProps {
  label: string;
  value: number | string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean
  inputVariant: 'outlined' | 'filled' | 'standard';
}

const InputApp = ({ label, value ,onChange, inputVariant='standard' }: IInputProps) => {

  return (
    <TextField label={label} value={value} onChange={onChange} variant={inputVariant}/>
  )
};

export default InputApp;