import React from 'react';
import './App.css';
import NodeUnderTest from './NodeUnderTest';
import FeatureFlagError from './FeatureFlagError';
import ContextProvider from './Context';
import ExamplePicker from './ExamplePicker';
import TreeViewer from './TreeViewer';

const replacer = (key: string, value: any) => {
  if (key === 'parent') {
    return '{...}';
  }
  return value;
};

const App: React.FC = () => (
  <ContextProvider>
    <div
      style={{
        padding: 64,
        width: '100%',
        height: '100%'
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: '100%'
        }}>
        <NodeUnderTest />
        <div style={{ width: 32 }} />
        <div style={{ width: 32, borderLeft: '2px solid #007486' }} />
        <FeatureFlagError />
        <TreeViewer />
      </div>
    </div>
    <ExamplePicker />
  </ContextProvider>
);
export default App;
