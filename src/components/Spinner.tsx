const Spinner = () => {
  return (
    <div className="flex h-[calc(100vh/2)] w-full items-center justify-center">
      <div
        className="inline-block size-20 animate-spin rounded-full border-[5px] border-current border-t-transparent text-black"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Spinner</span>
      </div>
    </div>
  );
};

export default Spinner;
