import ContactForm from "./contact.form";

interface ContactsProps {
  dict: any;
}

export default function Contacts({ dict }: ContactsProps) {
  return (
    <div
      id="contact"
      className="section relative pb-20 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          <div className="max-w-ful px-4 w-full lg:w-8/12">
            <div
              className="bg-gray-50 border-b border-gray-100 w-full p-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <header className="text-center mx-auto mb-12 lg:px-20">
                <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                  {/* <span className="font-light">Contact</span> Us */}
                  {dict.contact_us.title}
                </h2>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 60"
                  style={{ margin: "0 auto", height: "35px" }}
                  xmlSpace="preserve"
                >
                  <circle
                    cx="50.1"
                    cy="30.4"
                    r="5"
                    className="stroke-primary"
                    style={{
                      fill: "transparent",
                      strokeWidth: "2",
                      strokeMiterlimit: "10",
                    }}
                  />
                  <line
                    x1="55.1"
                    y1="30.4"
                    x2="100"
                    y2="30.4"
                    className="stroke-primary"
                    style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
                  />
                  <line
                    x1="45.1"
                    y1="30.4"
                    x2="0"
                    y2="30.4"
                    className="stroke-primary"
                    style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
                  />
                </svg>
                <p className="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                  {dict.contact_us.desc}
                </p>
              </header>
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
