type SpotifyPlayerProps = {
  className?: string;
};

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({
  className,
}: SpotifyPlayerProps) => {
  return (
    <>
        <div className="flex bg-stone-950 w-[400px] shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col w-full">
            <div className="flex p-2">
              <img
                className="w-20 h-20 object-cover"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />
              <div className="flex flex-col px-2 w-full">
                <span className="text-xs text-gray-700 uppercase font-medium ">
                  now playing
                </span>
                <span className="text-sm text-white-500 capitalize font-semibold pt-1">
                  The Weekend
                </span>
                <span className="text-xs text-gray-500 uppercase font-medium ">
                    Blinding Lights
                </span>
              </div>
            </div>
            <div className="flex flex-col p-2 w-full">
              <div className="relative w-full px-2 mb-2">
                <div className="bg-gray-500 h-2 w-full rounded-lg"></div>
                <div className="bg-white h-2 w-[60%] rounded-lg absolute top-0"></div>
              </div>
              <div className="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
                <span className="text-xs text-white uppercase font-medium pl-2">
                  02:00/04:00
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default SpotifyPlayer;
