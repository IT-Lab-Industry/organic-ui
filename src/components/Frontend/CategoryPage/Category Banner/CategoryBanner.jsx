import images from '../../../../assets/img/images'

export default function CategoryBanner() {
  return (
    <section className="">
      <div
        className="category_banner bg-cover bg-center object-cover h-[270px] relative"
        style={{
          backgroundImage: `url(${images.categoryImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-md"></div>
        <div className="category_content absolute top-0 bottom-[90px] left-0 right-0 flex items-center flex-col justify-center">
          <h2 className="text-center text-[38px] font-semibold leading-[42px] text-ftPrimaryColor">
            Apparel & Accessories
          </h2>
          <p className="text-center text-[20px] font-medium text-darkColorText">
            Discover new and trending products
          </p>
        </div>
      </div>
    </section>
  )
}
