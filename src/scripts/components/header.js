import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Header extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOut);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleClickOut);
  }

  handleClick() {
    if (this.state.active === true) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  handleClickOut(event) {
    if (['menu__dropdown', 'menu__subreddit'].includes(event.target.className)) return;
    this.setState({ active: false });
  }

  render() {
    const { value, onChange, options } = this.props;
    const classes = classnames('menu', { 'menu--opened': this.state.active });

    return (
      <div className="header">
        <div className="logo"><img onClick={() => onChange('videos')} src="/img/vose.svg" alt="vose.tv" /></div>
        <div className={classes}>
          <ul className="menu__dropdown">
            {options.map(
              option => <li key={option} className={value === option ? 'menu__active' : null} onClick={() => onChange(option)}>{option}</li>
            )}
          </ul>
        </div>
        <div className="menu__button" onClick={this.handleClick}>
          <h1 className="menu__subreddit">{value}</h1>
        </div>
      </div>
    );
  }
}
