---
layout: pagetemplate.njk
title: Movies
---

<style>
.movie-list {
    text-align: center;
}
.card {
    display: inline-block;
    text-decoration: none;
    margin: 2px;
    color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
.card-img {
    height: 222px;
    width: 150px;
}
.card-body {
    padding: 0.5rem;
}
.card-title {
    margin-top: 0;
    margin-bottom: 0;
    display: none;
}
.card-text {
    margin-top: 0;
    margin-bottom: 0;
}
</style>
<div class="movielist">
{% for movie in movies %}
<a class="card" href={{movie.URL}}>
<img class="card-img" src={{movie.Poster}} alt={{movie.Title}} />
<div class="card-body">
<h2 class="card-title">{{movie.Title}}</h2>
<p class="card-text">⭐️ {{movie['Your Rating']}} / 10</p>
</div>
</a>
{% endfor %}
</div>
