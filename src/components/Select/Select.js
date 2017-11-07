import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import LibSelect from 'react-select';
import arrowImage from './arrow.png';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';
import _ from 'lodash';
import selectOptionPrimaryValue from '../../extensions/selectItemPrimaryValue';
import Loader from '../Loader';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const select = theme.register('Select', ({ spacing, colors, fonts, shadows }) => ({
  padding: spacing.medium,
  borderColors: {
    default: colors.gray.borderLight,
    focus: colors.gray.border,
    hover: colors.gray.border,
    disabled: colors.gray.default,
  },
  colors: {
    default: colors.text.default,
    disabled: colors.text.default,
    disabledItem: colors.gray.medium,
    hover: colors.primary.default,
    selectedItem: colors.primary.default,
  },
  opacities: {
    default: 1,
    disabled: 0.5,
  },
  backgrounds: {
    default: colors.background.default,
    disabled: colors.background.disabled,
    focusedItem: colors.primary.light,
  },
  borderWidth: '1px',
  borderStyle: 'solid',
  fontFamily: fonts.brand,
  fontSize: '14px',
  letterSpacing: '0.02em',
  lineHeight: '1',
  arrowSize: '35px',
  validEffectColor: colors.primary.light,
  clearButtonColor: colors.gray.medium,
  menuShadow: shadows.short,
  multiSelectItem: {
    backgrounds: {
      default: colors.primary.light,
      focus: colors.primary.default,
    },
    borderRadius: '5px',
    colors: {
      default: colors.primary.default,
      focus: colors.text.inverted,
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.primary.default,
    padding: spacing.extraSmall,
  },
})).createSelector();

const Container = styled.div`
  width: 100%;

  .Select {
    position: relative;
  }
  .Select,
  .Select div,
  .Select input,
  .Select span {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .Select.is-disabled > .Select-control {
    background-color: ${select('backgrounds.disabled')};
  }
  .Select.is-disabled > .Select-control:hover {
    box-shadow: none;
  }
  .Select.is-disabled .Select-arrow-zone {
    cursor: default;
    pointer-events: none;
    opacity: ${select('opacities.disabled')};
  }
  .Select-control {
    background-color: ${select('backgrounds.default')};
    border-color: ${select('borderColors.default')};
    border-radius: 0;
    border-width: ${select('borderWidth')};
    border-style: ${select('borderStyle')};
    color: ${select('colors.default')};
    cursor: default;
    border-spacing: 0;
    border-collapse: separate;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 46px;
  }

  .Select-control .Select-input:focus {
    outline: none;
  }

  .is-searchable.is-open > .Select-control {
    cursor: text;
  }
  .is-open > .Select-control .Select-arrow {
    transform: rotate(180deg);
  }
  .is-searchable.is-focused:not(.is-open) > .Select-control {
    cursor: text;
  }

  .is-focused > .Select-control {
    border-color: ${select('borderColors.focus')};
  }

  .is-focused:not(.is-open) > .Select-control {
    box-shadow: inset 0 -5px 0 ${select('validEffectColor')};
  }

  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    bottom: 0;
    color: ${select('colors.default')};
    left: 0;
    font-size: ${select('fontSize')};
    line-height: ${select('lineHeight')};
    padding: ${select('padding')};
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    left: 0;
  }
  .has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
    color: ${select('colors.default')};
    cursor: pointer;
    text-decoration: none;
  }
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover {
    color: ${select('colors.hover')};
    outline: none;
  }
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
    color: ${select('colors.focus')};
    outline: none;
  }
  .Select-input {
    font-size: ${select('fontSize')};
    line-height: ${select('lineHeight')};
    padding: ${select('padding')};
    vertical-align: middle;
  }
  .Select-input > input {
    padding: 0;
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: block;
    margin: 0;
    outline: none;
    line-height: ${select('lineHeight')};
    font-size: ${select('fontSize')};
    min-height: 1em;
    /* For IE 8 compatibility */
    -webkit-appearance: none;
  }
  .is-focused .Select-input > input {
    cursor: text;
  }
  .has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  .Select-control:not(.is-searchable) > .Select-input {
    outline: none;
  }
  .Select-loading-zone {
    position: absolute;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
  .Select-loading {
    width: 0;
    height: 0;
  }
  .is-loading .Select-placeholder {
    width: 100%;
    display: flex;

    & > * {
      margin: auto;
    }
  }

  .Select-clear-zone {
    animation: ${fadeIn} 200ms;
    color: ${select('clearButtonColor')};
    cursor: pointer;
    position: absolute;
    text-align: center;
    width: 17px;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
  .Select-clear-zone:hover {
    color: ${select('colors.hover')};
  }
  .Select-clear {
    font-size: 20px;
    display: block;
    height: 18px;
  }
  .Select--multi .Select-clear-zone {
    width: 17px;
  }
  .Select-arrow-zone {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  }
  .Select-arrow {
    display: block;
    width: ${select('arrowSize')};
    height: ${select('arrowSize')};
    position: relative;
    background-image: url(${arrowImage});
    background-repeat: no-repeat;
    background-size: ${select('arrowSize')};
    background-position: center;
    transition: 0.2s;
  }
  .is-open .Select-arrow,
  .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }
  .Select--multi .Select-multi-value-wrapper {
    display: flex;
    flex-direction: row;
  }
  .Select .Select-aria-only {
    display: inline-block;
    height: 1px;
    width: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    float: left;
  }

  .Select-menu-outer {
    background-color: ${select('backgrounds.default')};
    border: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColors.focus')};
    border-top-color: ${select('borderColors.default')};
    box-shadow: ${select('menuShadow')};
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }
  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }
  .Select-option {
    box-sizing: border-box;
    background-color: ${select('backgrounds.default')};
    color: ${select('colors.default')};
    cursor: pointer;
    display: block;
    font-size: ${select('fontSize')};
    padding: ${select('padding')};
  }
  .Select-option.is-selected {
    color: ${select('colors.selectedItem')};
  }
  .Select-option.is-focused {
    background-color: ${select('backgrounds.focusedItem')};
    color: ${select('colors.default')};
  }
  .Select-option.is-disabled {
    color: ${select('colors.disabledItem')};
    cursor: default;
  }
  .Select-noresults {
    box-sizing: border-box;
    color: ${select('colors.disabledItem')};
    cursor: default;
    display: block;
    font-size: ${select('fontSize')};
    padding: ${select('padding')};
  }
  .Select--multi .Select-input {
    vertical-align: middle;
    margin-left: 10px;
    padding: 0;
  }
  .Select--multi.has-value .Select-input {
    margin-left: 5px;
  }
  .Select--multi .Select-value {
    background-color: ${select('multiSelectItem.backgrounds.default')};
    border-radius: ${select('multiSelectItem.borderRadius')};
    color: ${select('multiSelectItem.colors.default')};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 0.9em;
    line-height: 1.4;
    margin-left: 5px;
    margin-top: 5px;
    vertical-align: top;
    padding: ${select('multiSelectItem.padding')};
    border-width: ${select('multiSelectItem.borderWidth')};
    border-style: ${select('multiSelectItem.borderStyle')};
    border-color: ${select('multiSelectItem.borderColor')};
  }
  .Select--multi .Select-value-icon,
  .Select--multi .Select-value-label {
    flex: 0 0 auto;
    margin: auto 4px;
  }

  .Select--multi .Select-value-label {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    cursor: default;
  }
  .Select--multi a.Select-value-label {
    color: ${select('multiSelectItem.color')};
    cursor: pointer;
    text-decoration: none;
  }
  .Select--multi a.Select-value-label:hover {
    text-decoration: underline;
  }
  .Select--multi .Select-value-icon {
    cursor: pointer;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-right-width: ${select('multiSelectItem.borderWidth')};
    border-right-style: ${select('multiSelectItem.borderStyle')};
    border-right-color: ${select('multiSelectItem.borderColor')};
    padding-right: 5px;
  }
  .Select--multi .Select-value-icon:hover,
  .Select--multi .Select-value-icon:focus,
  .Select--multi .Select-value-icon:active {
    color: ${select('multiSelectItem.colors.focus')};
    background: ${select('multiSelectItem.backgrounds.focus')};
  }
  .Select--multi.is-disabled .Select-value {
    background-color: ${select('backgrounds.disabled')};
    border-color: ${select('borderColors.disabled')};
    border-style: ${select('borderStyle')};
    border-width: ${select('borderWidth')};
    color: ${select('colors.disabled')};
  }
  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right-color: ${select('borderColors.disabled')};
    border-right-style: ${select('borderStyle')};
    border-right-width: ${select('borderWidth')};
  }
  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: ${select('backgrounds.disabled')};
    color: ${select('colors.disabled')};
  }
`;

class Select extends React.Component {
  static propTypes = {
    /**
     * Whether to blur the component upon selection
     */
    autoBlur: PropTypes.bool,
    /**
     * Whether to focus the component on mount
     */
    autoFocus: PropTypes.bool,
    /**
     * Whether to close the menu when a value is selected
     */
    closeOnSelect: PropTypes.bool,
    /**
     * Whether pressing backspace will clear a value.
     */
    deleteRemoves: PropTypes.bool,
    /**
     * delimiter to use to join multiple values for the hidden field value
     */
    delimiter: PropTypes.string,
    /**
     * method to filter a single option (option, filterString)
     */
    filterOption: PropTypes.func,
    /**
     * boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
     */
    filterOptions: PropTypes.func,
    /**
     * whether to strip diacritics when filtering
     */
    ignoreAccents: PropTypes.bool,
    /**
     * whether to perform case-insensitive filtering
     */
    ignoreCase: PropTypes.bool,
    /**
     * custom attributes for the Input
     */
    inputProps: PropTypes.object,
    /**
     * controls whether the component renders in a loading state
     */
    isLoading: PropTypes.bool,
    /**
     * Enables multi-select mode
     */
    multi: PropTypes.bool,
    /**
     * The name to apply to the input field
     */
    name: PropTypes.string,
    /**
     * Handler for blur events on the input
     */
    onBlur: PropTypes.func,
    /**
     * Handler for closing the options list
     */
    onClose: PropTypes.func,
    /**
     * Handler for focus events on the input
     */
    onFocus: PropTypes.func,
    /**
     * Handles raw input change events
     */
    onInputChange: PropTypes.func,
    /**
     * Handles raw input key down events
     */
    onInputKeyDown: PropTypes.func,
    /**
     * Handler for opening the options list
     */
    onOpen: PropTypes.func,
    /**
     * Handler for when an option is selected (value, event) => {}
     */
    onValueClick: PropTypes.func,
    /**
     * Text or node to show if none is selected
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether this field is required for form submission. Non-required fields allow none.
     */
    required: PropTypes.bool,
    /**
     * A list of selection options. Can be complex objects.
     */
    options: PropTypes.array.isRequired,
    /**
     * A function which takes an option and renders text for the select. Has
     * a sane default.
     */
    renderOption: PropTypes.func,
    /**
     * A function which takes an option and computes a single string value to
     * represent it. Has a sane default.
     */
    getOptionValue: PropTypes.func,
    /**
     * The currently selected value.
     */
    value: PropTypes.any,
    /**
     * Handler for change events on the select. It will be called with the new value
     * computed from getOptionValue.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Whether to enable searching to filter to the desired item.
     */
    searchable: PropTypes.bool,
    /**
     * Alias for isLoading
     */
    loading: PropTypes.bool,
    /**
     * DEPRECATED: use getOptionValue
     */
    selectOptionValue: PropTypes.func,
    /**
     * DEPRECATED: use required to prevent None, or omit it to allow None
     */
    allowNone: PropTypes.bool,
    /**
     * DEPRECATED: use placeholder
     */
    noneText: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    allowNone: false,
    placeholder: 'None',
    renderOption: selectOptionPrimaryValue,
    getOptionValue: selectOptionPrimaryValue,
    searchable: false,
  };

  /**
   * Takes the options provided and converts them into
   * react-select options using user-provided conversion
   * functions to generate a displayed label and a backing value
   *
   * @memberof Select
   */
  convertOptions = () => {
    const {
      options,
      renderOption,
      getOptionValue,
      selectOptionValue,
    } = this.props;

    return options.map((opt) => ({
      label: renderOption(opt),
      value: (getOptionValue || selectOptionValue)(opt),
    }));
  };

  /**
   * Intercepts the change event and calls the onChange prop
   * with the value alone.
   *
   * @memberof Select
   */
  handleChange = (newValue) => {
    if (!newValue) {
      this.props.onChange(newValue);
    } else if (this.props.multi) {
      this.props.onChange(newValue.map((item) => item.value));
    } else {
      this.props.onChange(newValue.value);
    }
  };

  render() {
    const { required, placeholder, noneText, allowNone, isLoading, loading } = this.props;
    const combinedLoading = loading || isLoading;
    const combinedPlaceholder = placeholder || noneText;

    return (
      <Container>
        <LibSelect
          {...this.props}
          options={this.convertOptions()}
          onChange={this.handleChange}
          clearable={!required || allowNone}
          placeholder={combinedLoading ? <Loader size="14px" /> : combinedPlaceholder}
          isLoading={combinedLoading}
        />
      </Container>
    );
  }
}

export default Select;
