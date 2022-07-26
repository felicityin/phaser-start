import Phaser from "phaser";
import { LoadScene } from "./scene/load";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    parent: 'game',
    scene: [LoadScene],
};

var game = new Phaser.Game(config);
