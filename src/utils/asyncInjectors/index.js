import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getAsyncInjectors from './getAsyncInjectors';

export default ({ name, reducer }, epics) => (WrappedComponent) => {
  class AsyncInjectors extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `asyncInjectors(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    componentWillMount() {
      const { injectReducer, injectEpics } = this.injectors;

      injectReducer(name, reducer);
      epics && injectEpics(epics);
    }

    injectors = getAsyncInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(AsyncInjectors, WrappedComponent);
};
