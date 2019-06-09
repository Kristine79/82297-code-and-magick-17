'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 150;
var CLOUD_Y = 50;
var GAP = 50;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var showCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {

  showCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  showCloud(ctx, 100, 10, '#ffffff');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var getMaxElement = function (arr) {
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
    var x = CLOUD_X + (GAP + BAR_WIDTH) * i;
    var y = CLOUD_Y + GAP + BAR_HEIGHT;
    var barHeight = BAR_HEIGHT * (times[i] / maxTime) * -1;

    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], x, y + FONT_GAP);

    var ytimes = CLOUD_Y + GAP;
    ctx.fillText(Math.round(times[i]), x, ytimes + FONT_GAP);


    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    ctx.fillRect(x, y, BAR_WIDTH, barHeight);
  }
};
