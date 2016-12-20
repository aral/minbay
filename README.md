# Minbay

Minbay is a simple-as-possible implementation of an sbot client using [Patchbay](https://gitmx.com/%25s9mSFATE4RGyJx9wgH22lBrvD4CgUQW4yeguSWWjtqc%3D.sha256) modules and compiled using [depject](https://gitmx.com/%25%2BGrd1NiHD3RgaCEbcesLGeEFpjL1AfeN5xfkGaezyoI%3D.sha256).

Minbay supports only the lite client for remote and local. To use the lite client you'll need a local lite client invite, as well as an invite to a pub on the main sbot network. 

### Install

```
% git clone https://gitmx.com/%25UTn%2FAoIVVF%2F4yKI7PKIWrHeWb1q7sTMCWVyYY1XTiCk%3D.sha256 minbay
% cd minbay && npm install && npm run build
% npm start
```
At this point Sbot and Minbay should launch. It'll output 

```
Your lite client is now listening at http://localhost:3000/
Here's an invite. Copy and paste the link below into your browser.
http://localhost:3000#ws://localhost:8989~shs:8Qee0I/DwI5DHSCi3p5fsl6FyLGArrnDz3ox9qZr5Qc=:r00a2jOdv6leywA3HpYDWI86vjpCiFFb8CO+YAOM/rI=
```

Click the invite to connect the lite client in your browser to the sbot daemon.

Next you may need an invite to a pub on the main network to see the posts of others, see [scuttlebot.io](http://scuttlebot.io/docs/social/join-a-pub.html) for details

## License

MIT





