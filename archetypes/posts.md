---
title   : "{{ replace .Name "-" " " | title }}"
date    : {{ .Date }}
author  : "{{ .Site.Params.author }}"
thumbnail: "img-1.jpg"
draft   : false
url     : "/posts/{{ lower .Name | urlize }}"
toc     : false
tags:
- tag
---

