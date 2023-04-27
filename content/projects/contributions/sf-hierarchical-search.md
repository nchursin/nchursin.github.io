---
title: "Salesforce Hierarchical Search"
link: "https://github.com/ChuckJonas/hierarchical-search/pull/1"
description: "Исправил роблему с длинной имени поля."
featured: false
tags: [ "Salesforce", "Apex", "SOQL" ]
weight: 100
sitemap: 
    priority : 0.8
---

Столкнулся со [странной проблемой](https://salesforce.stackexchange.com/questions/319845/sfdcsqlexception-ora-00972-identifier-is-too-long) появлявшейся при определелённой длинне имени поля и максимальной глубине запроса. Добавил возможеость контролировать глубину запроса, таким образом дав возможность обойти проблему с длиной имени поля.
