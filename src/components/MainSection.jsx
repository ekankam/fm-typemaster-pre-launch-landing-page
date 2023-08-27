export default function MainSection() {
  return (
    <section className="flex flex-col w-full mt-8 lg:flex-row md:mt-20 lg:px-[165px] lg:gap-10 relative">
      <div className="flex w-full gap-5 pr-6 item-center md:pr-20 md:gap-8 md:mx-10 lg:pr-0 lg:mx-0">
        <picture className="relative">
          <source
            media="(min-width: 768px)"
            srcset="/assets/tablet/image-phone-and-keyboard.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcset="/assets/desktop/image-phone-and-keyboard.jpg"
          />
          <img
            src="/assets/mobile/image-phone-and-keyboard.jpg"
            alt="phone and keyboard"
            className="inline-block object-cover w-auto h-full rounded-tr-2xl rounded-br-2xl md:rounded-2xl"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark-accent rounded-tr-2xl rounded-br-2xl opacity-90 mix-blend-multiply md:rounded-2xl" />
        </picture>

        <picture>
          <source
            media="(min-width: 768px)"
            srcset="/assets/tablet/image-glass-and-keyboard.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcset="/assets/desktop/image-glass-and-keyboard.jpg"
          />
          <img
            src="/assets/mobile/image-glass-and-keyboard.jpg"
            alt="glass and keyboard"
            className="inline-block object-cover h-full rounded-2xl"
          />
        </picture>
      </div>
      <div className="flex flex-col gap-6 mx-6 mt-16 text-center md:flex-row md:items-center md:mx-10 md:text-start md:gap-9 lg:w-1/3 lg:flex-col">
        <h2 className="uppercase text-[32px] font-black text-cc-black w-1/2 mx-auto leading-tight md:w-full">
          Mechanical wireless Keyboard
        </h2>
        <p className="text-cc-neutral-2 leading-[26px] font-medium">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
      <img
        src="/assets/shared/pattern-square.svg"
        alt=""
        className="absolute bottom-0 hidden -left-5 w-36 h-44 90 lg:block cc-xl:hidden"
      />
    </section>
  );
}
