import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const ToastImpl = styled.div.withConfig({ displayName: 'Toast' })`
  position: fixed;
  z-index: 10000000;
  background: ${({ theme }) => theme.colors.white};
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: ${({ theme }) => theme.spacing.small};
  text-align: center;
  display: block;
  top: 120px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;

  & p {
    margin: 0;
  }
`;

export const Toast = ({ children, ...rest }) => (
  <ToastImpl {...rest}>{children}</ToastImpl>
);

Toast.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Toast.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent()(Toast);
