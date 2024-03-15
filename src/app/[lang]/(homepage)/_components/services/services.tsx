import { get } from "@/functions/get";
import {
  FaAndroid,
  FaCloud,
  FaCode,
  FaDesktop,
  FaHtml5,
  FaStar,
} from "react-icons/fa6";

const services = [
  {
    id: 1,
    title: "services.software_develop.title",
    desc: "services.software_develop.desc",
    icon: FaCode,
  },
  {
    id: 2,
    title: "services.mobile_app_dev.title",
    desc: "services.mobile_app_dev.desc",
    icon: FaAndroid,
  },
  {
    id: 3,
    title: "services.web_dev_service.title",
    desc: "services.web_dev_service.desc",
    icon: FaHtml5,
  },
  {
    id: 4,
    title: "services.cloud_soluttion.title",
    desc: "services.cloud_soluttion.desc",
    icon: FaCloud,
  },
  {
    id: "5",
    title: "services.qa.title",
    desc: "services.qa.desc",
    icon: FaStar,
  },
  {
    id: 6,
    title: "services.ui_ux.title",
    desc: "services.ui_ux.desc",
    icon: FaDesktop,
  },
];
interface ServicesProps {
  dict: any;
}
export default function Services({ dict }: ServicesProps) {
  const i18nServices = services.map(({ desc, id, title, icon }) => ({
    id,
    title: get(dict, title) as string,
    desc: get(dict, desc) as string,
    icon,
  }));

  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* <!-- Heading start --> */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            {dict.services.title}
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: 35 }}
            // xml:space="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              //   "fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"
            />
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              //   style="stroke-width: 2;stroke-miterlimit: 10;"
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              //   style="stroke-width: 2;stroke-miterlimit: 10;"
            ></line>
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            {dict.services.desc}
          </p>
        </header>
        {/* <!-- End heading --> */}

        {/* <!-- row --> */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {i18nServices.map(({ desc, id, title, icon: Component }) => (
            <div
              key={id}
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* <!-- icon --> */}
                  <Component width="2rem" height="2rem" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  {title}
                </h3>
                <p className="text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- end row --> */}
      </div>
    </div>
  );
}
