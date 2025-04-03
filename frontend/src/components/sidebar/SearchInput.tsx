import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="rounded-full bg-gray-200 border px-3 py-1 w-full"
      />
      <button type="submit" className="">
        <Search className="w-4 h-4 md:w-6 md:h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
