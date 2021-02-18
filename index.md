---
layout: pagetemplate.njk
title: andersos.net
---

<style>
.filter {
  border: 1px solid black;
  display: inline-block;
  padding: 5px;
}
</style>

Andersos.net

<div class="filter">
<input type="checkbox" id="series" name="series" value="📺" checked>
<label for="series">📺</label>
<input type="checkbox" id="movies" name="movies" value="🎬" checked>
<label for="movies">🎬</label>
<input type="checkbox" id="blood" name="blood" value="🩸" checked>
<label for="blood">🩸</label>
<input type="checkbox" id="activity" name="activity" value="🚶‍♂️" checked>
<label for="activity">🚶‍♂️</label>
<input type="checkbox" id="books" name="books" value="📖" checked>
<label for="books">📖</label>
<input type="checkbox" id="plays" name="plays" value="🎲" checked>
<label for="plays">🎲</label>
<input type="checkbox" id="diving" name="diving" value="🤿" checked>
<label for="diving">🤿</label>
<input type="checkbox" id="photos" name="photos" value="📷" checked>
<label for="photos">📷</label>
<input type="checkbox" id="photos" name="photos" value="📹" checked>
<label for="photos">📹</label>
<input type="checkbox" id="course" name="course" value="📜" checked>
<label for="course">📜</label>
</div>
<script>
function handelCheckboxChange(e) {
  document.querySelectorAll(`[data-type="${e.target.value}"]`).forEach(element => {
    element.style.display = e.target.checked ? "list-item" : "none";
  })
};
document.querySelectorAll("input").forEach(checkbox => checkbox.addEventListener("change", handelCheckboxChange));
</script>
<ul>

{% for event in timeline %}
{% if event.type == "🎬" %}

  <li data-type={{event.type}}>{{event['Date Watched']}} {{event.type}} {{event.Title}} {{event['Your Rating']}}/10</li>
  {% elsif event.type == "🩸" %}

  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.location}}</li>
  {% elsif event.type == "🚶‍♂️" %}
  {% if event.steps != 0 %}
  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.steps}}</li>
  {% endif %}
    {% elsif event.type == "🎲" %}

  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.game}} {{ event.players }}</li>
  {% elsif event.type == "🤿" %}

  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.location}}</li>
   {% elsif event.type == "📷" %}

  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.caption}}</li>
   {% elsif event.type == "📹" %}

  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.caption}}</li>
{% else %}
  <li data-type={{event.type}}>{{event.date}} {{event.type}} {{event.name}}</li>
{% endif %}
{% endfor %}

</ul>
