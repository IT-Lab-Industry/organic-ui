import { Link } from 'react-router-dom'
import { CiSettings, CiShoppingBasket } from 'react-icons/ci'
import { MdCampaign, MdOutlineArticle } from 'react-icons/md'
import { SidebarDropdown, SidebarItem } from '../../../utility/SidebarDropdown'
import images from '../../../assets/img/images'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiDollarCircle } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'

export default function SideBar({ isSideBarOpen }) {
  return (
    <aside
      className={`main-content overflow-y-auto bg-darkColor lg:block hidden ${
        isSideBarOpen
          ? 'w-0 transition-width duration-500 ease-in-out sm:block'
          : 'w-64 transition-width duration-500 ease-in-out sm:block'
      }`}
    >
      {isSideBarOpen ? (
        <></>
      ) : (
        <div className="sideBarOpenCollapse">
          <div className="pt-2">
            <Link to="/dashboard">
              <img src={images.Logo} alt="" className="w-[150px] mx-auto" />
            </Link>
          </div>
          <div className="pt-4">
            <ul className="flex flex-col gap-2">
              {/* Dashboard */}
              <li id="sidebar">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 mt-10 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                >
                  <RxDashboard />

                  <span className="text-sm font-medium">Overview</span>
                </Link>
              </li>

              {/* Products */}
              <SidebarDropdown title="Products" icon={<CiShoppingBasket />}>
                <SidebarItem
                  title="Products List"
                  to="dashboard/products-list"
                />
                <SidebarItem title="Add Products" to="dashboard/add-product" />
                <SidebarItem title="Category" to="dashboard/category" />
                <SidebarItem title="Brand" to="dashboard/brand" />
              </SidebarDropdown>

              {/* Order */}
              <SidebarDropdown title="Order" icon={<BsCart />}>
                <SidebarItem title="Order List" to="dashboard/order-list" />
              </SidebarDropdown>

              {/* Campaign */}
              <SidebarDropdown title="Campaign" icon={<MdCampaign />}>
                <SidebarItem
                  title="Campaign List"
                  to="dashboard/campaign-list"
                />
                <SidebarItem title="Campaign Add" to="dashboard/campaign-add" />
              </SidebarDropdown>

              {/* Coupons */}
              <SidebarDropdown title="Coupons" icon={<BiDollarCircle />}>
                <SidebarItem title="Coupons List" to="dashboard/coupons-list" />
                <SidebarItem title="Coupons Add" to="dashboard/create-coupon" />
              </SidebarDropdown>

              {/* User */}
              <SidebarDropdown title="Customer" icon={<HiOutlineUserGroup />}>
                <SidebarItem title="Customer List" to="dashboard/user-list" />
              </SidebarDropdown>

              {/* Blog post */}
              <SidebarDropdown title="Blog Post" icon={<MdOutlineArticle />}>
                <SidebarItem title="Post List" to="dashboard/blog-list" />
                <SidebarItem title="Post Add" to="dashboard/add-post" />
                <SidebarItem
                  title="Post Category"
                  to="dashboard/blog-category"
                />
                <SidebarItem title="Post Tag" to="dashboard/blog-tag" />
              </SidebarDropdown>

              <li id="sidebar">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                >
                  <CiSettings />
                  <span className="text-sm font-medium">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </aside>
  )
}
