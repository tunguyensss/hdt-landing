import Menu from "./menu";

interface HeaderProps {
  dict: any;
}
export default function Header({ dict }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="main-nav">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-between">
              <div className="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">
                HDT Solutions
              </div>
              {/* <NavMobile /> */}
            </div>

            <div className="flex flex-row">
              {/* <!-- nav menu --> */}
              <Menu dict={dict} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
