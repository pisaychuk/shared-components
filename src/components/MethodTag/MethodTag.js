import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('MethodTag', ({ colors }) => ({
    backgrounds: {
      post: colors.primary.default,
      get: colors.positive.default,
      put: colors.accents[0].default,
      del: colors.negative.default,
    },
    color: colors.text.inverted,
    fontSize: '1em',
    lineHeight: '1em',
    padding: '0.5em 1em',
    borderRadius: '5px',
    textTransform: 'uppercase',
  }))
  .createSelector();

const processMethod = (method) => {
  const normalized = method.toLowerCase();
  if (normalized === 'delete') {
    return 'del';
  }
  return normalized;
}

const MethodTagImpl = theme.connect(styled.pre`
  ${spreadStyles(select)}
  background: ${(props) => {
    const method = processMethod(props.children);
    return select(`backgrounds.${method}`)(props);
  }};
  margin: 0;
  width: auto;
  display: inline-block;
`, { pure: false });

export const MethodTag = (props) => (<MethodTagImpl {...props} />);

MethodTagImpl.propTypes = MethodTag.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

MethodTagImpl.defaultProps = {
  className: null,
  id: null,
};

export default MethodTagImpl;
