"use client";
import Vacancies from "@/components/Vacancies";
import VacanciesNavbar from "@/components/VacanciesBar";
import React, { useEffect, useState } from "react";

const VacanciesPage = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    "Home" as SelectedPage
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("Home" as SelectedPage);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gray-20">
      <VacanciesNavbar isTopOfPage={isTopOfPage} />
      <Vacancies />
    </div>
  );
};

export default VacanciesPage;
