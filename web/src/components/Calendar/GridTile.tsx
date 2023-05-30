export const GridTile = ({ disabled }: { disabled: boolean }) => {
  if (disabled) {
    return (
      <div className="flex bg-gray-500 flex-grow border-r border-b border-black" />
    );
  }
  return <div className="flex flex-grow border-r border-b border-black" />;
};
