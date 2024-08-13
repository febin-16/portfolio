import {DonwloadCVButton} from 'components/DownloadCVButton';
import {TypeAnimation} from 'react-type-animation';

export const Home = () => {

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex w-full flex-col items-center py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{'<'}</span>Hi 👋 my name is
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Febin P Biju <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">{'/>'}</span>{' '}
          </h1>
          <TypeAnimation
            sequence={['Frontend Developer', 1000, 'React Developer', 1000]}
            wrapper="span"
            speed={1}
            style={{
              paddingTop: '8px',
              fontWeight: '300',
              fontSize: '1.5rem',
              color: '#768390',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />
          <div className="mt-10 flex w-full flex-col sm:flex-row">
            <DonwloadCVButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
