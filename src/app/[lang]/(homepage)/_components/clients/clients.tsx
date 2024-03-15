"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const images = [
  { src: "src/img/dummy/img1.png", alt: "Image Description 1" },
  { src: "src/img/dummy/img2.png", alt: "Image Description 2" },
  { src: "src/img/dummy/img3.png", alt: "Image Description 3" },
  { src: "src/img/dummy/img4.png", alt: "Image Description 4" },
  { src: "src/img/dummy/img5.png", alt: "Image Description 5" },
  { src: "src/img/dummy/img6.png", alt: "Image Description 6" },
];

const options = {
  rewind: true,
  pagination: true,
  arrows: true,
  type: "loop",
  drag: "free",
  perPage: 6,
  perMove: 1,
  gap: 24,
  breakpoints: {
    1200: {
      perPage: 4,
    },
    768: {
      perPage: 3,
    },
    500: {
      perPage: 2,
    },
  },
};

export default function Clients() {
  return (
    <div
      id="clients"
      className="section relative py-8 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="lex flex-wrap flex-row -mx-4 justify-center">
          <div className="w-full px-4">
            {/* slider client */}
            <div
              id="post-carousel"
              className="navslider-hover splide post-carousel"
            >
              <Splide options={options}>
                {images.map((image, index) => (
                  <SplideSlide key={index}>
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src={image.src}
                          alt={image.alt}
                        />
                      </a>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/* end slider client */}
          </div>
        </div>
      </div>
    </div>
  );
}
