import axios from 'axios';
import React from 'react';

// const projects = ['annot8', 'spotify', 'pse', 'yelp-dataset', 'social-media-bar', 'product', 'yelp-elite', 'writing'];

export default {
  getSiteProps: () => ({
    title: 'Rahul Rangnekar',
  }),
  getRoutes: async () => {
    // const { data: projects } = projects;
    // console.log(projects);
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/skills',
        component: 'src/containers/Skills/Skills'
      },
      {
        path: '/passions',
        component: 'src/containers/Passions/Passions'
      },
      {
        path: '/projects/:project_id',
        component: 'src/containers/Projects/ProjectPage',
      },
      {
        path: '/projects',
        component: 'src/containers/Projects/Projects',
      },
      {
        is404: true,
        component: 'src/containers/Error404',
      },
    ]
  },
  Document: ({ Html, Head, Body, children, siteProps, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
      </Body>
    </Html>
  ),
}
