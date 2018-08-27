import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  danger: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  }
})

const Button = ({children, variant, color, classes, ...rest}) => {
  let muiClassName = color === 'error' ? classes.danger : undefined
  let muiColor = color === 'error' ? 'inherit' : color;
  return (
    <MuiButton className={muiClassName} {...rest} color={muiColor} variant={variant}>
      {children}
    </MuiButton>
  )
}

Button.defaultProps = {
  disabled: false,
  color: 'primary',
  component: 'button',
  size: 'medium',
  variant: 'raised',
}

Button.propTypes = {
  /**
   * The content of the Button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the component.
   */
  color: PropTypes.oneOf(['inherit','primary','error']),
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  /** if `true`, the button will be disabled. */
  disabled: PropTypes.bool,
  /** The size of the button */
  size: PropTypes.oneOf(['small','medium','large']),
  /** Variations of the Button. */
  variant: PropTypes.oneOf(['raised','outlined'])
}


export default withStyles(styles)(Button);
