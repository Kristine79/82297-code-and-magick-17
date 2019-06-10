'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var createFullName = function (names, surnames) {
  return getRandom(names) + ' ' + getRandom(surnames);
};

var insertWizard = function (wizard) {
  var wizardNode = similarWizardTemplate.cloneNode(true);

  wizardNode.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardNode.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardNode.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardNode;
};

var createAllWizards = function (namesArray, surnamesArray, coatsArray, eyesArray) {

  var createdwizards = [];

  for (var i = 0; i < 4; i++) {
    createdwizards[i] = {
      name: createFullName(namesArray, surnamesArray),
      coatColor: getRandom(coatsArray),
      eyesColor: getRandom(eyesArray)
    };
  }

  return createdwizards;

};

var createdwizards = createAllWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);


var showWizardsList = function (wizardsArray) {

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(insertWizard(wizardsArray[i]));
  }

  similarListElement.appendChild(fragment);

};

showWizardsList(createdwizards);
