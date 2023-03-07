import {
  BuildingStorefrontIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ActionButton from "./ActionButton";
import HText from "./HText";
import Loan from "./Loan";
import LoansImage from "@/assets/loans-image.png";
import Image from "next/image";
const loans: Array<Loans> = [
  {
    icon: <BanknotesIcon className="h-6 w-6" />,
    title: "Private Payroll Loans",
    description:
      "These are private payroll loans that are offered to private employees through partnerships with their employers. The loans can be used for groceries, school fees, business start up, building assistance, funeral and wedding expenses etc.",
  },
  {
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
    title: "Government Payroll Loans",
    description:
      "These are salary based loans for civil servants. The loans can be used for groceries, school fees, business start-up, building assistance, funeral and wedding expenses etc..",
  },
  {
    icon: <BuildingStorefrontIcon className="h-6 w-6" />,
    title: "Business Loans",
    description:
      "These are loans for small to medium sized businesses mainly used for working capital and further investments. These loans have a repayment period of up to 6 months.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Loans = ({ setSelectedPage }: Props) => {
  return (
    <section id="loans" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage("Loans" as SelectedPage);
        }}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>OUR LOANS AND PRODUCTS</HText>
          <p className="my-5 text-sm">
            Welcome to our Loans and Products section! Here you'll find
            information about the various loans and financial products we offer
            to help meet your specific needs. Whether you're looking to buy a
            home, start a business, or consolidate your debts, we have a range
            of flexible and affordable options available to suit your situation.
          </p>
        </motion.div>
        {/* LOANS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {loans.map((loan: Loans) => (
            <Loan
              key={loan.title}
              title={loan.title}
              description={loan.description}
              icon={loan.icon}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* Graphic */}
          <Image className="mx-auto" alt="loans-page-image" src={LoansImage} />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-absrtactwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    JOIN THOUSANDS OF OUR CUSTOMERS AND ENJOY THE BENEFITS OF{" "}
                    <span className="text-primary-500">DORSETPAY</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                <strong>DorsetPay</strong> is a type of short term financing
                that allows consumers to make purchases from approved retailers
                and pay for them at a future date, interest free.
              </p>
              <p className="mb-5">
                <strong>DorsetPay</strong> makes larger value items more
                affordable for shoppers as they can spread the cost of purchase
                over a period of up to 90 days at no extra cost.
              </p>
              <p className="text-xl font-bold">Key features of DorsetPay:</p>
              <ul>
                <li className="list-disc">
                  No interest to pay every order is entirely interest free, no
                  matter the basket value or term of loan.
                </li>
                <li className="list-disc">No early repayment charges</li>
                <li className="list-disc">
                  Flexibility you can choose the period over which you want to
                  spread the cost of your order.
                </li>
                <li className="list-disc">
                  Fixed amounts monthly payments are fixed at the same amount
                  over the term of your loan.
                </li>
              </ul>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get a Loan
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Loans;
