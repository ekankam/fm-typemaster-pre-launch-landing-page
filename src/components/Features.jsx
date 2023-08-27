import PropTypes from "prop-types";

function Feature({ icon, title, description }) {
  return (
    <div className="text-center md:text-start">
      <div className="bg-dark-accent w-[65px] h-[65px] rounded-2xl flex items-center justify-center mx-auto mb-12 md:mx-0">
        <img src={icon} alt={title} />
      </div>
      <h3 className="uppercase text-2xl font-black text-cc-black w-[180px] mx-auto mb-6 md:w-[190px] md:mx-0">
        {title}
      </h3>
      <p className="font-medium text-cc-neutral-2">{description}</p>
    </div>
  );
}

Feature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default function Features() {
  return (
    <div className="mt-[111px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-6 md:gap-[72px] lg:mx-[165px] lg:gap-8">
      <Feature
        icon="/assets/shared/icon-compatible.svg"
        title="HIGHLY COMPATIBLE"
        description="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
      />
      <Feature
        icon="/assets/shared/icon-bluetooth.svg"
        title="WIRELESS WITH BLUETOOTH"
        description="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
      />
      <Feature
        icon="/assets/shared/icon-battery.svg"
        title="HIGH CAPACITY BATTERY"
        description="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
      />
      <Feature
        icon="/assets/shared/icon-light.svg"
        title="RGB BACKLIT MODES"
        description="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
      />
    </div>
  );
}
