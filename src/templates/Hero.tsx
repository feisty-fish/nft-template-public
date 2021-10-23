import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <div className="bg-gray-100 py-1 px-3 lg:py-24 lg:px-48 sm:py-12 sm:px-24">
  <Background color="bg-hero bg-fixed bg-purple-600 rounded-3xl border-solid border-2 border-gray-800 drop-shadow-2xl">
    <Section yPadding="py-6 ">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <div className="px-4 text-gray-900 hover:opacity-50 ">
          <Link href="https://twitter.com/FeistyFishSOL">
            <a>Twitter</a>
          </Link>
          </div>
        </li>
        <li>
        <div className="px-4 text-gray-900 hover:opacity-50 ">
          <Link href="https://discord.gg/pWKFuYDBrh">
            <a>Discord</a>
          </Link>
          </div>
        </li>
        <div className="px-4 text-gray-900 hover:opacity-50 ">
        <li>
          <Link href="#roadmap">
          <a>Roadmap</a>
          </Link>
        </li>
        </div>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-28 text-gray-900">
      <HeroOneButton
        title={
          <>
            {'Feisty Fish!\n'}
            <span className="text- text-xl tracking-widest font-semibold"></span>
          </>
        }
        description=""
        button={
          <Link href="/">
            <a>
              <Button> </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
  </div>
);

export { Hero };
