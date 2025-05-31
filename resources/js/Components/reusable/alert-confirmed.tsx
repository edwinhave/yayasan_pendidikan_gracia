import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/Components/ui/alert-dialog';
import { CircleAlert, CircleCheckBigIcon, CircleX } from 'lucide-react';
import { Button } from '../ui/button';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface AlertConfirmedProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  error?: SerializedError | FetchBaseQueryError; // Marking error as optional
  description: string;
  onConfirmSuccess?: () => void;
  onConfirmError?: () => void;
  confirmText?: string;
  confirmTextError?: string;
}

interface IExtendSerializeError extends SerializedError {
  error_report_url: string;
}

// Type guard function
const isFetchBaseQueryError = (
  error: SerializedError | FetchBaseQueryError,
): error is FetchBaseQueryError => {
  return !!(error && (error as FetchBaseQueryError).data !== undefined);
};

const AlertConfirmed: React.FC<AlertConfirmedProps> = ({
  open,
  onOpenChange,
  isError,
  error,
  description,
  onConfirmSuccess,
  onConfirmError,
  confirmText,
  confirmTextError,
}) => {
  const [errorWithUrl, setErrorWithUrl] = useState<boolean>(false);

  useEffect(() => {
    if (!error) {
      setErrorWithUrl(false);
      return;
    }

    let errorFileUrl: string | undefined;

    if (isFetchBaseQueryError(error) && error.data && isError) {
      const data = error.data as IExtendSerializeError;
      errorFileUrl = data.error_report_url;
    }

    setErrorWithUrl(!!errorFileUrl);
  }, [error, isError]);

  const downloadError = () => {
    if (!error) {
      console.error('No error available.');
      return;
    }

    if (isFetchBaseQueryError(error) && error.data) {
      const data = error.data as IExtendSerializeError;
      const errorFileUrl = data.error_report_url;

      if (errorFileUrl) {
        const a = document.createElement('a');
        a.href = errorFileUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error('Error report URL is undefined.');
      }
    } else {
      console.error('No error report URL available.');
    }

    onOpenChange(false);
  };

  const handleCloseError = () => {
    if (onConfirmError) {
      onConfirmError();
    }
    setErrorWithUrl(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader className='pt-10'>
          <div className='flex justify-center'>
            {errorWithUrl && error && (
              <CircleAlert
                className='text-warning'
                style={{ width: '32px', height: '32px' }}
              />
            )}
            {!errorWithUrl && (
              <div>
                {isError && error ? (
                  <CircleX
                    className='text-destructive'
                    style={{ width: '32px', height: '32px' }}
                  />
                ) : (
                  <CircleCheckBigIcon
                    className='text-success'
                    style={{ width: '32px', height: '32px' }}
                  />
                )}
              </div>
            )}
          </div>
          <AlertDialogTitle className='text-center pt-1 text-3xl'>
            {errorWithUrl && error && 'Invalid Data Found'}
            {!errorWithUrl && (
              <div>{isError && error ? 'Error' : 'Success'}</div>
            )}
          </AlertDialogTitle>
          {isError ? (
            <AlertDialogDescription className='text-center'>
              {error && 'data' in error
                ? (error.data as SerializedError).message
                : (error as FetchBaseQueryError)?.status}
            </AlertDialogDescription>
          ) : (
            <AlertDialogDescription className='text-center'>
              {description}
            </AlertDialogDescription>
          )}
          <div className='pt-5 flex align-middle justify-center gap-5'>
            {isError && error ? (
              <Button onClick={handleCloseError} variant='outline'>
                {confirmTextError ?? 'OK'}
              </Button>
            ) : (
              <Button onClick={onConfirmSuccess} variant='outline'>
                {confirmText ?? 'OK'}
              </Button>
            )}
            {errorWithUrl && (
              <Button variant='destructive' onClick={downloadError}>
                Download Invalid Data List
              </Button>
            )}
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertConfirmed;
