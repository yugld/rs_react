type AppErrorProps = {
  error: string;
};

function AppError({ error }: AppErrorProps) {
  return <div>{error}</div>;
}

export default AppError;
