---
layout: default
title: Волевиявлення людини | Voleviyavlennya
fullUrl: fullUrl
---

<table cellspacing="0" cellpadding="0">
    {% for page in site.pages %}

    {% if page.path == "pages/home.md" %}

    <tr>
      <td>{{ page.content }}</td>
    </tr>

    {% endif %}

    {% endfor %}

</table>

{% include pismo_tur.html %}
