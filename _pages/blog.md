---
title: "Blog Posts"
layout: collection
permalink: /blogs/
collection: portfolio
entries_layout: grid
classes: wide
#author_profile: true
---

{% for post in site.posts %}
    {% include archive-single.html %}
{% endfor %}