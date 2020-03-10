import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movieDetails = {
  id: `044`,
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
  poster: `img/johnny-english.jpg`,
  bigPoster: `img/moonrise-kingdom.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  runTime: 154,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
  reviews: [
    {
      id: `1`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: new Date(),
      rating: 9.0
    },
    {
      id: `2`,
      text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
      author: `Bill Goodykoontz`,
      date: new Date(),
      rating: 8.0
    },
    {
      id: `3`,
      text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
      author: `Amanda Greever`,
      date: new Date(),
      rating: 6.7
    },
  ]
};

const Movies = [
  {
    id: `011`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `012`,
    title: `Bohemian Rhapsody`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `013`,
    title: `Macbeth`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `014`,
    title: `Aviator`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `015`,
    title: `We need to talk about Kevin`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `016`,
    title: `What We Do in the Shadows`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `017`,
    title: `Revenant`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `018`,
    title: `Johnny English`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `019`,
    title: `Shutter Island`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `020`,
    title: `Pulp Fiction`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `021`,
    title: `No Country for Old Men`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `022`,
    title: `Snatch`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `023`,
    title: `Moonrise Kingdom`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `024`,
    title: `Seven Years in Tibet`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `025`,
    title: `Midnight Special`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `026`,
    title: `War of the Worlds`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `027`,
    title: `Dardjeeling Limited`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `028`,
    title: `Orlando`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `29`,
    title: `Mindhunter`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
  {
    id: `030`,
    title: `Midnight Special`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    runTime: 154,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
    reviews: [
      {
        id: `1`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(),
        rating: 9.0
      },
      {
        id: `2`,
        text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
        author: `Bill Goodykoontz`,
        date: new Date(),
        rating: 8.0
      },
      {
        id: `3`,
        text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
        author: `Amanda Greever`,
        date: new Date(),
        rating: 6.7
      },
    ]
  },
];

const handleMovieClick = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieDetails={movieDetails}
      movies={Movies}
      onMovieClick={handleMovieClick}
    />,
    {
      createNodeMock: () => ({})
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

