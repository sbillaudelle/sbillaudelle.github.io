---
layout: post
title: "Matplotlib With Style"
feature-img: "img/posts/2015-02-17-matplotlib-with-style/teaser.jpg"
description: ""
category: 
tags: []
---

[matplotlib](http://matplotlib.org/) is the first choice for generating plots from Python. At least, that has been my experience in the scientific field. A simple interface and support for even the most exotic graphics contribute to this role as the _de facto_ standard. For many however, the results look disappointing and dull. This article will introduce a custom plotting style that is more pleasing to the eye while not distracting from the underlaying objective: creating informative and clear graphics.

I want to point out that the presented theme was derived from the excellent [work of Huy Nguyen](http://www.huyng.com/posts/sane-color-scheme-for-matplotlib/). His `matplotlibrc` file is inspired by the default [ggplot2](http://ggplot2.org/) style and was specificly compiled for plots viewed on a computer screen. My take on this topic however is intended to generate plots which are crisp and look beautiful on screen as well as paper.

![A simple plot of trigonometric functions.](/img/posts/2015-02-17-matplotlib-with-style/examples/trig.png){:.half}
![An examplary histogram.](/img/posts/2015-02-17-matplotlib-with-style/examples/hist.png){:.half}

## Walkthrough

The following paragraphs are meant to explain the choices made for this style. They do by no means represent a scientific derivation but merely resemble my personal taste -- and incorporate feedback from many friends and colleagues.

### Color Scheme

The most important component of the color scheme is of course the coloring of the actual data. The following palette is intended to please the eye while at the same time ensuring enough contrast between successive data sets.

![Color palette used in this style.](/img/posts/2015-02-17-matplotlib-with-style/color-scheme.png){:.half}

This palette was taken from the `matplotlibrc` this style is based on. However, the background was configured to be white instead of grey. This does not only sense for printing, but also increases contrast in general. Lines and grid are kept in a lightgrey tone in order not to distract from the actual content.

### Fonts

For printing purposes, I primarily use fonts from the amazing open fonts project [Linux Libertine](http://www.linuxlibertine.org/). This of course is debatable -- especially for on-screen viewing. For presentations, I mostly switch to Mozilla's [Fira Sans](https://www.mozilla.org/en-US/styleguide/products/firefox-os/typeface/).

## Download
