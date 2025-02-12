import { websiteInformation } from "../../constants";
import { motion } from "framer-motion";

const { socials } = websiteInformation[0];

const SocialTiles = () => {
  return (
    <div className="flex w-fit mx-auto space-x-8 border-t border-black border-dashed px-4 pb-4 pt-8">
      {" "}
      {socials.map(({ key, name, link, logo: Logo, accountName }) => (
        <div key={key} className="w-fit text-center">
          <motion.a
            href={link}
            className="flex flex-col"
            whileHover={{ y: -4 }}
          >
            <Logo size={60} color="" className="mx-auto" />
            <div className="sm:text-lg">
              <p className="font-semibold ">{name}</p>
              <p className=" text-slate-800">{accountName}</p>
            </div>
          </motion.a>
        </div>
      ))}
    </div>
  );
};

export default SocialTiles;
