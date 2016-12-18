# Minbay

Minbay is a simple-as-possible implementation of an Sbot client using Patchbay modules compiled using Depject. WIP.

This supports only the lite client for remote and local.

```
npm install
npm run build
npm start
navigate to https://localhost:8888/ to see minbay
```

Install sbot and associated plugins

```
sudo npm install -g scuttlebot
sbot server
```

In another window

```
sbot plugins.install ssb-ws
sbot plugins.install ssb-links
sbot plugins.install ssb-query
```

And restart sbot

Next you'll need a `--modern` sbot invite

```
sbot invite.create --modern
"ws://localhost:8989~shs:8Qee0I/DwI5DHSCi3p5fsl6FyLGArrnDz3ox9qZr5Qc=:O9dsqKEcHJcPacKY7tutmWkK7T/0tfmTaOf9fi1GD8k="
```

Paste this invite, without the quotes into the webserver running minbay

https://localhost:8888#ws://localhost:8989~shs:8Qee0I/DwI5DHSCi3p5fsl6FyLGArrnDz3ox9qZr5Qc=:O9dsqKEcHJcPacKY7tutmWkK7T/0tfmTaOf9fi1GD8k=

And you'll be up and running. 

All of this could be easier.

## License

MIT





