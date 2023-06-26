const PlaceholderCard = () => {
  return (
    <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg">
      <div className="h-10 w-10 rounded-full bg-gray-200" />
      <div>
        <div className="mb-2.5 flex items-center space-x-2">
          <div className="h-6 w-36 rounded-md bg-gray-200" />
          <div className="h-6 w-6 rounded-full bg-gray-200" />
        </div>
        <div className="h-4 w-72 rounded-md bg-gray-200" />
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200" />
    </li>
  );
};

export default PlaceholderCard;
