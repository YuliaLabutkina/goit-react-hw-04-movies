import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import LoaderContainer from './PreLoader.styles';

const PreLoader = () => {
  return (
    <LoaderContainer>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </LoaderContainer>
  );
};

export default PreLoader;
