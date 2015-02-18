import numpy as np
import matplotlib.pyplot as plt

plt.figure(figsize=(6.6, 3), dpi=90)
x = np.linspace(-2*np.pi, 2*np.pi, 1e3)

plt.plot(x, np.sin(x), label="$\sin(x)$")
plt.plot(x, np.cos(x), label="$\sin(x)$")

plt.xlim((np.min(x), np.max(x)))

plt.xlabel("$x$")
plt.ylabel("$y$")
plt.savefig('trig.png', bbox_inches='tight', dpi=300)

plt.figure(figsize=(6.6, 3), dpi=90)

data = np.random.normal(0, 1, 100)

plt.hist(data, bins=10)

plt.xlabel("Data")
plt.ylabel("$\#$")
plt.savefig('hist.png', bbox_inches='tight', dpi=200)
