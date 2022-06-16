/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Discussions',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: [{ type: 'autogenerated', dirName: 'discussions' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'index-concepts',
      },
      items: [{ type: 'autogenerated', dirName: 'concepts' }],
    },
  ],
};

module.exports = sidebars;
