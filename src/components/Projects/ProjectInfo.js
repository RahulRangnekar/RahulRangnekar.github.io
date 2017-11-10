const PROJECTS = [
  {
    title: 'Annot8',
    subtitle: 'a web application',
    link: 'projects/annot8',
    image: 'images/projects/annot8.png',
    text:
      'A platform for students to ask questions on webcasted YouTube lecture videos.'
  },
  {
    title: 'Top 10',
    subtitle: 'a web application',
    link: 'projects/spotify',
    image: 'images/projects/spotify.png',
    text:
      'A weekly-updated tracker and visualizer for the top 10 songs worldwide.'
  },
  {
    title: 'Pi Sigma Epsilon',
    subtitle: 'a website',
    link: 'projects/pse',
    image: 'images/projects/pse.png',
    text: 'An 11-page website for my business fraternity.'
  },
  {
    title: 'The Elite Project',
    subtitle: 'a website',
    link: 'projects/yelp-dataset',
    image: 'images/projects/yelp.png',
    text:
      "A website created from Yelp's public dataset to determine what makes a Yelp user Elite."
  },
  {
    title: "Let's Talk Product",
    subtitle: 'a blog',
    link: 'projects/product',
    image: 'images/projects/lets-talk-product.png',
    text:
      'A blog about new products and features -- how are they designed, developed, and marketed? What needs improvement?'
  },
  {
    title: 'Yelp Elite',
    subtitle: 'a blog',
    link: 'projects/yelp-elite',
    image: 'images/projects/yelp.png',
    text: 'Restaurant reviews in my personal quest to eat everywhere I can.'
  },
  {
    title: 'Writing',
    subtitle: 'a lifelong journey',
    link: 'projects/writing',
    image: 'images/projects/writing.png',
    text: 'A way to express myself and give back'
  }
];

const IMAGE_PATH = '../images';

const PROJECT_INFO = {
  annot8: {
    title: 'Annot8',
    linkToProject: 'http://annot8.net',
    body: [
      {
        type: 'paragraph',
        text: 'This is the first paragraph'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/self/beach.jpg`,
        alt: 'Me at the beach',
        height: 200,
        width: 200
      },
      {
        type: 'paragraph',
        text: 'the second paragraph, after the image'
      }
    ]
  }
};

module.exports = {
  PROJECTS,
  PROJECT_INFO
};
