import './Button.css';
import Button from '@mui/material/Button';

interface IButtonProps {
  label: string;
  action: (e:any) => void;
  btnVariant?: 'text' | 'contained' | 'outlined';
  disable?: boolean;
}

const ButtonApp = ({ label, action, btnVariant='contained' }: IButtonProps) => {

	return (
		<Button onClick={action}  variant={btnVariant}>
			{label}
		</Button>
	);
}

export default ButtonApp;
