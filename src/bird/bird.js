import './index.css';
import './melonJS-min';
import game from './js/game';
// import  './js/game.js';
import './js/entities/entities.js';
import './js/entities/HUD.js';
import  './js/screens/title.js';
import './js/screens/play.js';
import  './js/screens/gameover.js';
window.onReady(function onReady() {
    game.onload();
});
