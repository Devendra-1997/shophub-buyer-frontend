import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen text-gray-700 dark:text-gray-400 text-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 dark:text-gray-300">About Us</h1>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-4 dark:text-gray-300">
            Crafting Excellence in Luxury Automobiles
          </h2>
          <p className="mb-4 text-justify">
            At LuxeDrive’s Cars, we’re committed to redefining luxury on the
            road. With an exclusive selection of high-performance vehicles from
            iconic brands, we offer a tailored buying experience that matches
            the quality of our cars. Whether you&apos;re searching for the
            elegance of a sedan or the thrill of a sports car, our range
            promises a vehicle as extraordinary as your lifestyle.
          </p>
          <p className="mb-4 text-justify">
            Our vehicles are curated with precision, featuring top brands like
            Aston Martin, Porsche, Mercedes-Benz, and BMW. Each car is certified
            and thoroughly inspected to ensure it exceeds your expectations,
            whether it’s a modern masterpiece or a timeless classic.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-4 dark:text-gray-300">
            Passionate About Automotive Craftsmanship
          </h2>
          <p className="mb-4 text-justify">
            LuxeDrive&apos;s Cars was founded with a passion for performance and
            a love for automotive artistry. For over a decade, we’ve been driven
            to offer a superior selection of vehicles that don’t just meet
            standards, but set them. Our commitment goes beyond selling
            cars—we&apos;re here to create a community of enthusiasts who
            appreciate every detail, every line, and every roar of a finely
            tuned engine.
          </p>
          <p className="mb-4 text-justify">
            From sleek coupes to commanding SUVs, our inventory is handpicked to
            offer something unique to every driver. We believe that choosing a
            luxury vehicle should be an experience of passion, not pressure, and
            we’re here to help you find a car that resonates with your personal
            style.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-4 dark:text-gray-300">
            Personalized and Hassle-Free Buying Experience
          </h2>
          <p className="mb-4 text-justify">
            Purchasing a luxury car should be as exciting as driving it. That’s
            why our team offers a streamlined, personalized buying journey from
            start to finish. We provide complete transparency, expert guidance,
            and a no-pressure approach, ensuring you feel fully confident in
            your decision.
          </p>
          <p className="mb-4 text-justify">
            We also offer convenient, flexible return options and a
            comprehensive warranty plan, so you can drive away with peace of
            mind, knowing you’re supported every mile of the journey.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-4 dark:text-gray-300">
            Exceptional Service, Every Step of the Way
          </h2>
          <p className="mb-4 text-justify">
            Our commitment to service doesn’t end once you drive off the lot. We
            provide round-the-clock customer support and priority maintenance
            scheduling, so your vehicle remains as exceptional as the day you
            bought it. From personalized test drives to white-glove delivery,
            every interaction is designed to exceed your expectations.
          </p>
          <p className="mb-4 text-justify">
            With same-day delivery options in select areas and comprehensive
            service coverage, we go the extra mile to bring your dream car
            directly to you, safely and promptly.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold mb-4 dark:text-gray-300">
            Meet the Experts Behind Your Dream Car
          </h2>
          <p className="mb-4 text-justify">
            <strong>Devendra</strong>, our Founder and CEO, brings over 15 years
            of automotive expertise to the table, working closely with premier
            brands and curating the finest vehicles for our clientele. Alex’s
            passion for luxury cars is matched only by his commitment to
            providing the best possible customer experience.
          </p>
          <p className="text-purple-600 font-semibold my-20">
            Ready to experience the thrill of a premium vehicle? Explore our
            best-sellers and find the car that defines your journey.{" "}
            <Link to="/products" className="text-purple-600 hover:underline">
              Discover your perfect car.
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
