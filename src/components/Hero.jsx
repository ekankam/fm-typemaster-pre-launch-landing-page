import Button from "./Button";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 pt-[68px] items-center lg:mx-[165px] relative">
      <div className="flex flex-col gap-8 pl-6 md:pl-10 lg:pl-0">
        <h1 className="text-5xl font-black uppercase text-cc-black lg:text-[56px]">
          Typemaster keyboard
        </h1>
        <p className="font-medium leading-6 text-cc-neutral-2 lg:text-lg">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="flex items-center justify-between">
          <Button
            className="text-white bg-dark-accent hover:bg-light-accent"
            label="PRE-ORDER NOW"
          />
          <Button label="RELEASE ON 5/27" className="text-cc-neutral-2" />
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="/assets/tablet/image-keyboard.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcset="/assets/desktop/image-keyboard.jpg"
        />
        <img
          src="/assets/mobile/image-keyboard.jpg"
          alt="keyboard"
          className="mt-12 ml-6 rounded-tl-2xl rounded-bl-2xl lg:rounded-2xl"
        />
      </picture>
      <img
        src="/assets/shared/pattern-square.svg"
        alt=""
        className="absolute hidden top-28 -right-52 w-36 h-44 lg:block cc-xl:hidden"
      />
    </section>
  );
}
