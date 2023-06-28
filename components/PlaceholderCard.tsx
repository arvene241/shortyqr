import useBreakpoints from "@/lib/hooks/useBreakpoint";

const PlaceholderCard = () => {
  const { isMobile } = useBreakpoints();

  return (
    <li className="flex items-center min-[450px]:justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg max-[450px]:gap-2 gap-0">
      <div className="h-10 w-10 rounded-full bg-gray-200" />
      <div>
        <div className="mb-2.5 flex items-center space-x-2">
          <div className="h-6 w-36 rounded-md bg-gray-200" />
          <div className="h-6 w-6 rounded-full bg-gray-200" />
          <div className="h-6 w-6 rounded-full bg-gray-200" />
        </div>
        <div className="h-4 w-72 rounded-md bg-gray-200" />
      </div>
      {isMobile ? (
        <></>
      ) : (
        <div className="h-10 w-10 rounded-full bg-gray-200" />
      )}
    </li>
  );
};

export default PlaceholderCard;
