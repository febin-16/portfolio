import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';
import { useState } from 'react';
export const DonwloadCVButton = ({isSmall}: {isSmall?: boolean}) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Fetch the PDF file
      const response = await fetch('/FEBIN_P_BIJU_RESUME.pdf');
      if (!response.ok) throw new Error('Download failed');
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'FEBIN_P_BIJU_RESUME.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Revoke the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <button
      title="download cv"
      onClick={handleDownload}
      disabled={isLoading}
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      {isLoading ? 'Downloading...' : 'Download CV'}
    </button>
  ) : (
    <button
      title="download cv"
      onClick={handleDownload}
      disabled={isLoading}
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      {isLoading ? 'Downloading...' : 'Download CV'}
    </button>
  );
};
