import { useRouter } from "next/router";

function Button({ children, onClick }) {
  if (!children) {
    return null;
  }
  return (
    <div className="w-full mx-auto text-center">
      <button
        className="py-2 px-5 sm:px-10 cursor-pointer shadow-md font-semibold border-2 border-rose-700 hover:border-rose-800 rounded-full text-rose-700 hover:text-rose-800"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
