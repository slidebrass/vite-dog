import { Button } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit'
  id: string
};

const ConButton = ( props: ButtonProps ) => {
  
  return (
      <Button onClick={props.onClick } 
        className={ props.className } 
        variant='contained' 
        disabled={props.disabled}
        type={props.type}
        id={props.id}
      >
        { props.children }
      </Button>
  )
}

export default ConButton
