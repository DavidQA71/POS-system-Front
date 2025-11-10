import './Button.css';
import Button from '@mui/material/Button';

interface IButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
  action: (e:React.MouseEvent<HTMLButtonElement>) => void;
  btnVariant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
}

const ButtonApp = ({ label, action, btnVariant='contained', disabled=false, type }: IButtonProps) => {

	return (
		<Button onClick={action}  variant={btnVariant} disabled={disabled} type={type}>
			{label}
		</Button>
	);
}

export default ButtonApp;
