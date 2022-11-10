# Assignment 1 - ReactJS app.

Name: Adrian Bernacki

## Overview.

The following repository contains commits that define the workflow and progression throughout the assignment.

### Features.
+ Login, Registration and Signing Out + Private Routes
+ Filtering by ratings for Movies and Tv shows.
+ Credits page to view people involved in Movies or Tv Shows
+ Filtering and searching by the Crew or the Casts in Credits page for Movies or TvShows
+ Popular Movies List with Reviews
+ Now Playing List with Reviews
+ Tv List to view tv shows with Reviews
+ Fully Cached
+ Pagination

## New API endpoints.

+ /movie/now_playing - Lists now playing movies.
+ /movie/popular - Lists popular movies.
+ /movie/{movie_id}/credits - Gets credits for the movie selected.
+ /tv/popular - Lists popular tv shows.
+ /tv/{tv_id} - Gets the tv show.
+ /tv/{tv_id}/images - Gets the tv show images.
+ /tv/{tv_id}/reviews - Gets the tv show reviews.
+ /tv/{tv_id}/credits - Gets credits for the tv show.

## Routing.

+ /movies/now_playing - Displays now playing movies in a list.
+ /movies/popular -  Displays now popular movies in a list.
+ /credits/:id - Displays credits on a particular movie.
+ /tv/ - Displays tv shows in a list.
+ /tvShow/:id - Displays a particular tv show
+ /creditsTv/:id - Displays credits on a particular tv show.
+ /tvShowReviews/:id - Displays reviews on a particular tv show.
+ /login - Login screen.
+ /signup - Signup screen.

## Independent learning (If relevant).

+ Pagination was implemented with the help of YouTube and StackOverFlow. The end user can paginate movie and tv shows lists to view more content. StackOverFlow helped me discover an additional function that useQuery provides to refetch data once the page is changed. Youtube helped me with visualizing the structure of the pagination component. References:  https://www.youtube.com/watch?v=8v6fYfhvO5E&ab_channel=ThisChannelishacked, https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked, https://mui.com/material-ui/react-pagination/
+ Authentication was also implemented with the help of YouTube and StackOverFlow. The end user may register or login to the web app as well as log out if they wish to do so. Youtube helped me with private routes and to get started with implementing FireBase configuration files. StackOverFlow helped me find some additional information with Firebase methods. References: https://www.youtube.com/watch?v=9bXhf_TELP4&ab_channel=PedroTech, https://stackoverflow.com/questions/69771337/using-react-router-v6-why-cant-i-call-usenavigate-directly#:~:text=useNavigate%20is%20a%20React%20hook,callback%20like%20your%20handleAskQuestionClick%20function.