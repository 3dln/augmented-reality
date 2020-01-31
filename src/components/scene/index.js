import React from 'react';

import Box from '../box';
import Text from '../text';
import SceneWrapper from './styles';

const Scene = ({ component }) => {
  const componentType = {
    box: Box,
    text: Text
  };
  const Component = componentType[component];

  return (
    <SceneWrapper>
      <a-scene embedded arjs="trackingMethod: best;">
        <Component />
        <a-camera-static />
      </a-scene>
    </SceneWrapper>
  );
};

export default Scene;
