const Adapter = (item) => {
  return {
    id: `${item.id}`,
    title: item.name,
    genre: item.genre,
    releaseDate: item.released,
    image: item.preview_image,
    poster: item.poster_image,
    background: item.background_image,
    video: item.preview_video_link,
    runtime: `${item.run_time}`,
    rating: item.rating,
    score: item.scores_count,
    director: item.director,
    description: item.description,
    starring: item.starring,
    favorite: item.is_favorite,
  };
};

const commentsAdapter = (item) => {
  return {
    id: item.id,
    rating: item.rating,
    date: item.date,
    author: {
      id: item.user.id,
      name: item.user.name,
    },
    text: item.comment,
  };
};

export {commentsAdapter};

export default Adapter;
