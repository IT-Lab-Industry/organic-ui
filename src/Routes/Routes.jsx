import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layout/Dashboard/DashboardLayout'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import ProductsList from '../pages/Admin/Products/ProductsList'
import AddProduct from '../pages/Admin/Products/AddProduct'
import ProductsDetails from '../pages/Admin/Products/ProductsDetails'
import Categories from '../pages/Admin/Products/Categories'
import AddAttributes from '../pages/Admin/Products/Attributes/AddAttributes'
import OrderList from '../pages/Admin/Order/OrderList'
import Theme from '../pages/Theme'
import ErrorPage from '../pages/Admin/Error/ErrorPage'
import CouponsList from '../pages/Admin/Coupons/CouponsList'
import CreateCoupon from '../pages/Admin/Coupons/CreateCoupon'
import OrderTracking from '../pages/Admin/Order/OrderTracking'
import BlogList from '../pages/Admin/Blogs/BlogList'
import BlogCategories from '../pages/Admin/Blogs/BlogCategories'
import BlogAdd from '../pages/Admin/Blogs/BlogAdd'
import BlogTags from '../pages/Admin/Blogs/BlogTags'
import UploadedFiles from '../pages/Admin/UploadedFiles/UploadedFiles'
import CampaignAdd from '../pages/Admin/Campaign/CampaignAdd'
import CampaignList from '../pages/Admin/Campaign/CampaignList'
import Banner from '../pages/Admin/Banner/Banner'
import UserList from '../pages/Admin/User/UserList'
import UserProfile from '../pages/Admin/User/UserProfile'
import UserProfileSettings from '../pages/Admin/User/UserProfileSettings'
import SignIn from '../pages/Admin/Auth/SignIn'
import SignUp from '../pages/Admin/Auth/SignUp'
import FrontendLayout from '../layout/Frontend/FrontendLayout'
import HomePage from '../pages/Frontend/Home/HomePage'
import Brand from '../pages/Admin/Products/Brand/Brand'
import AddValue from '../pages/Admin/Products/Attributes/AddValue'
import PointOfSale from '../pages/Admin/POS/PointOfSale'
import Language from '../pages/Admin/Language/Language'
import CategoryProduct from '../pages/Frontend/CategoryProduct/CategoryProduct'
import CartProduct from '../pages/Frontend/CartProduct/CartProduct'
import ProductDetails from '../pages/Frontend/Product/ProductDetails'
import Login from '../pages/Frontend/Auth/Login/Login'
import Register from '../pages/Frontend/Auth/Register/Register'
import DashboardForgotPassword from '../pages/Admin/Auth/DashboardForgotPassword'
import ForgetPassword from '../pages/Frontend/Auth/Forgot/ForgetPassword'
import VendorShop from '../pages/Frontend/VendorShop/VendorShop'
import Checkout from '../pages/Frontend/Checkout/Checkout'
import CustomerPanel from '../pages/Frontend/CustomerPanel/CustomerPanel'
import CategoriesV2 from '../pages/Admin/Products/Categories/CategoriesV2'
import EditCategoriesV2 from '../pages/Admin/Products/Categories/EditCategoriesV2'
import AddProductV2 from '../pages/Admin/Products/AddProductV2/AddProductV2'
import EditAttributes from '../pages/Admin/Products/Attributes/EditAttributes'
import CustomerDashboard from '../pages/Frontend/CustomerPanel/CustomerDashboard'
import CuctomerWallet from '../pages/Frontend/CustomerPanel/CuctomerWallet'
import Unit from '../pages/Admin/Products/Units/Unit'
import AddVendor from '../pages/Admin/Vendor/AddVendor'
import VendorList from '../pages/Admin/Vendor/VendorList'
import VendorProfile from '../pages/Admin/Vendor/VendorProfile'
import CustomerOrder from '../pages/Frontend/CustomerPanel/CustomerOrder'
import CustomerWishlist from '../pages/Frontend/CustomerPanel/CustomerWishlist'
import CustomerProfile from '../pages/Frontend/CustomerPanel/CustomerProfile'
// import TermsConditions from '../pages/Frontend/TermsConditions/TermsConditions'
// import RefundPolicy from '../pages/Frontend/RefundPolicy/RefundPolicy'
// import HelpCenter from '../pages/Frontend/HelpCenter/HelpCenter'
// import ContactUs from '../pages/Frontend/ContactUs/ContactUs'
import Filter from '../pages/Frontend/Filter/Filter'

const FRONTEND_ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/product/:slug', element: <ProductDetails /> },
  { path: '/category/:slug', element: <CategoryProduct /> },
  { path: '/cart', element: <CartProduct /> },
  
  
  { path: '/filter', element: <Filter /> },
  { path: '/vendorshop/1', element: <VendorShop /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/user/login', element: <Login /> },
  { path: '/user/register', element: <Register /> },
  { path: '/user/forget-password', element: <ForgetPassword /> },
  // { path: '/terms-conditions', element: <TermsConditions /> },
  // { path: '/refund-policy', element: <RefundPolicy /> },
  // { path: '/help-center', element: <HelpCenter /> },
  // { path: '/contact-us', element: <ContactUs /> },
]

const CUSTOMER_PANEL_ROUTES = [
  { path: 'user/dashboard', element: <CustomerDashboard /> },
  { path: 'user/wallet', element: <CuctomerWallet /> },
  { path: 'user/orders', element: <CustomerOrder /> },
  { path: 'user/wishlist', element: <CustomerWishlist /> },
  { path: 'user/profile', element: <CustomerProfile /> },
]

const DASHBOARD_ROUTES = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: 'dashboard/products-list', element: <ProductsList /> },
  { path: 'dashboard/add-product', element: <AddProduct /> },
  { path: 'dashboard/add-productV2', element: <AddProductV2 /> },
  { path: 'dashboard/products-details', element: <ProductsDetails /> },
  { path: 'dashboard/category', element: <Categories /> },
  { path: 'dashboard/categoryV2', element: <CategoriesV2 /> },
  { path: 'dashboard/categoryV2/edit', element: <EditCategoriesV2 /> },
  { path: 'dashboard/brand', element: <Brand /> },
  { path: 'dashboard/unit', element: <Unit /> },
  { path: 'dashboard/attributes', element: <AddAttributes /> },
  {
    path: '/dashboard/attributes/edit/:attributeId',
    element: <EditAttributes />,
  },
  { path: 'dashboard/attributes/add-value/1', element: <AddValue /> },
  { path: 'dashboard/coupons-list', element: <CouponsList /> },
  { path: 'dashboard/create-coupon', element: <CreateCoupon /> },
  { path: 'dashboard/user-list', element: <UserList /> },
  { path: 'dashboard/user-profile', element: <UserProfile /> },
  { path: 'dashboard/userprofile-settings', element: <UserProfileSettings /> },
  { path: 'dashboard/add-vendor', element: <AddVendor /> },
  { path: 'dashboard/vendor-list', element: <VendorList /> },
  { path: 'dashboard/vendor-profile/:id', element: <VendorProfile /> },
  { path: 'dashboard/order-list', element: <OrderList /> },
  { path: 'dashboard/blog-list', element: <BlogList /> },
  { path: 'dashboard/blog-category', element: <BlogCategories /> },
  { path: 'dashboard/add-post', element: <BlogAdd /> },
  { path: 'dashboard/blog-tag', element: <BlogTags /> },
  { path: 'dashboard/banner', element: <Banner /> },
  { path: 'dashboard/uploaded-files', element: <UploadedFiles /> },
  { path: 'dashboard/campaign-add', element: <CampaignAdd /> },
  { path: 'dashboard/campaign-list', element: <CampaignList /> },
  // { path: 'dashboard/settings', element: <Settings /> },
  { path: 'dashboard/settings/language', element: <Language /> },
  { path: 'dashboard/pos', element: <PointOfSale /> },
  { path: 'dashboard/theme', element: <Theme /> },
  { path: 'dashboard/order-tracking', element: <OrderTracking /> },
]

const AUTH_ROUTES = [
  { path: 'dashboard/signin', element: <SignIn /> },
  { path: 'dashboard/signup', element: <SignUp /> },
  {
    path: 'dashboard/signin/forgetpassword',
    element: <DashboardForgotPassword />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      ...FRONTEND_ROUTES,
      {
        path: '/',
        element: <CustomerPanel />,
        children: CUSTOMER_PANEL_ROUTES,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: DASHBOARD_ROUTES,

  },
  ...AUTH_ROUTES,
])

export default router
