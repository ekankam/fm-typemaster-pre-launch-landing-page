import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between mt-[27px] mx-6 md:mt-10 md:mx-10 lg:mt-[55px] lg:mx-[165px]">
      <img src="/assets/shared/logo.svg" alt="logo" />
      <Button
        className="bg-cc-neutral-1 lg:hover:bg-cc-black lg:hover:text-white"
        label="PRE-ORDER NOW"
      />
    </header>
  );
}
