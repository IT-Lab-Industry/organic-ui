import { BsArrowRight } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const SidebarDropdown = ({ title, icon, children }) => (
  <li>
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex gap-3 cursor-pointer items-center mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
        <span>{icon}</span>
        <span className="flex items-center justify-between w-full">
          <span className="text-sm font-medium">{title}</span>
          <span className="shrink-0 transition-all duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </summary>
      <ul className="space-y-1 list-none">{children}</ul>
    </details>
  </li>
)

export const SidebarItem = ({ title, to }) => (
  <li id="sidebar">
    <NavLink
      to={to}
      className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 hover:pl-6 transition-all duration-300 pl-3"
    >
      <span className="inline-flex justify-center items-center ml-8">
        <BsArrowRight className="text-[10px]" />
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">{title}</span>
    </NavLink>
  </li>
)
