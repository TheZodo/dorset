"use client";
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
    url: "https://app.dorsetcap.com/",
    description:
      "These are private payroll loans that are offered to private employees through partnerships with their employers. The loans can be used for groceries, school fees, business start up, building assistance, funeral and wedding expenses etc.",
  },
  {
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
    title: "Government Payroll Loans",
    url: "https://app.dorsetcap.com/",
    description:
      "These are salary based loans for civil servants. The loans can be used for groceries, school fees, business start-up, building assistance, funeral and wedding expenses etc.",
  },
  {
    icon: <BuildingStorefrontIcon className="h-6 w-6" />,
    title: "Business Loans",
    url: "https://app.dorsetcap.com/",
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

const Vacancies = () =>
  // { setSelectedPage }: Props
  {
    return (
      <section
        id="loans"
        className="mx-auto  min-h-full overflow-y-scroll bg-gray-20 pt-16 md:pt-16 "
      >
        <motion.div
          onViewportEnter={() => {
            //   setSelectedPage("Loans" as SelectedPage);
          }}
        >
          {/* HEADER */}
          <motion.div
            className="mx-8 md:mx-40 md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>Vacancies at Dorset</HText>
            <p className="my-5 text-sm">
              Dorset is a forward-thinking digital lending company dedicated to
              revolutionising the lending landscape by leveraging technology and
              innovation. We specialize in providing accessible and efficient
              lending solutions to empower individuals and businesses. As we
              expand our operations, we are seeking a talented Senior Software
              Engineer to lead the development of our cutting-edge lending
              platform.
            </p>
          </motion.div>
          {/* LOANS */}
          <motion.div
            className="mx-8 mt-5 items-center justify-between gap-8 md:mx-40 md:flex "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {/* {loans.map((loan: Loans) => (
            <Loan
              key={loan.title}
              title={loan.title}
              description={loan.description}
              icon={loan.icon}
              url={loan.url}
            //   setSelectedPage={setSelectedPage}
            />
          ))} */}
          </motion.div>
          {/* Graphics and Description */}
          <div className="mt-8 items-center justify-between gap-20 md:mt-10 md:flex ">
            {/* Graphic */}
            <Image
              className="mx-auto"
              alt="loans-page-image"
              src={LoansImage}
            />

            {/* Description */}
            <div>
              {/* Title */}
              <div className="relative">
                <div className="mx-10 before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-absrtactwaves md:mx-40">
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
                    <HText>JOIN THE TEAM AT DORSET AS A LOANS OFFICER</HText>
                  </motion.div>
                </div>
              </div>
              {/* Description */}
              <div className="mx-10 md:mx-40">
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
                    As a Senior Software Engineer at Dorset, you will play a
                    pivotal role in designing, developing, and implementing our
                    proprietary lending platform. You will be responsible for
                    leading the software development efforts, collaborating with
                    cross-functional teams, and spearheading the establishment
                    of our internal IT infrastructure. This position offers a
                    unique opportunity to drive innovation, shape technology
                    strategy, and make a meaningful impact on the future of
                    digital lending.
                  </p>
                  <p className="mb-5">
                    To apply send your resume and other documents to
                    <span className="text-blue-600"> hello@dorsetcap.com</span>
                    with the subject &quot;Senior Software Engineer
                    Application&quot;. Apply now and become part of our
                    dedicated team!
                  </p>
                  <p className="text-xl font-bold">Responsibilities:</p>
                  <ul>
                    <li className="list-disc">
                      Lead the end-to-end development lifecycle of our digital
                      lending platform, from conceptualization to deployment.
                    </li>
                    <li className="list-disc">
                      Architect scalable, secure, and highly available solutions
                      that meet business requirements and industry best
                      practices.
                    </li>
                    <li className="list-disc">
                      Develop robust backend services, APIs, and microservices
                      to facilitate seamless loan origination, underwriting,
                      servicing, and repayment processes.
                    </li>
                    <li className="list-disc">
                      Implement data-driven decision-making tools, analytics,
                      and reporting functionalities to optimize lending
                      operations and enhance customer experience.
                    </li>
                    {/* <li className="list-disc">
                      Provide technical expertise, guidance, and mentorship to
                      the IT team members, fostering a culture of collaboration,
                      learning, and innovation.
                    </li>
                    <li className="list-disc">
                      Drive the adoption of best-in-class software development
                      methodologies, tools, and standards to ensure code
                      quality, reliability, and maintainability.
                    </li>
                    <li className="list-disc">
                      Stay abreast of emerging technologies, trends, and
                      industry developments, evaluating their potential
                      applications and implications for our lending platform.
                    </li>
                    <li className="list-disc">
                      Recruit, onboard, and mentor a high-performing team of
                      software engineers, architects, and IT professionals to
                      support the development and maintenance of the lending
                      platform.
                    </li> */}
                  </ul>
                  <p className="mt-4 text-xl font-bold">Qualifications:</p>
                  <ul>
                    <li className="list-disc">
                      Evaluate loan applications and determine eligibility based
                      on financial criteria.
                    </li>
                    <li className="list-disc">
                      Bachelor&apos;s or Master&apos;s degree in Computer
                      Science, Software Engineering, or a related field.
                    </li>
                    <li className="list-disc">
                      Proven track record of 3+ years of hands-on experience in
                      designing, developing, and deploying scalable, distributed
                      software systems, preferably in the fintech or financial
                      services industry.
                    </li>
                    <li className="list-disc">
                      Expertise in full-stack development using modern
                      programming languages, frameworks, and tools such as Java,
                      Python, JavaScript, Node.js, React, Angular, Spring Boot,
                      Django, etc.
                    </li>
                    <li className="list-disc">
                      Strong understanding of cloud computing platforms (e.g.,
                      AWS, Azure, GCP), containerisation technologies (e.g.,
                      Docker, Kubernetes), and serverless architectures.
                    </li>
                    <li className="list-disc">
                      Experience with relational and non-relational databases
                      (e.g., MySQL, PostgreSQL, MongoDB) and proficiency in
                      writing complex SQL queries, data modelling, and
                      optimisation techniques.
                    </li>
                    {/* <li className="list-disc">
                      Demonstrated leadership skills with the ability to
                      inspire, motivate, and mentor team members, foster a
                      culture of collaboration and innovation, and drive results
                      in a fast-paced, dynamic environment.
                    </li>
                    <li className="list-disc">
                      
                      Excellent problem-solving abilities, analytical thinking,
                      and attention to detail, with a passion for leveraging
                      technology to solve real-world challenges and deliver
                      exceptional customer experiences.
                    </li> */}
                    <li className="list-disc">
                      This position is based at our Lusaka office.
                    </li>
                  </ul>
                </motion.div>
                {/* Button */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    {/* <ActionButton setSelectedPage={setSelectedPage}>
                    Get a Loan
                  </ActionButton> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  };

export default Vacancies;
