/* eslint-disable quotes */
import React from 'react';
import ProjectList from './ProjectList';
export default {
  title: 'ProjectList',
  component: ProjectList,
};

const Template = (args) => <ProjectList {...args} />;
export const GrowToFit = Template.bind({});
GrowToFit.args = {
  growToFit: true,
  projects: [
    {
      icon: '/img/component-icon.svg',
      title: 'tbdex Spec',
      description:
        'A playground as we iterate our way to a robust protocol. Mostly composed of tbDEX message schemas/formats and a mock PFI implementation.',
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'PFI Example Implementation',
      description:
        "A mock implementation of a PFI (Participating Financial Institution) that leverages Circle's APIs in order to facilitate the on and off ramps.",
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Decentralized Web Node',
      description:
        "An implementation of DIF's emerging decentralized personal datastore standard.",
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Decentralized Identifiers',
      description:
        'Decentralized Identifiers are a W3C international standard for identifiers created, owned, and controlled by individuals, without reliance on centralized entities',
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Self-Sovereign Identity Service',
      description:
        'An in-a-box service that handles the full Verifiable Credentials lifecycle, including issuance, verification, revocation, and more.',
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Self-Sovereign Identity SDK',
      description:
        'Standards-based primitives for using Decentralized Identifiers and Verifiable Credentials.',
      textButton: 'View Component',
      url: '#',
    },
  ],
};

export const FixedSize = Template.bind({});
FixedSize.args = {
  title: 'Components',
  growToFit: false,
  projects: [
    {
      icon: '/img/component-icon.svg',
      title: 'tbdex Spec',
      description:
        'A playground as we iterate our way to a robust protocol. Mostly composed of tbDEX message schemas/formats and a mock PFI implementation.',
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'PFI Example Implementation',
      description:
        "A mock implementation of a PFI (Participating Financial Institution) that leverages Circle's APIs in order to facilitate the on and off ramps.",
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Decentralized Web Node',
      description:
        "An implementation of DIF's emerging decentralized personal datastore standard.",
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Decentralized Identifiers',
      description:
        'Decentralized Identifiers are a W3C international standard for identifiers created, owned, and controlled by individuals, without reliance on centralized entities',
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Self-Sovereign Identity Service',
      description:
        'An in-a-box service that handles the full Verifiable Credentials lifecycle, including issuance, verification, revocation, and more.',
      textButton: 'View Component',
      url: '#',
    },
    {
      icon: '/img/component-icon.svg',
      title: 'Self-Sovereign Identity SDK',
      description:
        'Standards-based primitives for using Decentralized Identifiers and Verifiable Credentials.',
      textButton: 'View Component',
      url: '#',
    },
  ],
};
