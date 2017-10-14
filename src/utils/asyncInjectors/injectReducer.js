import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getAsyncInjectors from './getAsyncInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} name A name of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ name, reducer }) => (WrappedComponent) => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withReducer(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    componentWillMount() {
      const { injectReducer } = this.injectors;

      injectReducer(name, reducer);
    }

    injectors = getAsyncInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};