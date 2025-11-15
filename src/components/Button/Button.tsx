import './Button.css';
import BtnMui from '@mui/material/Button';

interface IButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
  action: (e:React.MouseEvent<HTMLButtonElement>) => void;
  btnVariant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
}

const Button = ({ label, action, btnVariant='contained', disabled=false, type }: IButtonProps) => {

	return (
		<BtnMui onClick={action}  variant={btnVariant} disabled={disabled} type={type}>
			{label}
		</BtnMui>
	);
}

export default Button;
