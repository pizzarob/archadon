import React, { Component } from 'react';
import Navigation from 'Components/Navigation';
import { actions } from 'Constants';
import { dispatchAction } from 'Utils';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from 'Components/Home';
import About from 'Components/About';
import Login from 'Components/Login';
import SignInForm from 'Components/SignInForm';
import { withRouter } from 'react-router';
import '../../scss/styles.scss';
import spriteSheet from 'Images/spritesheet.svg';
import classnames from 'classnames';

function Modal({ children, open }) {
  return (
    <div className={classnames('modal', { open })}>
      <div className="modal-content">
        <div className="modal-body global-padding">
          {children}
        </div>
      </div>
    </div>
  );
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop);

class App extends Component {
  constructor() {
    super();
    this.handleBgToggle = this.handleBgToggle.bind(this);
  }

  handleBgToggle(e) {
    e.preventDefault();
    this.props.onToggleBg(!this.props.ui.showBgImage);
  }

  render() {
    return (
      <ScrollToTopWithRouter>
        <div className="layout">
          <Navigation />
          <div className="flex-grow-1 flex-parent">
            <Route path="/" exact component={Home} />
            <Route path="/(login|signup)" render={({ location }) => <SignInForm path={location.pathname} />} />
            <Route path="/account" component={About} />
            <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
          </div>
        </div>
      </ScrollToTopWithRouter>
    );
  }
}

App.propTypes = {
  onToggleBg: React.PropTypes.func,
  ui: React.PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onToggleBg(bool) {
    dispatch(dispatchAction(actions.UPDATE_UI, { showBgImage: bool }));
  },
});

const mapStateToProps = state => ({
  ui: state.ui,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
