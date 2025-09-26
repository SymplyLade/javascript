function addMovie1() {
  // Step 1: Create arrays
let movies = ["Home Alone", "My Demon", "Pyramid Game"];
let ratings = [9, 8, 7];
// Step 2: Add a new movie
function addMovie(movie, rating) {
  movies.push(movie);
  ratings.push(rating);
}
// Step 3: Calculate average rating
function getAverageRating() {
  let total = ratings.reduce((sum, r) => sum + r, 0);
  return (total / ratings.length).toFixed(2);
}
// Step 4: Get highest-rated movie
function getTopMovie() {
  let maxRating = Math.max(...ratings);
  let index = ratings.indexOf(maxRating);
  return { name: movies[index], rating: maxRating };
}
// Step 5: Print summary (with styling)
function printSummary() {
  console.log(" Movie Ratings Summary");
  for (let i = 0; i < movies.length; i++) {
    console.log(`%c${movies[i]}: ${ratings[i]}`, "color: pink; font-weight: bold;");
  }
  console.log("Average Rating: " + getAverageRating(), "color: blue; font-weight: bold;");
  let top = getTopMovie();
  console.log("Top Movie: " + top.name + " (" + top.rating + ")", "color: yellow; font-weight: bold;");
}
// Challenge: Sort movies by rating (with styling)
function sortMoviesByRating() {
  console.log("Movies Sorted by Rating",);
  let combined = movies.map((m, i) => ({ movie: m, rating: ratings[i] }));
  combined.sort((a, b) => b.rating - a.rating);
  combined.forEach(item => {
    console.log(`%c${item.movie}: ${item.rating}`, "color: teal; font-weight: bold;");
  });
}
//TEST
addMovie("Everybody Loves Jenifa", 10);
printSummary();
sortMoviesByRating();
}