import { useState, useCallback } from 'react';
import { Button } from '@components/ui';
import { ERROR } from '@config';

function ErrorButton() {
  const [isError, setIsError] = useState(false);

  const handleClick = useCallback(() => {
    setIsError(true);
  }, []);

  if (isError) {
    throw new Error(ERROR.ERROR_BUTTON);
  }

  return (
    <div className="flex justify-center">
      <Button style="secondary" onClick={handleClick}>
        Error Button
      </Button>
    </div>
  );
}

export default ErrorButton;
