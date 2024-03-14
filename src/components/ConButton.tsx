import { Button } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type: string
};

const ConButton = ( props: ButtonProps ) => {
  
  return (
      <Button onClick={props.onClick } className={ props.className } variant='contained'>
        { props.children }
      </Button>
  )
}

export default ConButton
