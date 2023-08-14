import React from "react";

type ActivityStatusProps = {
  status: "active" | "dnd" | "idle";
  className?: string;
};

const ActivityStatus: React.FC<ActivityStatusProps> = ({
  status,
  className
}: ActivityStatusProps) => {
  return (
    <>
        <span className={`p-1 h-4 w-4 bg-green-600 rounded-full inline-flex justify-center items-center animate-pulse
        ${className}
        `}>
            <span className="h-2 w-2 bg-green-400 rounded-full animate-none"></span>
        </span>
    </>
  );
};

export default ActivityStatus;
