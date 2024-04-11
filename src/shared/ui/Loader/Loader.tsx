import { FunctionComponent } from 'react';
import * as Loaders from 'react-loader-spinner';
import { BaseProps } from 'react-loader-spinner';

import styles from './Loader.module.scss';

export interface LoaderProps extends BaseProps{
    name: keyof typeof Loaders;
    // eslint-disable-next-line react/require-default-props
    width?: string;
    // eslint-disable-next-line react/require-default-props
    height?: string;

}
const Loader: FunctionComponent<LoaderProps> = ({
  name, width, height, ...props
}) => {
  const LoaderComponent = Loaders[name];

  return (
      <LoaderComponent
        height={height}
        width={width}
        wrapperClass={styles.loaderWrapper}
        {...props}
      />
  );
};

export default Loader;
