import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <DNA
        visible={true}
        height="20"
        width="40"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
