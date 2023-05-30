export const GridTile = ({
  disabled,
  onMouseDown
}: {
  disabled: boolean;
  onMouseDown: (e: any) => void;
}) => {
  if (disabled) {
    return (
      <div className="flex bg-gray-500 flex-grow border-r border-b border-black" />
    );
  }
  return (
    <div
      onMouseDown={onMouseDown}
      className="flex flex-grow border-r border-b border-black"
    />
  );
};
