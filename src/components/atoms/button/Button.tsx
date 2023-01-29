import { Button, SxProps } from "@mui/material";
import { memo } from "react";
import './button.scss';

export interface ButtonProps{
    children?: any;
    variant?: 'text' | 'outlined' | 'contained',
    style?: SxProps;
    hollow?: boolean
}
function StyledButton({variant = 'contained', children, style}: ButtonProps){

    return (
      <Button color="primary" disableFocusRipple disableRipple className={`app-button ${variant}`} variant={variant} sx={style}>{children}</Button>
    )
}

export default memo(StyledButton)