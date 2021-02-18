---
layout: pagetemplate.njk
title: Photos
---

<style>
    .card {
        display: block;
        text-decoration: none;
        margin: 2px;
        color: inherit;
    }

    .card-img {
        object-fit: cover;
        height: 293px;
        width: 293px;
    }

    .card-body {
        padding: 0.5rem;
    }

    .card-title {
        margin-top: 0;
        margin-bottom: 0;
    }

    .card-text {
        margin-top: 0;
        margin-bottom: 0;
    }

    .entry {
        border: 1px solid rgba(0, 0, 0, 0.125);
    }
</style>
<main>
{% for photo in photostream %}
<div><a class="card" href={{ "https://api.andersos.net/" | append: photo.path }}><img class="card-img" src={{ "https://api.andersos.net/" | append: photo.path }}/></a><div class="card-body">{% if photo.location %}<h2 class="card-title">{{photo.username}} - {{photo.location}}</h2>{% else %}<h2 class="card-title">{{photo.username}}</h2>{% endif %}<time class="card-time">{{photo.taken_at}}</time><p class="card-text">{{photo.caption}}</p></div></div>{% else %}<li>This would display if the 'item' collection were empty</li>
{% endfor %}
</main>
