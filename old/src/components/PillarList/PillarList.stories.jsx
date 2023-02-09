import React from 'react';
import PillarList from './PillarList';
export default {
  title: 'PillarList',
  component: PillarList,
};

const Template = (args) => (
  <div className="">
    <PillarList {...args} />
  </div>
);
export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  title: 'Our Pillars',
  pillars: [
    {
      img: '/img/inclusivity-icon.svg',
      title: '',
      description:
        'Anyone with the capacity to contribute: can. We are proactive in welcoming a diverse contributor base for our code, documentation, developer relations, education, and communication efforts. Bad actors will be met with a published governance model and enforced code of conduct. Our users deserve representation in our development communities, and we promote varied perspectives and respectful debate.',
    },
    {
      img: '/img/transparency-icon.svg',
      title: '',
      description:
        'Decision-making is open by default, with rare exceptions made for security, compliance, personnel, or other sensitive issues. Projects under TBD’s stewardship will conduct design, roadmap, issues, bugs, and code reviews in public. This is critical for accountability and to promote the inclusive environment necessary for project success.',
    },
    {
      img: '/img/clarity-icon.svg',
      title: '',
      description:
        'Projects need well-defined scope to succeed. They also need accessible, comprehensive documentation, a stellar Getting Started experience, and well-defined expectations. TBD fosters an environment built for contribution without personal intervention. Newcomers should be able to follow the project status on their own without additional explanation.',
    },
  ],
};
