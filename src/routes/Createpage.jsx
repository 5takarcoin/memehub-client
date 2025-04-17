import Image from "../components/Image";

function Createpage() {
  return (
    <div>
      <div className="border-y border-y-[#e9e9e9] py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Create Pin</h1>
        <button className="bg-[#e50829] hover:bg-[#c1011e] text-white font-semibold border-none outline-none p-4 rounded-4xl cursor-pointer text-sm">
          Publish
        </button>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
        <div className="bg-[#e9e9e9] text-lg flex items-center justify-center rounded-4xl border-2 border-[#dddddd] sm:w-[375px] h-[574px] border-dashed cursor-pointer p-4 relative w-full">
          <div className="flex flex-col items-center gap-4">
            <Image path={"/general/upload.svg"} />
            <span>Choose a file</span>
          </div>
          <div className="absolute bottom-8 text-xs text-center text-gray-500">
            We recommend using high quality .jpg files less than 20 files less
            than 200 MB.
          </div>
        </div>
        <form className="flex flex-col gap-8 w-full md:w-[584px]">
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <label className="text-xs" htmlFor="title">
              Title
            </label>
            <input
              className="border-2 border-[#e9e9e9] p-4 rounded-2xl"
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <label className="text-xs" htmlFor="description">
              Description
            </label>
            <textarea
              rows={6}
              className="resize-none border-2 border-[#e9e9e9] p-4 rounded-2xl"
              type="text"
              placeholder="Add a detailed description"
              name="description"
              id="description"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <label className="text-xs" htmlFor="link">
              Link
            </label>
            <input
              className="border-2 border-[#e9e9e9] p-4 rounded-2xl"
              type="text"
              placeholder="Add a link"
              name="link"
              id="link"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <label className="text-xs" htmlFor="title">
              Board
            </label>
            <select
              className="border-2 border-[#e9e9e9] p-4 rounded-2xl"
              name="board"
              id="board"
            >
              <option>Chose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <label className="text-xs" htmlFor="tags">
              Tags
            </label>
            <input
              className="border-2 border-[#e9e9e9] p-4 rounded-2xl"
              type="text"
              placeholder="Add tags"
              name="tags"
              id="tags"
            />
            <small className="text-[#a6a6a6] text-xs">{`Don't worry, people won't see your tags`}</small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createpage;
