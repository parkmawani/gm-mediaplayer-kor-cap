import { Bokeh1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/bokeh1.cdn.min.js'

const bokeh1Background = Bokeh1Background(document.getElementById('webgl-canvas'))
bokeh1Background.loadMap('https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png')
bokeh1Background.setColors([0x6d4862, 0xfd826c, 0x22ccc1])

document.body.addEventListener('click', () => {
  // bokeh1Background.setBackgroundColor(0xffffff * Math.random())
  bokeh1Background.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
})