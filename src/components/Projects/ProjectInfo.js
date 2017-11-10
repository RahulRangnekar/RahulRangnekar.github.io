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
        text:
          "Students face busy lives. We strive to keep up with our academics as we recruit for jobs and internships, maintain our mental and physical health, lead an active social life, participate in clubs and organizations, and work on personally-fulfilling side projects. It's tough to do it all, and so we often skip lectures for classes at inconvenient times to do tend to more pressing matters."
      },
      {
        type: 'paragraph',
        text:
          "Luckily, a significant number of our classes have lectures that are recorded and uploaded to YouTube within the day, giving us the option to watch (or re-watch) lecture in our own time. Unfortunately, however, Berkeley disallows comments on its YouTube videos so that it doesn't have to filter comments for spam or harassment."
      },
      {
        type: 'paragraph',
        text:
          "This puts students in a predicament if they have questions about something the professor said or confusing material covered in lecture. There is no convenient place to ask -- it's troublesome to link to a video at a timestamp using the otherwise-amazing platform Piazza. Office hours for the professor and TAs are too few and too packed to receive proper guidance. And if the material is necessary for an assignment, students have nowhere else to turn to get answers."
      },
      {
        type: 'paragraph',
        taglineStyle: true,
        text: 'This is where Annot8 comes in.'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/self/beach.jpg`,
        alt: 'Me at the beach',
        height: 200,
        width: 200
      }
    ]
  }
};

module.exports = {
  PROJECTS,
  PROJECT_INFO
};
