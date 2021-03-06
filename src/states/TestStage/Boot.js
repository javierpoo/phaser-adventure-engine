import Phaser from "phaser";
import WebFont from "webfontloader";

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = "#EEE";
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload() {
    WebFont.load({
      google: {
        families: ["Bangers"]
      },
      active: this.fontsLoaded
    });

    let text = this.add.text(
      this.world.centerX,
      this.world.centerY,
      "loading test stage",
      { font: "16px Arial", fill: "#000000", align: "center" }
    );
    text.anchor.setTo(0.5, 0.5);

    this.load.json("map", "./assets/tilemaps/maps/salt_lake_v1.json");
    this.load.json(
      "salt_lake_shape_1",
      "./assets/tilemaps/maps/salt_lake/shape1.json"
    );
    this.load.json(
      "map_points",
      "./assets/tilemaps/maps/salt_lake/points.json"
    );
  }

  create() {}

  render() {
    if (this.fontsReady) {
      this.state.start("TestStageSplash");
    }
  }

  fontsLoaded() {
    this.fontsReady = true;
  }
}