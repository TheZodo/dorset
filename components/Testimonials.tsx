import React from "react";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const testimonials: Array<Testimonials> = [{ name: "", quote: "" }];

export default function Testimonials({ setSelectedPage }: Props) {
  return <section id="testimonials"> hello</section>;
}
