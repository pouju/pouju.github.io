---
title: Ratamestari
order: 1
image: ../../assets/projects/ratamestari.png
imageAlt: Ratamestari's landing page. Next to the headline "A first course in minutes, set by the rules." is an orienteering map with an eight-control course drawn in purple and its control description sheet.
imageCaption: The landing page, showing a course the engine set. Map © Vehkalahden Veikot.
note: Started at a hackathon, where it won.
stack: [TypeScript, React, OpenLayers]
links:
  - label: Try it
    url: https://pouju.github.io/ratamestari/
  - label: Source code
    url: https://github.com/pouju/ratamestari
---

Setting a good orienteering course takes years to learn. Ratamestari sets one automatically from an OCAD map. Its course-setting engine is built on the orienteering rules, the mapping specification and a pathfinding algorithm.

I built it with agentic AI tools. The detailed rules and specifications were good input for the AI, but engineering and domain knowledge made the product good. Clubs share their map files with great caution, so the map never leaves the browser, not even for the optional AI assistant. I first planned to put AI at the core of the app, but predictable code turned out to be the better engine.
