interface NavMobileProps {}
export default function NavMobile(props: NavMobileProps) {
  return (
    <div className="flex flex-row items-center py-4 lg:py-0">
      <div className="relative text-gray-900 hover:text-black block lg:hidden">
        <button
          type="button"
          className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
        >
          <span className="sr-only">Mobile menu</span>
          <svg
            className="open h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="close bi bi-x-lg h-8 w-8"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fillRule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
