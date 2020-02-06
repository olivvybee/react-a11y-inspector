import React from 'react';

const FeatureFlagError: React.FC = () => {
  const requiredApi = (window as any).getComputedAccessibleNode;
  if (requiredApi || typeof requiredApi === 'function') {
    return null;
  }

  return (
    <>
      <p style={{ fontSize: '1.5rem' }}>
        Required API not available. Enable the{' '}
        <strong>Experimental Web Platform features</strong> feature flag in
        Chrome to display the accessbility tree.
      </p>
      <p>
        Copy and paste this link into Chrome to jump to the flag:{' '}
        <strong>
          chrome://flags/#enable-experimental-web-platform-features
        </strong>
      </p>
    </>
  );
};

FeatureFlagError.displayName = 'FeatureFlagWarning';

export default FeatureFlagError;
