import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <div className="bg-gray-100 px-2 pb-1 lg:px-48 lg:pb-20 sm:px-24 sm:pb-10">
  <div className="
  bg-purple-600 
  rounded-3xl 
  border-solid 
  border-2 
  border-gray-800 
  drop-shadow-2xl 
  text-2xl 
  text-gray-900 
  font-semibold
  bg-hero 
  bg-fixed
  ">
  <Section>
    <CTABanner
      title="Want to learn more? We have a Discord!"
      subtitle="Come join the community!"
      button={
        <Link href="https://discord.gg/pWKFuYDBrh">
          <a className="text-purple-500 font-bold">
            <Button>Discord</Button>
          </a>
        </Link>
      }
    />
  </Section>
  </div>
  </div>
);

export { Banner };
