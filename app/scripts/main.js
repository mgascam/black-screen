var APP = APP || {};

APP.stage = undefined;
APP.blackScreenContainer = undefined;

function initCanvas() {
  APP.stage = new createjs.Stage('mainCanvas');
  APP.stage.canvas.width = $(window).width();
  APP.stage.canvas.height = $(window).height();
  createjs.Ticker.addEventListener("tick", APP.stage);
}

function initBlackScreen() {
  APP.blackScreenContainer = new createjs.Container();

  var bkg = new createjs.Shape();
  bkg.graphics.beginFill('#00FF00');
  bkg.graphics.drawRect(0,0, APP.stage.canvas.width, APP.stage.canvas.height);


  var shape = new createjs.Shape();
  shape.graphics.beginFill('#000000');
  shape.graphics.drawRect(0,0, 800, 600);
  shape.regX = -(APP.stage.canvas.width - 800) / 2;
  shape.regY = -(APP.stage.canvas.height - 600) / 2;
  shape.alpha = 0.5;

  APP.blackScreenContainer.addChild(bkg);
  APP.blackScreenContainer.addChild(shape);

  APP.stage.addChild(APP.blackScreenContainer);

}

APP.start = function start() {
  initCanvas();
  initBlackScreen();
};

