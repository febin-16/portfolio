import {useDownloadPdf} from 'hooks/useDownloadPdf';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const DonwloadCVButton = ({isSmall}: {isSmall?: boolean}) => {

  

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <a
      title="download cv"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit' : '/FEBIN_P_BIJU_RESUME'}  btn`}
      href=""
    >
      Download CV
    </a>
  ) : (
    <a
      title="download cv"
      href='https://drive.google.com/file/d/1PrxGpxbL-Fm7i1W04ouV4hFyaX0tkbGZ/view?usp=drive_link'
      target='_blank'
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      Download CV
    </a>
  );
};
