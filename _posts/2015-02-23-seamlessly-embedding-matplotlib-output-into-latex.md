---
layout: post
title: "Seamlessly Embedding Matplotlib Output into LaTeX"
description: ""
category: 
tags: []
---

In the scientific field, many people use [matplotlib](http://matplotlib.org/) for generating plots and then embed the results in their LaTeX document. Why would you want to care about the actual format of the plot graphics? There is of course one obviously bad choice: pixel graphics. Compared to other formats their file size is huge and they don't scale well at all. "So how about PDF files? I mean, isn't that a some kind of a vector format?", you might ask. Good question! I love PDFs and yes, with a few exceptions (for example `plt.imshow`) matplotlib writes vector data into `.pdf` files. It's definitely a good way to preview and store a standalone plot and exchange it with others. But you would not want to embed a matplotlib PDF export in your beautiful LaTeX document. The following paragraphs might explain, why you might to change your existing workflow…

By default matplotlib uses its own, custom text and math rendering system called [mathtext](http://matplotlib.org/users/mathtext.html#mathtext-tutorial). Even if you make use of the `text.usetex` setting and your `matplotlibrc` is set up to match your LaTeX document font settings -- which it probably isn't --, there's a chance that your beautiful figure will look like a fish out of water. Luckily, matplotlib has built-in support for generating LaTeX code. To be more precise, it is able to dump your plot as a bunch of [PGF](https://www.ctan.org/pkg/pgf) commands. There are multiple advantages to this solution:

 - Your figure will have exactly the size you have specified either in your `matplotlibrc` or manually in your plotting code. You don't need to worry about the width of your figure when including it into your document.
 - Everything is rendered by LaTeX. And that is even in the same run as the rest of your document. This ensures that your figures and text look and feel consistent.
 - LaTeX will use the same fonts for your plots that you have selected for everything else in the document. You don't even have to care about that when you generate your plot. To be precise, it uses the _sans font_ for displaying your labels and whichever _math font_ you have chosen for formulas and other mathematical expressions.

In your plotting script, you don't have to change anything except for the file's extension. I would recommend to save the figure as a `.pgf` as well as a `.pdf` file. This way you can preview the plot by simply opening the PDF and use the other one for embedding.

{% highlight python linenos %}
import numpy as np
import matplotlib.pyplot as plt

# set up figure size
plt.figure(figsize=(5.8, 3.0))

# do some plotting here
x = np.linspace(-2, 2, 1e3)
plt.plot(x, x**2)

# save to file
plt.savefig('example.pdf')
plt.savefig('example.pgf')
{% endhighlight %}

In your LaTeX document, you now can simply embed the `.pgf` file by using `\input{…}`.

{% highlight latex linenos %}
\begin{figure}
	\begin{center}
		\input{path/to/example.pgf}
	\end{center}
	\caption{Example figure proudly made with matplotlib's PGF backend.}
\end{figure}
{% endhighlight %}

And that's it. Easy, right? I hope this post did enlighten you and you will never embed your plots using a PDF file or even a pixel graphic. Please help me to improve this article by sending me feedback. I would love to hear about your plotting adventures!
