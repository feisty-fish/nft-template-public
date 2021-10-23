import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="font-rampart text-6xl text-gray-900 font-extrabold whitespace-pre-line leading-hero tracking-widest text-shadow-lg">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 text-gray-900 tracking-tighter">{props.description}</div>
  </header>
);

export { HeroOneButton };
