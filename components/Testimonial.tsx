import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  name: string;
  quote: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonial = ({ name, quote, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <h4 className="font-bold">{name}</h4>
      <p className="my-3">{quote}</p>
    </motion.div>
  );
};

export default Testimonial;
