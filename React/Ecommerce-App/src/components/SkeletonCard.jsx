function SkeletonCard() {
  return (
    <div className="border rounded-lg p-4 shadow animate-pulse">
      <div className="h-40 bg-gray-300 w-full mb-3 rounded"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
    </div>
  );
}

export default SkeletonCard;
