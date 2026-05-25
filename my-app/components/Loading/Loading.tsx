import { Circles } from 'react-loader-spinner';

const Load = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Circles
        height='40'
        width='40'
        color='#666'
        ariaLabel='loading'
      />
    </div>
  );
};

export default Load;
