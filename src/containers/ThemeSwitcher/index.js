import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/themeSwitcher/actions.js';
import ThemeSwitcherStyle from './themeSwitcher.style';

const { switchActivation, changeTheme } = Actions;
class ThemeSwitcher extends Component {
  render() {
    const {
      isActivated,
      // changeThemes,
    } = this.props;
    return (
      <ThemeSwitcherStyle
        className={isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher'}
      >
      </ThemeSwitcherStyle>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.ThemeSwitcher,
    LanguageSwitcher: state.LanguageSwitcher
  };
}
export default connect(mapStateToProps, {
  switchActivation,
  changeTheme
})(ThemeSwitcher);
