import { navigationLinks, websiteInformation } from "../../constants";

const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <div className="flex py-20 bg-pastelgreen text-gunmetal">
      <ul className="my-auto ml-auto mr-6 p-4 capitalize text-periwinkle">
        {navigationLinks.map((link) => (
          <li key={link.key} className="hover:text-gray-600">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className="my-auto mr-auto pl-6 text-periwinkle border-l border-gray-800">
        {socials.map(({ key, name, link, logo: Logo }) => (
          <li key={key} className="hover:text-gray-600">
            <a href={link} className="flex space-x-2 ">
              <Logo className="my-auto" />
              <p className="m-auto">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
