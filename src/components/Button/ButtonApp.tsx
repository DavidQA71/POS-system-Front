import './Button.css';
import Button from '@mui/material/Button';

interface IButtonProps {
  label: string;
  action: (e:any) => void;
  btnVariant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
}

const ButtonApp = ({ label, action, btnVariant='contained', disabled=false }: IButtonProps) => {

	return (
		<Button onClick={action}  variant={btnVariant} disabled={disabled}>
			{label}
		</Button>
	);
}

export default ButtonApp;
