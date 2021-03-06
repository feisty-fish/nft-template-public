import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import React from "react";

const VerticalFeatures = () => (
  <div className="bg-gray-100 py-1 px-2 lg:py-24 lg:px-48 sm:py-12 sm:px-24">
    <div className="bg-purple-600 border-solid border-2 border-gray-800 rounded-3xl drop-shadow-2xl bg-hero bg-fixed text-gray-900">
  <Section
    title="About Us:"
    description="Just two indie crypto devs looking to build up a community on the blockchain! We are interested in empowering people in the crypto space and filling the Solana ecosystem up with a bunch of Feisty Fish!"
  >
    <VerticalFeatureRow
      title="Info:"
      description="There are currently 434 Feisty Fish swimming around the Solana blockchain! We will use any royalties generated by sales of the Feisty Fish on secondary markets to reinvest back into the community! As a verified owner of a Feisty Fish you will also be guaranteed a spot on our whitelist for any upcoming projects we have planned!"
      image="/assets/images/cryptofish.gif"
      imageAlt="alternating feisty fish animation"
    />
    <a id="roadmap">
    <VerticalFeatureRow
      title="Roadmap:"
      description="Decisions will mostly be made by the Feisty Fish holders! We will be announcing the official dates for airdrops after the minting has completed and some of the flush events have taken place. We will be applying for verification on secondary markets immediately after the minting event."
      image="/assets/images/cryptofish2.gif"
      imageAlt="spinning 3d feisty fish"
      reverse
    />
    </a>
    <VerticalFeatureRow
      title="Community:"
      description="Please think about joining our community on Discord and following us on Twitter! This will help us build up the community and as a holder you will have a say in the decisions that the team makes in the future!"
      image="/assets/images/tank.gif"
      imageAlt="feisty fish tank"
    />
  </Section>
  </div>
  </div>
);

export { VerticalFeatures };
