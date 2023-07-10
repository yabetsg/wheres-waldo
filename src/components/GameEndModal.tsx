interface GameEndModalProps {
  handleSubmit: () => void;
  inputRef: React.Ref<HTMLInputElement>;
  timeRef: React.Ref<HTMLDivElement>;
  minute: string;
  second: string;
}

export const GameEndModal = ({
  handleSubmit,
  inputRef,
  timeRef,
  minute,
  second,
}: GameEndModalProps) => {
  return (
    <div className="flex absolute text-xl z-[999] font-semibold justify-center items-center rounded-3xl flex-col bg-gray-200 text-black top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[450px] h-[400px]  text-center gap-6 font-serif">
      <form
        action="/leaderboard"
        method="get"
        onSubmit={handleSubmit}
        className="flex flex-col w-64 gap-4"
      >
        <div>
          <div className="text-2xl font-bold ">Your Time:</div>
          <div
            className="text-red-500 font-['digital-clock-font',ui-serif,Georgia] text-3xl"
            ref={timeRef}
          >
            {minute}:{second}
          </div>
        </div>

        <input
          ref={inputRef}
          className="p-2 text-sm font-thin text-center bg-white focus:placeholder:text-transparent"
          placeholder="Enter your name"
        ></input>

        <button
          className="pt-2 pb-2 pl-6 pr-6 font-bold text-black bg-blue-300 rounded-md hover:bg-blue-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
