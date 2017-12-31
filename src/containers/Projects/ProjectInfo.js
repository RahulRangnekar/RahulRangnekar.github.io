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
    subtitle: 'a website and more',
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
    title: 'Social Media Bar',
    subtitle: 'an open-source react component',
    link: 'projects/social-media-bar',
    image: 'images/projects/social-media-bar.png',
    text:
      'A React component creating external links to social media profiles using Font Awesome icons.'
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
    subtitle: 'a food blog',
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

const IMAGE_PATH = '../images/projects';

const PROJECT_INFO = {
  // ANNOT8
  annot8: {
    title: 'Annot8',
    linkToProject: 'http://annot8.net',
    linkToRepository: 'https://github.com/rahrang/annot8',
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
          "This puts students in a predicament if they have questions about something the professor said or confusing material covered in lecture. There is no convenient place to ask -- it's troublesome to link to a video at a timestamp using the otherwise-amazing platform Piazza. Office hours with the professor or TAs are too few and too packed to receive proper guidance. And if the material is necessary for an assignment, students have nowhere else to turn to get answers."
      },
      {
        type: 'paragraph',
        taglineStyle: true,
        text: 'This is where Annot8 comes in.'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/annot8/home.png`,
        alt: 'home page of Annot8',
        caption: 'The home page of Annot8 -- enter a YouTube link and GO!',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'paragraph',
        text:
          'Annot8 is a platform for students to ask questions on webcasted YouTube lecture videos. Students simply download our Google Chrome Extension (to be launched in the Chrome Extension store in the near future), navigate to their lecture video on YouTube, click on the extension, and redirect to Annot8.'
      },
      {
        type: 'paragraph',
        text:
          'As students watch the video, they can ask questions at certain timestamps or respond to others’ comments. Students can also choose to comment anonymously, as they may not want their identity known.'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/annot8/timestamp-comment.png`,
        alt: 'enter a comment at a timestamp',
        caption: 'students can comment at specific timestamps',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/annot8/video-comment.png`,
        alt: 'see all comments on the video',
        caption: 'students can see all timestamps at which comments were made',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'paragraph',
        text:
          'All comments are stored in a MongoDB database hosted via mLab. There are two “collections” (tables for non-relational database structures) — one to store Users and another to store Comments. Comments are stored with (1) the video ID — unique to each YouTube video — on which the Comment was made, (2) the timestamp at which the User made the Comment, (3) the name of the User who made the Comment, (4) whether or not the User chose to post anonymously — in which case “Anonymous” is rendered beneath their Comment rather than their name, (5) the ID of the User — unique to each User in the Users collection, and (6) the Comment text itself. Each User in stored with (1) their name, (2) their email, (3) their Google ID — an alphanumeric value unique to their Google account, used to authenticate the user upon signing into Annot8, and (4) the profile picture linked to their Google account.'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/annot8/profile.png`,
        alt: 'see all comments on the video',
        caption:
          'The profile page —- users can see all comments they’ve made, and can click through to a specific comment on a video',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'paragraph',
        text:
          'This application was built with React JS with Redux on the front-end and Node JS on the back-end. User authentication is handled via PassportJS.'
      }
    ]
  },

  // Spotify TOP 10
  spotify: {
    title: 'Top 10',
    linkToProject: 'https://rahrang.github.io/SpotifyTop10/',
    linkToRepository: 'https://github.com/rahrang/SpotifyTop10',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/spotify/home.png`,
        alt: 'home page of Top 10',
        caption: 'The landing page -- top 10 songs of the week.',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/spotify/tracking.png`,
        alt: 'tracking system',
        caption: 'The tracking system, visualized',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/spotify/track.png`,
        alt: 'track data',
        caption: 'The data for each track',
        height: 'auto',
        width: '100%'
      }
    ]
  },

  // PSE
  pse: {
    title: 'Pi Sigma Epsilon',
    linkToProject: 'http://berkeleypse.org',
    linkToRepository: 'https://github.com/BerkeleyPSE/BerkeleyPSE.github.io',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/pse/home.png`,
        alt: 'home page of PSE',
        caption: 'The home page of Pi Sigma Epsilon',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/pse/recruitment.png`,
        alt: 'recruitment page of PSE',
        caption: 'The recruitment page of Pi Sigma Epsilon',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/pse/brotherhood.png`,
        alt: 'brotherhood page of PSE',
        caption: 'The brotherhood page of Pi Sigma Epsilon',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/pse/brother.png`,
        alt: 'brother page of PSE',
        caption: 'My brother page of Pi Sigma Epsilon',
        height: 'auto',
        width: '100%'
      }
    ]
  },

  // The Elite Project
  'yelp-dataset': {
    title: 'The Elite Project',
    linkToProject: 'https://rahrang.github.io/yelp-dataset-project',
    linkToRepository: 'https://github.com/rahrang/yelp-dataset-project',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-dataset/home.png`,
        alt: 'home page',
        caption: 'The home page -- choose a path to explore!',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-dataset/num-elite-reviews.png`,
        alt: 'number of elite reviews',
        caption: 'The number of Elite reviews.',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-dataset/user-compliments.png`,
        alt: 'compliments on users',
        caption: 'Compliments given to Elite users',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-dataset/review-compliments.png`,
        alt: 'compliments on reviews',
        caption: 'Compliments given to Elite reviews.',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-dataset/years-to-elite.png`,
        alt: 'years to elite',
        caption: 'The number of users inducted into Elite.',
        height: 'auto',
        width: '100%'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-dataset/years.png`,
        alt: 'years',
        caption:
          'The breakdown for number of users inducted to Elite in a given year.',
        height: 'auto',
        width: '100%'
      }
    ]
  },

  // React Social Media Bar
  'social-media-bar': {
    title: 'Social Media Bar',
    linkToProject: 'https://github.com/rahrang/react-social-media-bar',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      }
    ]
  },

  // Let's Talk Product
  product: {
    title: "Let's Talk Product",
    linkToProject: 'https://medium.com/lets-talk-product',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      }
    ]
  },

  // Yelp Elite
  'yelp-elite': {
    title: 'Yelp Elite',
    linkToProject: 'https://rahrang.yelp.com',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      },
      {
        type: 'image',
        src: `${IMAGE_PATH}/yelp-elite/profile.png`,
        alt: 'my yelp profile',
        caption: 'My Yelp Profile',
        height: 'auto',
        width: '100%'
      }
    ]
  },

  // Writing
  writing: {
    title: 'Writing',
    linkToProject: '',
    body: [
      {
        type: 'paragraph',
        text: 'UNDER CONSTRUCTION!'
      },
      {
        type: 'paragraph',
        text: 'PLEASE CHECK BACK LATER'
      },
      {
        type: 'paragraph',
        text: 'THANKS FOR VISITING!'
      }
    ]
  }
};

module.exports = {
  PROJECTS,
  PROJECT_INFO
};
