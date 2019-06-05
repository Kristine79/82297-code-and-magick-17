 'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var COLOR_ME = 'rgba(255, 0, 0, 1)';
var COLOR_PLAYERS = 'rgba(0, 0, 255)';


 var showCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {

  showCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  showCloud(ctx, 100, 10, '#ffffff');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
  var x = CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i
  var y = CLOUD_Y + GAP

   ctx.fillText(names[i], x, y)

   ctx.fillRect(CLOUD_Y + GAP + TEXT_WIDTH, CLOUD_X + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }

};
