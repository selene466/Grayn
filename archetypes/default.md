---
title   : "{{ replace .Name "-" " " | title }}"
date    : {{ .Date }}
author  : "{{ .Site.Params.Author }}"
thumbnail: "logo.png"
draft   : false
url     : "/{{ lower .Name | urlize }}"
toc     : false
---
