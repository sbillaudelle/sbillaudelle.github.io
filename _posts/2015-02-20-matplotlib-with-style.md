---
layout: post
title: "Matplotlib With Style"
feature-img: "img/posts/2015-02-17-matplotlib-with-style/teaser.jpg"
description: ""
category: 
tags: []
---

[matplotlib](http://matplotlib.org/) definitely is the first choice for generating plots from Python and has established itself as the _de facto_ standard in scientific plotting. Despite providing a simple interface, it comes with support for even the most exotic graphics. However, the default styling looks dull and could definitely need an update! This article will introduce a custom plotting style that is more pleasing to the eye while it does not distract from the underlaying objective: creating informative and clear graphics.

The presented theme was derived from the excellent [work of Huy Nguyen](http://www.huyng.com/posts/sane-color-scheme-for-matplotlib/). His `matplotlibrc` file is inspired by the default [ggplot2](http://ggplot2.org/) design and was specificly compiled for plots viewed on a computer screen. My take on this topic however is intended to generate plots which are crisp and look beautiful on screen as well as paper.

![A simple plot of trigonometric functions.](/img/posts/2015-02-17-matplotlib-with-style/examples/trig.png){:.half}
![An examplary histogram.](/img/posts/2015-02-17-matplotlib-with-style/examples/hist.png){:.half}

The following paragraphs are meant to explain the choices made for this style. They do by no means represent a scientific derivation but merely resemble my personal taste -- and incorporate feedback from many friends and colleagues.

### Rendering

I am using the `pgf` backend which has been introduced to `matplotlib` quite lately. It leaves the rendering to [XeLaTeX](http://www.xelatex.org/) or [LuaLaTex](http://www.luatex.org/) and can generate [pgf](https://www.ctan.org/pkg/pgf) compatible output which can be embedded directly into LaTeX documents.

For printing purposes, I primarily use fonts from the amazing open fonts project [Linux Libertine](http://www.linuxlibertine.org/). This of course is debatable -- especially for on-screen viewing. For presentations, I mostly switch to Mozilla's [Fira Sans](https://www.mozilla.org/en-US/styleguide/products/firefox-os/typeface/).

Caveat: the `pgf` backend does not support `plt.show()` to show a live version of the plot. I simply work around this issue by writing the output to a file.

### Color Scheme

The most important component of the color scheme is of course the coloring of the actual data. The following palette is intended to please the eye while at the same time ensuring enough contrast between successive data sets.

![Color palette used in this style.](/img/posts/2015-02-17-matplotlib-with-style/color-scheme.png){:.half}

This palette was taken from the `matplotlibrc` this style is based on. However, the background color was set to white instead of grey. This does not only make sense for printing, but also increases contrast in general. Lines and grid are kept in a light grey tone in order not to distract from the actual content.

## Usage

My `matplotlibrc` is [hostet on GitHub](https://github.com/sbillaudelle/matplotlibrc). Alternatively, you can just grab the [latest version of the file](https://raw.githubusercontent.com/sbillaudelle/matplotlibrc/master/matplotlibrc). I will try to keep it up to date and would love to get some feedback from you!

To use the `matplotlibrc` from the repo, just copy it to either `~/.config/matplotlib/matplotlibrc` or `~/.matplotlib/matplotlibrc` depending on your system and package version.
