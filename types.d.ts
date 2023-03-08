enum SelectedPage {
  Home = "home",
  About = "about",
  Loans = "loans",
  Testimonials = "testimonials",
  Contact = "contact",
}

interface Loans {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Testimonials {
  name: string;
  quote: string;
}
