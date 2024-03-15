const portfolioItems = [
  {
    id: 1,
    src: "/assets/svgs/coding-flatline.svg",
    title: "Quản lí hồ sơ tư pháp Tp.HCM",
    category: "Branding",
  },
  {
    id: 2,
    src: "/assets/images/mmobm.webp",
    title: "MMOBM - Cửa hàng MMO",
    category: "Web",
  },
  {
    id: 3,
    src: "/assets/svgs/coding-flatline.svg",
    title: "CMS Dropship",
    category: "Web",
  },
  {
    id: 4,
    src: "/assets/svgs/coding-flatline.svg",
    title: "CMS video tools - Douyin",
    category: "Web",
  },
  {
    id: 5,
    src: "/assets/svgs/coding-flatline.svg",
    title: "Stelna - Trà Lộc Tân Cương",
    category: "Web",
  },
  // Add other items similarly
];
interface PortfolioProps {
  dict: any;
}
export default function Portfolio({ dict }: PortfolioProps) {
  return (
    <div
      id="portfolio"
      className="section relative z-0 py-12 md:py-16 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            {dict.portfolio.title}
          </h2>
          {/* SVG omitted for brevity */}
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            {dict.portfolio.desc}
          </p>
        </header>
      </div>

      <div className="flex flex-wrap flex-row">
        {portfolioItems.map((item) => (
          <figure
            key={item.id}
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              {/* Assuming glightbox3 is initialized elsewhere */}
              <div data-gallery="gallery1" className="glightbox3">
                <img
                  className="block w-full h-auto transform duration-500 grayscale hover:grayscale-0 hover:scale-125"
                  src={item.src}
                  alt="Image Description"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    {item.title}
                  </h3>
                  <small>{item.category}</small>
                </div>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
