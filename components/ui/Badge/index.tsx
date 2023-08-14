export enum BadgeVariant {
  primary = "bg-gray-200 text-gray-700 hover:bg-gray-300",
  secondary = "bg-stone-900 text-gray-400 hover:bg-stone-800",
}

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
  variant?: BadgeVariant;
};

const Badge: React.FC<BadgeProps> = ({ className, children, variant }: BadgeProps) => {
  return (
    <>
      <div className={`rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2
        ${variant}
        ${className}
      `}>
        {children}
      </div>
    </>
  );
};

export default Badge;
