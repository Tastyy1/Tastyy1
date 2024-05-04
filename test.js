(() => {
  let {
    isSafeMode: _0x4c12f6,
    isTurboMode: _0x4ffead,
    isShowUI: _0x5c32e9,
    isAnimationOff: _0x5aefa8,
    isTargetMode: _0x1fb921,
    targetModeValue: _0x140439,
    isPassMode: _0x2d36ed,
    isPassLegend: _0x487e85,
    passModeValue: _0x2825,
    passValue: _0x497dbb,
    isAutoFarmXP: _0x526a73,
    isFarmingLocation: _0x43de9a,
    farmingLocationUrl: _0x2f09f6,
    farmingLocationErrorCount: _0x226e6a,
    isAutoGetX2: _0x5055f2,
    isGettingX2: _0x3f996d,
    isGetX2Failed: _0x3aa1f5,
    prevFarmXPLocation: _0xdbed0d,
    exp: _0x29bea8,
    time: _0x41d4b6,
    generalData: _0x13de7a,
    authenData: _0x4b34ce,
    isKeyTimeOut: _0x162511
  } = _0x139a94();
  let {
    appLanguage: _0x2f35af,
    featureVersion: _0x410c3d,
    notifyVersion: _0x1f47cd
  } = _0x33ff2b();
  class _0x19ea1f {
    ["version"] = "2.0.7";
    ["isAuto"] = false;
    ["isSolving"] = false;
    ["isFetching"] = false;
    ["appLanguage"] = _0x2f35af || 'en';
    ["isFreeKey"] = false;
    ["freeKey"] = "devx";
    ['freeKeyTime'] = "[datetime]";
    ["isSafeMode"] = !!_0x4c12f6;
    ["isTurboMode"] = !!_0x4ffead;
    ['isLegendMode'] = false;
    ["isAnimationOff"] = !!_0x5aefa8;
    ["isTargetMode"] = !!_0x1fb921;
    ["targetModeValue"] = _0x140439 || 0x0;
    ['isPassMode'] = false;
    ['isPassLegend'] = undefined !== _0x487e85 && _0x487e85;
    ["passModeValue"] = _0x2825 || 0x0;
    ["passValue"] = _0x497dbb || 0x0;
    ['isAutoFarmXP'] = _0x526a73;
    ["isFarmingLocation"] = !!_0x43de9a;
    ["farmingLocationUrl"] = _0x2f09f6 || '';
    ["farmingLocationErrorCount"] = _0x226e6a || 0x0;
    ["isAutoGetX2"] = !!_0x5055f2;
    ["isGettingX2"] = !!_0x3f996d;
    ["isGetX2Failed"] = !!_0x3aa1f5;
    ["prevFarmXPLocation"] = _0xdbed0d;
    ["isDarkMode"] = 'dark' === document.documentElement.getAttribute('data-duo-theme');
    ['nextTime'] = 0xc8;
    ["nextTimeTemp"] = 0x118;
    ["goChallengeTime"] = 0x1f4;
    ["reloadTime"] = 0x1b7740;
    ["totalReloadTime"] = 0x0;
    ['safeDelayTime'] = 0x0;
    ["safeDelayTimeTemp"] = 0x352;
    ["lessGenealogy"] = null;
    ['isEnterKey'] = false;
    ["isKeyTimeOut"] = !!_0x162511;
    ['keyTimeOut'] = 0x0;
    ['startTime'] = null;
    ["isShowUI"] = undefined === _0x5c32e9 || _0x5c32e9;
    ["exp"] = _0x29bea8 || 0x0;
    ["totalTime"] = _0x41d4b6 || 0x0;
    ["generalData"] = _0x13de7a;
    ["authenData"] = _0x4b34ce;
    ['apiUrl'] = "https://api.autoduolingo.click/super/data/";
    ['homePath'] = "/learn";
    ["practicePath"] = "/lesson/unit/1/level/1";
    ["practiceHubPath"] = '/practice-hub';
    ["listeningPacticePath"] = "/practice-hub/listening-practice";
    ['lessonPath'] = '/lesson';
    ['lessonWrapper'] = '.wqSzE';
    ["storyWrapper"] = "._2neC7";
    ["reactProps"] = null;
    ["dataStateNode"] = null;
    ["nativeTextareaValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    ["nativeInputValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    ["skipLegendarySuggestionBtn"] = "[class=\"_2CLME\"] button ._4iKvM";
    ["setup"] = function () {
      _0x2b3d50.setLanguage(this.appLanguage);
      this.createStyle();
      this.createSignature();
      this.createContact();
      this.createBtn();
      this.createKeyComponent();
      this.createStatistics();
      this.createFunctions();
      this.createSetting();
      this.createContainer();
      this.autoduoShowNewFeature();
      if (!_0x5c32e9) {
        this.handleShowHideUI();
      }
      if (_0x5aefa8) {
        this.handleAnimationOff();
      }
      if (_0x1fb921) {
        this.handleTargetModeOn();
      }
      if (_0x43de9a) {
        this.handleFarmingLocationOn();
      }
      this.renderTime();
      if (this.authenData) {
        this.setAuthen(this.authenData);
      } else {
        this.handleAuthen();
      }
      if (this.generalData) {
        this.setGeneral(this.generalData);
      } else {
        this.handleGetGeneral();
      }
      if (_0x2d36ed) {
        this.handlePassModeOn();
      }
      if (this.isAutoFarmXP) {
        this.startFarmXP();
      }
    };
    ["createSignature"] = function () {
      let _0x5e8c58 = [{
        'code': 'en',
        'text': "English",
        'icon': "https://autoduolingo.click/assets/client/america-flag.ndx"
      }, {
        'code': 'vi',
        'text': "Tiáº¿ng Viá»‡t",
        'icon': "https://autoduolingo.click/assets/client/vietnam-flag.ndx"
      }];
      let _0x4a6c91 = _0x5e8c58.find(_0x756c1a => _0x756c1a.code === this.appLanguage) || _0x5e8c58[0x0];
      this.signatureElm = document.createElement("div");
      Object.assign(this.signatureElm, {
        'className': 'signature-listening',
        'innerHTML': "\n\t\t\t\t\t<div>\n\t\t\t\t\t\tAuto-Duolingo DevX\n\t\t\t\t\t\t<div class=\"autoduo-language-wrapper\">\n\t\t\t\t\t\t\t<p class=\"autoduo-language-selected\"><i class=\"autoduo-language-icon\" style=\"--data-icon: url('" + _0x4a6c91.icon + "')\"></i>" + _0x4a6c91.text + "</p>\n\t\t\t\t\t\t\t<ul class=\"autoduo-language-selection\">\n\t\t\t\t\t\t\t\t" + _0x5e8c58.map(_0x205cf7 => "<li class=\"autoduo-language-option\" data-code=\"" + _0x205cf7.code + "\"><i class=\"autoduo-language-icon\" style=\"--data-icon: url('" + _0x205cf7.icon + "')\"></i>" + _0x205cf7.text + "</li>").join('') + "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t"
      });
      document.body.appendChild(this.signatureElm);
      let _0xc149f3 = _0x410634(".autoduo-language-selected");
      let _0x4c24db = _0x410634(".autoduo-language-selection");
      let _0x3468a5 = Array.from(_0x4c24db.querySelectorAll('.autoduo-language-option'));
      _0xc149f3.addEventListener("click", _0x29e923 => {
        _0x29e923.stopPropagation();
        _0x4c24db.classList.add('show');
        let _0x45aa8e = () => {
          _0x4c24db.classList.remove("show");
          window.removeEventListener("click", _0x45aa8e);
        };
        window.addEventListener('click', _0x45aa8e);
      });
      _0x3468a5.forEach(_0x1aec8b => {
        _0x1aec8b.addEventListener("click", () => {
          let _0x1a45ae = _0x1aec8b.dataset.code;
          if (_0x1a45ae === this.appLanguage) {
            return;
          }
          let _0x2a4110 = window.confirm(_0x424dc6("text62"));
          if (_0x2a4110) {
            _0x3b3b34('appLanguage', _0x1a45ae);
            window.location.reload();
          }
        });
      });
    };
    ['createContact'] = function () {
      this.contactWrapper = document.createElement("div");
      Object.assign(this.contactWrapper, {
        'className': "contact-wrapper-listening",
        'innerHTML': "<a class=\"contact-item-listening\" href=\"https://t.me/imdevx\" target=\"_blank\" style=\"--data-img: url('https://autoduolingo.click/assets/client/tele-icon.ndx')\">\n\t\t\t\t\t\t\t\t<p class=\"popup\">Chat with DevX</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"contact-item-listening\" href=\"https://t.me/autoduolingo\" target=\"_blank\" style=\"--data-img: url('https://autoduolingo.click/assets/client/tele-gr-icon.ndx')\">\n\t\t\t\t\t\t\t\t<p class=\"popup\">Telegram Community</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"contact-item-listening\" href=\"https://zalo.me/g/lmhfps187\" target=\"_blank\" style=\"--data-img: url('https://autoduolingo.click/assets/client/zalo-icon.ndx')\">\n\t\t\t\t\t\t\t\t<p class=\"popup\">Zalo Community</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"contact-item-listening\" href=\"https://www.youtube.com/@autoduofamily\" target=\"_blank\" style=\"--data-img: url('https://autoduolingo.click/assets/client/youtube-icon.ndx')\">\n\t\t\t\t\t\t\t\t<p class=\"popup\">Youtube Channel</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"contact-item-listening\" href=\"https://greasyfork.org/en/scripts/487867-auto-duolingo\" target=\"_blank\" style=\"--data-img: url('https://autoduolingo.click/assets/client/greasyfork-icon.ndx')\">\n\t\t\t\t\t\t\t\t<p class=\"popup\">Greasy Fork</p>\n\t\t\t\t\t\t\t</a>"
      });
    };
    ['createBtn'] = function () {
      this.autoFarmBtn = document.createElement("button");
      Object.assign(this.autoFarmBtn, {
        'className': "autoduo-btn btn-green auto-farm-btn-listening",
        'innerHTML': _0x424dc6("text36") + " <label>(" + _0x424dc6('text73') + ")</label>"
      });
      this.autoFarmBtn.addEventListener("click", () => {
        if (this.autoFarmBtn.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (this.isAutoFarmXP) {
          if (this.isGettingX2) {
            let _0x175800 = window.confirm(_0x424dc6("text82"));
            if (!_0x175800) {
              return;
            }
          }
          this.handleFarmXPOff();
        } else {
          this.handleFarmXPOn();
        }
      });
      this.dropKeyBtn = document.createElement("button");
      Object.assign(this.dropKeyBtn, {
        'className': "autoduo-btn dropkey-btn-listening",
        'innerText': _0x424dc6("text38")
      });
      this.dropKeyBtn.addEventListener("click", () => {
        let _0x216701 = window.confirm(_0x424dc6("text39"));
        if (_0x216701) {
          _0x3b3b34('key', null);
          _0x3207ea();
          this.handleReload();
        }
      });
      this.feedbackBtn = document.createElement('a');
      Object.assign(this.feedbackBtn, {
        'className': "autoduo-btn btn-orange feedback-btn-listening",
        'innerText': _0x424dc6("text64"),
        'target': "_blank"
      });
      this.showHideBtn = document.createElement('button');
      Object.assign(this.showHideBtn, {
        'className': "show-hide-listening",
        'style': "--data-version: 'V" + this.version + "'",
        'innerHTML': "<i></i>"
      });
      this.showHideBtn.addEventListener("click", () => {
        this.isShowUI = !this.isShowUI;
        this.handleShowHideUI(true);
      });
      document.body.append(this.showHideBtn);
    };
    ["createStatistics"] = function () {
      this.statistic = document.createElement("div");
      this.keyTypeElm = document.createElement('p');
      this.keyExpiredElm = document.createElement('p');
      this.expElm = document.createElement('p');
      this.dateElm = document.createElement('p');
      let _0x2a6c8f = document.createElement("div");
      Object.assign(this.keyTypeElm, {
        'className': "key-type-listening",
        'style': "--data-name: \"" + _0x424dc6("text13") + "\""
      });
      Object.assign(this.keyExpiredElm, {
        'className': "key-expired-listening",
        'style': "--data-name: \"" + _0x424dc6('text14') + "\""
      });
      this.expElm.className = "total-exp-listening";
      this.expElm.innerText = this.exp;
      this.statistic.className = "statistic-listening";
      this.dateElm.className = "time-listening";
      _0x2a6c8f.className = 'statistic-wrapper-listening';
      _0x2a6c8f.append(this.expElm, this.dateElm);
      this.statistic.append(this.keyTypeElm, this.keyExpiredElm, _0x2a6c8f);
    };
    ["createFunctions"] = function () {
      this.animationOffWrapper = document.createElement("div");
      this.animationOffWrapper.style = "--data-name: \"" + _0x424dc6("text16") + "\"";
      let _0x50c7a1 = _0x424dc6("text17");
      this.autoduoCreateSwitch(_0x50c7a1, this.animationOffWrapper, this.isAnimationOff, _0x2fea12 => {
        this.isAnimationOff = !this.isAnimationOff;
        this.handleAnimationOff(true);
        _0x2fea12(this.isAnimationOff);
      });
      this.safeModeWrapper = document.createElement("div");
      this.safeModeWrapper.style = "--data-name: \"" + _0x424dc6('text18') + "\"";
      let _0x25411d = _0x424dc6('text19');
      this.autoduoCreateSwitch(_0x25411d, this.safeModeWrapper, this.isSafeMode, () => {
        if (this.isSafeMode) {
          this.handleSafeModeOff();
        } else {
          this.handleSafeModeOn();
        }
      });
      this.turboModeWrapper = document.createElement("div");
      this.turboModeWrapper.style = "--data-name: \"" + _0x424dc6('text20') + "\"";
      let _0x3ced6e = _0x424dc6("text21");
      this.autoduoCreateSwitch(_0x3ced6e, this.turboModeWrapper, this.isTurboMode, () => {
        if (this.isTurboMode) {
          this.handleTurboModeOff();
        } else {
          this.handleTurboModeOn(true);
        }
      });
      this.legendModeWrapper = document.createElement("div");
      this.legendModeWrapper.style = "--data-name: \"" + _0x424dc6('text23') + "\"";
      let _0x358e49 = _0x424dc6("text24");
      this.autoduoCreateSwitch(_0x358e49, this.legendModeWrapper, this.isLegendMode, () => {
        if (this.legendModeWrapper.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (!this.isAuto || this.isLegendMode) {
          if (this.isLegendMode) {
            this.stopLegend();
          } else {
            this.startLegend();
          }
        }
      });
      this.targetModeWrapper = document.createElement("div");
      this.targetModeWrapper.style = "--data-name: \"" + _0x424dc6("text25") + "\"";
      let _0x1a0744 = _0x424dc6("text26");
      this.autoduoCreateSwitch(_0x1a0744, this.targetModeWrapper, this.isTargetMode, () => {
        if (this.isTargetMode) {
          let _0x19b153 = window.confirm(_0x424dc6('text27'));
          if (_0x19b153) {
            this.handleTargetModeOff();
          }
          return;
        }
        let _0x3c6af9;
        for (;;) {
          let _0x5d890a = window.prompt(_0x424dc6("text28"));
          if (null === _0x5d890a) {
            return;
          }
          if (Number.isNaN(_0x3c6af9 = parseInt(_0x5d890a))) {
            alert(_0x424dc6("text29"));
            continue;
          }
          if (_0x3c6af9 <= this.exp) {
            alert(_0x424dc6("text30", this.exp));
            continue;
          }
          if (_0x3c6af9 > 0xf4240) {
            alert(_0x424dc6("text31"));
            continue;
          }
          break;
        }
        this.targetModeValue = _0x3c6af9;
        this.handleTargetModeOn(true);
      });
      this.targetModeLabel = document.createElement('p');
      Object.assign(this.targetModeLabel, {
        'className': "targetmode-label-listening label-listening",
        'style': "--data-frefix: \"" + _0x424dc6("text63") + "\""
      });
      this.passModeWrapper = document.createElement("div");
      this.passModeWrapper.style = "--data-name: \"" + _0x424dc6("text32") + "\"";
      let _0x1fe337 = _0x424dc6('text33');
      this.autoduoCreateSwitch(_0x1fe337, this.passModeWrapper, this.isPassMode, () => {
        if (this.passModeWrapper.classList.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (this.isAuto && !this.isPassMode) {
          return;
        }
        if (this.isPassMode) {
          let _0x127c5e = window.confirm(_0x424dc6('text34'));
          if (_0x127c5e) {
            if (this.isPassLegend) {
              _0x5f0d10("isPassLegend", this.isPassLegend = false);
            }
            this.handlePassModeOff();
          }
          return;
        }
        let _0x3385f0;
        for (;;) {
          let _0x1e5d9e = window.prompt(_0x424dc6("text35"));
          if (null === _0x1e5d9e) {
            return;
          }
          if (Number.isNaN(_0x3385f0 = parseInt(_0x1e5d9e)) || _0x3385f0 < 0x0) {
            alert(_0x424dc6("text29"));
            continue;
          }
          if (_0x3385f0 > 0x3e8) {
            alert(_0x424dc6('text31'));
            continue;
          }
          if (0x0 === _0x3385f0) {
            _0x3385f0 = 0xf423f;
          }
          break;
        }
        this.passModeValue = _0x3385f0;
        this.passValue = 0x0;
        this.isPassLegend = window.confirm(_0x424dc6('text66'));
        _0x5f0d10("isPassLegend", this.isPassLegend);
        this.handlePassModeOn(true);
      });
      this.passModeLabel = document.createElement('p');
      this.passModeLabel.className = "label-listening";
      this.farmingLocationContainer = document.createElement("div");
      this.farmingLocationWrapper = document.createElement("div");
      this.farmingLocationWrapper.style = "--data-name: \"" + _0x424dc6('text68') + "\"";
      let _0x44ee49 = _0x424dc6("text69");
      this.autoduoCreateSwitch(_0x44ee49, this.farmingLocationWrapper, this.isFarmingLocation, _0xe0e66d => {
        if (this.farmingLocationContainer.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (this.isAutoFarmXP) {
          return;
        }
        if (true === this.isFarmingLocation) {
          this.handleFarmingLocationOff();
          _0xe0e66d(false);
          return;
        }
        let _0x47be99 = RegExp("https://[a-z]+.duolingo.com/.*");
        let _0x1725e6 = '';
        for (;;) {
          if (null === (_0x1725e6 = window.prompt(_0x424dc6('text70')))) {
            return;
          }
          if (!_0x47be99.test(_0x1725e6)) {
            window.alert(_0x424dc6("text71"));
            continue;
          }
          break;
        }
        this.farmingLocationUrl = _0x1725e6;
        this.handleFarmingLocationOn(true);
        _0xe0e66d(true);
      });
      this.localFarmingLocationLabel = document.createElement('p');
      this.localFarmingLocationLabel.className = "local-label-listening";
      this.farmingLocationContainer.appendChild(this.farmingLocationWrapper);
      this.darkModeWrapper = document.createElement("div");
      this.darkModeWrapper.style = "--data-name: \"" + _0x424dc6("text76") + "\"";
      let _0x185742 = _0x424dc6('text77');
      this.autoduoCreateSwitch(_0x185742, this.darkModeWrapper, this.isDarkMode, _0x209a8b => {
        this.isDarkMode = !this.isDarkMode;
        let [_0x391355, _0x25a77c] = this.isDarkMode ? ["dark", 'on'] : ['light', 'off'];
        document.documentElement.setAttribute("data-duo-theme", _0x391355);
        localStorage.setItem("duo.darkMode", "{\"1313105280\":\"" + _0x25a77c + "\"}");
        _0x209a8b(this.isDarkMode);
      });
      this.autoGetX2Wrapper = document.createElement('div');
      this.autoGetX2Wrapper.className = "auto-x2-wrapper";
      this.autoGetX2Wrapper.style = "--data-name: \"" + _0x424dc6('text78') + "\"";
      let _0x182d8d = _0x424dc6("text79");
      this.autoduoCreateSwitch(_0x182d8d, this.autoGetX2Wrapper, this.isAutoGetX2, _0x153b9e => {
        if (this.autoGetX2Wrapper.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (!this.isAutoFarmXP) {
          this.isAutoGetX2 = !this.isAutoGetX2;
          if (this.isAutoGetX2) {
            this.handleAutoGetX2On();
          } else {
            this.handleAutoGetX2Off();
          }
        }
      });
      this.autoGetX2Label = document.createElement('p');
      Object.assign(this.autoGetX2Label, {
        'className': "label-listening",
        'innerText': _0x424dc6("text80")
      });
      this.autoGetX2FailedLabel = this.autoGetX2Label.cloneNode();
      this.autoGetX2FailedLabel.innerText = _0x424dc6('text83');
      if (this.isAutoGetX2) {
        this.autoFarmBtn.classList.add('auto-x2');
      }
      this.functionWrapper = document.createElement('div');
      this.functionWrapper.className = "function-wrapper-listening";
      this.functionWrapper.append(this.safeModeWrapper, this.turboModeWrapper, this.legendModeWrapper, this.passModeWrapper);
    };
    ["createSetting"] = function () {
      this.settingBtn = document.createElement("button");
      Object.assign(this.settingBtn, {
        'className': "autoduo-btn setting-btn-listening",
        'innerText': _0x424dc6("text74")
      });
      this.settingBtn.addEventListener('click', () => {
        if (!this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.appendChild(this.settingOverlay);
        }
      });
      this.closeSettingBtn = document.createElement("button");
      Object.assign(this.closeSettingBtn, {
        'className': "autoduo-btn close-setting-btn-listening",
        'innerText': _0x424dc6("text75")
      });
      this.closeSettingBtn.addEventListener("click", () => {
        if (this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.removeChild(this.settingOverlay);
        }
      });
      this.settingOverlay = document.createElement("div");
      Object.assign(this.settingOverlay, {
        'className': "setting-overlay-listening",
        'innerHTML': "\n\t\t\t\t\t<h3>" + _0x424dc6("text74") + "</h3>\n\t\t\t\t"
      });
      this.settingFunction = document.createElement("div");
      this.settingFunction.className = 'setting-function-listening';
      this.settingFunction.append(this.darkModeWrapper, this.animationOffWrapper, this.targetModeWrapper, this.farmingLocationContainer, this.autoGetX2Wrapper);
      this.settingOverlay.append(this.settingFunction, this.closeSettingBtn);
    };
    ["createContainer"] = function () {
      this.keyContainer = document.createElement("div");
      this.keyContainer.className = "key-container-listening";
      this.keyContainer.append(this.keyForm, this.guideBtn, this.getLinkBtn, this.guideGetLinkBtn, this.buyKeyBtn);
      this.autoContainer = document.createElement('div');
      this.autoContainer.className = "auto-container-listening";
      this.autoContainer.append(this.statistic, this.functionWrapper, this.settingBtn, this.autoFarmBtn, this.feedbackBtn, this.dropKeyBtn);
      this.overlayContainer = document.createElement('div');
      this.overlayContainer.className = "overlay-listening";
      this.controlContainer = document.createElement("div");
      this.controlContainer.className = "control-container-listening";
      this.controlContainer.append(this.keyContainer, this.contactWrapper);
      this.autoduoLabelWrapper = document.createElement('div');
      this.autoduoLabelWrapper.className = "autoduo-label";
      document.body.append(this.controlContainer, this.autoduoLabelWrapper);
    };
    ["createKeyComponent"] = function () {
      this.keyForm = document.createElement("form");
      this.keyBtn = document.createElement("button");
      Object.assign(this.keyBtn, {
        'className': "autoduo-btn btn-green key-btn-listening",
        'innerText': _0x424dc6("text2")
      });
      this.keyInput = document.createElement("input");
      Object.assign(this.keyInput, {
        'className': "key-input-listening",
        'placeholder': _0x424dc6('text1'),
        'autocomplete': "off"
      });
      this.keyForm.append(this.keyInput, this.keyBtn);
      this.btnLoading = document.createElement("div");
      Object.assign(this.btnLoading, {
        'className': "loading-btn-listening",
        'innerHTML': "<span class=\"loading-btn-dot\"></span>\n\t\t\t\t\t <span class=\"loading-btn-dot\"></span>\n\t\t\t\t\t <span class=\"loading-btn-dot\"></span>"
      });
      this.guideBtn = document.createElement('div');
      Object.assign(this.guideBtn, {
        'className': "autoduo-btn guide-btn-listening",
        'innerText': _0x424dc6("text3")
      });
      this.getLinkBtn = document.createElement('a');
      Object.assign(this.getLinkBtn, {
        'className': "autoduo-btn btn-white getlink-btn-listening",
        'innerText': _0x424dc6("text4"),
        'target': "_blank"
      });
      this.guideGetLinkBtn = document.createElement('a');
      Object.assign(this.guideGetLinkBtn, {
        'className': "autoduo-btn btn-blue guide-getlink-btn-listening",
        'innerText': _0x424dc6("text5"),
        'target': "_blank"
      });
      this.buyKeyBtn = document.createElement('a');
      Object.assign(this.buyKeyBtn, {
        'className': "autoduo-btn btn-purple key-vip-btn-listening",
        'innerText': _0x424dc6('text6'),
        'target': "_blank"
      });
      this.keyInput.onkeydown = _0x2db2e => _0x2db2e.stopPropagation();
      this.btnLoading.onclick = _0x3e6101 => _0x3e6101.stopPropagation();
      this.keyForm.addEventListener("submit", _0x251ded => {
        _0x251ded.preventDefault();
        if (this.isFetching) {
          return;
        }
        let _0x3a695b = this.keyInput.value;
        if (_0x3a695b) {
          this.handleAuthen(_0x3a695b, true, 0x3e8);
        }
      });
      this.guideBtn.addEventListener("click", this.showGuide);
    };
    ["handleAuthen"] = function (_0xdee96c, _0x34e621 = false, _0x5216db = 0x0) {
      if (!_0xdee96c && !(_0xdee96c = _0x54ae07("key"))) {
        this.handleFreeKey();
        return;
      }
      this.showKeyBtnLoading(true);
      let _0x5cd70c = new FormData();
      _0x5cd70c.append("key", _0xdee96c);
      try {
        let _0x250c1c = JSON.parse(localStorage.getItem("duo.lastLogin"));
        if (_0x250c1c) {
          _0x5cd70c.append("user", btoa(_0x250c1c.email));
        }
      } catch (_0x163826) {}
      setTimeout(() => {
        fetch(this.apiUrl + "?0a27c1ee63dd220647e8410a002=1713324949121", {
          'method': "post",
          'body': _0x5cd70c
        }).then(_0x3e0d60 => _0x3e0d60?.['json']()).then(_0x514aa3 => {
          switch (_0x514aa3?.['code']) {
            case 0xc8:
              let _0x2e9fe3 = _0x514aa3.data;
              this.setAuthen(_0x2e9fe3);
              _0x5f0d10('authenData', _0x2e9fe3);
              if (_0x34e621) {
                _0x3b3b34('key', _0xdee96c);
              }
              break;
            case 0x190:
              this.setAuthen(_0x2e9fe3);
              _0x5f0d10('authenData', _0x2e9fe3);
              if (_0x34e621) {
                _0x3b3b34('key', _0xdee96c);
              }
              break;
            case 0x191:
              this.setAuthen(_0x2e9fe3);
              _0x5f0d10('authenData', _0x2e9fe3);
              if (_0x34e621) {
                _0x3b3b34('key', _0xdee96c);
              }
              break;
            default:
              this.setAuthen(_0x2e9fe3);
              _0x5f0d10('authenData', _0x2e9fe3);
              if (_0x34e621) {
                _0x3b3b34('key', _0xdee96c);
              }
          }
        })['finally'](() => {
          this.showKeyBtnLoading(false);
        });
      }, _0x5216db);
    };
    ["setAuthen"] = function (_0x38d696) {
      let _0x500689 = this.autoduoDecode(_0x38d696);
      if (null === _0x500689) {
        _0x5f0d10('authenData', null);
        return this.autoduoError(_0x424dc6("text10"));
      }
      let {
        keyData: _0x1f9b1d,
        lessGenealogy: _0x31e0e4
      } = _0x500689;
      let _0x191a1d = new Date(_0x1f9b1d.expiredAt);
      let _0x3f7ea1 = _0x191a1d.getTime();
      if (_0x3f7ea1 <= Date.now()) {
        this.handleKeyTimeOut();
        return;
      }
      this.keyTimeOut = _0x3f7ea1;
      _0x1f9b1d.expiredAt = _0x5e5441(_0x191a1d);
      this.handleReadyAuto(_0x31e0e4, _0x1f9b1d);
    };
    ["handleGetGeneral"] = function () {
      fetch(this.apiUrl + "?auth=dxling").then(_0x4acb07 => _0x4acb07?.["json"]()).then(_0x36b3da => {
        if (_0x36b3da?.["code"] === 0xc8) {
          let _0x2ac5b0 = _0x36b3da.data;
          _0x5f0d10("generalData", _0x2ac5b0);
          this.setGeneral(_0x2ac5b0);
          this.handleGetGlobalNotify();
        }
      });
    };
    ["setGeneral"] = function (_0x5617bb) {
      let _0x2ae91f = this.autoduoDecode(_0x5617bb);
      if (null === _0x2ae91f) {
        _0x5f0d10('generalData', null);
        return this.autoduoError(_0x424dc6('text10'));
      }
      let {
        getKeyUrl: _0x39420d,
        buyKeyUrl: _0x2fb415,
        guideGetKeyUrl: _0x2e426f,
        feedbackUrl: _0x36c06f,
        sd: _0x1c37ac
      } = _0x2ae91f;
      this.getLinkBtn.href = _0x39420d;
      this.guideGetLinkBtn.href = _0x2e426f;
      this.buyKeyBtn.href = _0x2fb415;
      this.feedbackBtn.href = _0x36c06f;
      this.handleUpdateSpeed(_0x1c37ac);
    };
    ["handleUpdateSpeed"] = function (_0xba979f) {
      [this.nextTime, this.goChallengeTime, this.safeDelayTimeTemp] = _0xba979f;
      if (this.isSafeMode) {
        this.safeDelayTime = this.safeDelayTimeTemp;
      }
      if (this.isTurboMode) {
        this.handleTurboModeOn();
      }
    };
    ["handleGetGlobalNotify"] = function () {
      fetch(this.apiUrl + 'notify/?c7f54a73e6340a16176=91bf0d18b83').then(_0x20a3cf => _0x20a3cf?.["json"]()).then(_0xdf145c => {
        if (_0xdf145c?.["code"] === 0xc8) {
          let {
            notifyVersion: _0x29a243,
            notifyContent: _0x326b16
          } = _0xdf145c.data[0x0];
          this.handleGlobalNotify(_0x29a243, _0x326b16);
        }
      });
    };
    ["handleGlobalNotify"] = function (_0x10317c, _0x3e889c) {
      if ((_0x1f47cd || 0x0) < _0x10317c) {
        _0x3e889c = _0x3e889c.replaceAll("\\n", "\n");
        setTimeout(() => {
          alert(_0x3e889c);
          _0x3b3b34("notifyVersion", _0x10317c);
        }, 0x7d0);
      }
    };
    ['handleKeyMarkup'] = function (_0xeb9e41, _0x3d0781) {
      let _0x1e507c;
      let _0x390ae7;
      if ("event" === _0xeb9e41) {
        _0x1e507c = "<b class='vip-type-listening event'>VIP EVENT</b>";
        _0x390ae7 = "<b class='vip-expired-listening event'>" + _0x3d0781 + "</b>";
        this.showHideBtn.classList.add('event');
        this.controlContainer.classList.add("event");
        this.signatureElm.classList.add('event');
      } else {
        _0x1e507c = "<b class='vip-type-listening'>VIP KEY</b>";
        _0x390ae7 = "<b class='vip-expired-listening'>" + _0x3d0781 + '</b>';
      }
      this.keyTypeElm.innerHTML = _0x1e507c;
      this.keyExpiredElm.innerHTML = _0x390ae7;
    };
    ["handleReadyAuto"] = function (_0x3ffa31, _0x4f14ca) {
      let {
        type: _0x5aa7cb,
        expiredAt: _0x4f58bf
      } = _0x4f14ca;
      this.handleKeyMarkup(_0x5aa7cb, _0x4f58bf);
      this.lessGenealogy = _0x3ffa31;
      this.isEnterKey = true;
      this.controlContainer.replaceChild(this.autoContainer, this.keyContainer);
    };
    ["handleKeyTimeOut"] = function () {
      _0x5f0d10({
        'authenData': null,
        'isKeyTimeOut': true
      });
      this.autoduoStopAllAuto();
      this.handleReload();
    };
    ['handleFreeKey'] = function () {
      if (!this.isFreeKey || !this.freeKeyTime || !this.freeKey) {
        return false;
      }
      let _0x5a7f13 = new Date(this.freeKeyTime).getTime();
      return !(_0x5a7f13 <= Date.now()) && (this.isFreeKey = false, this.handleAuthen(this.freeKey), true);
    };
    ["handleShowHideUI"] = function (_0x34a47c = false) {
      if (this.isShowUI) {
        this.showHideBtn.classList.remove('hide');
        document.body.append(this.controlContainer, this.signatureElm);
      } else {
        this.showHideBtn.classList.add("hide");
        this.controlContainer.remove();
        this.signatureElm.remove();
        if (this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.removeChild(this.settingOverlay);
        }
      }
      if (_0x34a47c) {
        _0x5f0d10('isShowUI', this.isShowUI);
        if (!this.controlContainer.classList.contains("autoduo-animate")) {
          this.controlContainer.classList.add("autoduo-animate");
        }
      }
    };
    ["handleAnimationOff"] = function (_0x2c5a98 = false) {
      if (this.isAnimationOff) {
        document.head.appendChild(this.animationStyle);
      } else {
        document.head.removeChild(this.animationStyle);
      }
      if (_0x2c5a98) {
        _0x5f0d10('isAnimationOff', this.isAnimationOff);
      }
    };
    ["handleSafeModeOn"] = function () {
      if (this.isTurboMode) {
        this.handleTurboModeOff();
      }
      this.safeModeWrapper.setAutoduoSwitch(this.setSafeMode(true));
    };
    ["handleSafeModeOff"] = function () {
      this.safeModeWrapper.setAutoduoSwitch(this.setSafeMode(false));
    };
    ["handleTurboModeOn"] = function (_0x1dd221 = false) {
      if (_0x1dd221) {
        let _0x3635c7 = window.confirm(_0x424dc6('text40'));
        if (!_0x3635c7) {
          return;
        }
      }
      if (this.isSafeMode) {
        this.handleSafeModeOff();
      }
      this.nextTimeTemp = this.nextTime;
      this.nextTime = 0x0;
      _0x5f0d10("isTurboMode", true);
      this.autoFarmBtn.classList.add("turbo");
      this.turboModeWrapper.setAutoduoSwitch(this.isTurboMode = true);
    };
    ["handleTurboModeOff"] = function () {
      this.nextTime = this.nextTimeTemp;
      _0x5f0d10("isTurboMode", false);
      this.autoFarmBtn.classList.remove("turbo");
      this.turboModeWrapper.setAutoduoSwitch(this.isTurboMode = false);
    };
    ["handleTargetModeOn"] = function (_0x6b20cc = false) {
      this.isTargetMode = true;
      this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
      this.autoduoLabelWrapper.appendChild(this.targetModeLabel);
      this.targetModeWrapper.setAutoduoSwitch(true);
      if (_0x6b20cc) {
        _0x5f0d10({
          'isTargetMode': true,
          'targetModeValue': this.targetModeValue
        });
      }
    };
    ['handleTargetModeOff'] = function (_0x11a61a = false) {
      this.isTargetMode = false;
      this.autoduoLabelWrapper.removeChild(this.targetModeLabel);
      this.targetModeWrapper.setAutoduoSwitch(false);
      if (_0x11a61a) {
        this.autoduoStopAllAuto();
      }
      _0x5f0d10("isTargetMode", false);
    };
    ["handlePassModeOn"] = function (_0x6df52f = false) {
      if (!this.isAuto && !this.isSolving) {
        this.autoduoLabelWrapper.appendChild(this.passModeLabel);
        this.passModeWrapper.setAutoduoSwitch(true);
        this.updatePassModeState();
        if (_0x6df52f) {
          _0x5f0d10({
            'isPassMode': true,
            'passModeValue': this.passModeValue
          });
        }
        this.startPassMode();
      }
    };
    ["handlePassModeOff"] = function () {
      if (this.isPassMode) {
        this.autoduoLabelWrapper.removeChild(this.passModeLabel);
        this.passModeWrapper.setAutoduoSwitch(false);
        this.stopPassMode();
      }
    };
    ["handleFarmXPOn"] = function () {
      if (!this.isAuto && !this.isSolving) {
        this.isAutoFarmXP = true;
        _0x5f0d10("isAutoFarmXP", this.isAutoFarmXP);
        this.startFarmXP();
      }
    };
    ['handleFarmXPOff'] = function () {
      if (this.isAutoFarmXP) {
        this.isAutoFarmXP = false;
        _0x5f0d10("isAutoFarmXP", this.isAutoFarmXP);
        this.stopFarmXP();
      }
    };
    ["handleFarmingLocationOn"] = function (_0x5efa80 = false) {
      this.isFarmingLocation = true;
      this.localFarmingLocationLabel.innerText = this.farmingLocationUrl;
      this.farmingLocationContainer.appendChild(this.localFarmingLocationLabel);
      this.autoFarmBtn.classList.add("farming-location");
      if (_0x5efa80) {
        this.farmingLocationErrorCount = 0x0;
        _0x5f0d10({
          'isFarmingLocation': true,
          'farmingLocationUrl': this.farmingLocationUrl,
          'farmingLocationErrorCount': 0x0
        });
      }
    };
    ['handleFarmingLocationOff'] = function () {
      this.isFarmingLocation = false;
      this.farmingLocationContainer.removeChild(this.localFarmingLocationLabel);
      this.autoFarmBtn.classList.remove("farming-location");
      _0x5f0d10('isFarmingLocation', false);
    };
    ["handleAutoGetX2On"] = function () {
      this.isAutoGetX2 = true;
      _0x5f0d10('isAutoGetX2', true);
      this.autoFarmBtn.classList.add("auto-x2");
      this.autoGetX2Wrapper.setAutoduoSwitch(true);
    };
    ["handleAutoGetX2Off"] = function () {
      this.isAutoGetX2 = this.isGettingX2 = false;
      _0x5f0d10({
        'isAutoGetX2': false,
        'isGettingX2': false
      });
      this.autoFarmBtn.classList.remove("auto-x2");
      this.autoGetX2Wrapper.setAutoduoSwitch(false);
    };
    ["handleGetX2"] = function (_0x228592 = false) {
      if (_0x228592) {
        this.prevFarmXPLocation = window.location.pathname;
        this.isGettingX2 = true;
        _0x5f0d10({
          'prevFarmXPLocation': this.prevFarmXPLocation,
          'isGettingX2': this.isGettingX2
        });
      }
      this.autoduoLabelWrapper.appendChild(this.autoGetX2Label);
      this.handlePassMode();
    };
    ["handleGotX2"] = function () {
      this.isGettingX2 = false;
      _0x5f0d10("isGettingX2", this.isGettingX2);
      window.location.pathname = this.prevFarmXPLocation;
    };
    ["handleGetX2Failed"] = function (_0x1a067c, _0x4af47a = false) {
      if (_0x1a067c) {
        this.autoduoLabelWrapper.appendChild(this.autoGetX2FailedLabel);
      } else {
        this.autoGetX2FailedLabel.remove();
      }
      if (_0x4af47a) {
        _0x5f0d10("isGetX2Failed", this.isGetX2Failed = _0x1a067c);
      }
    };
    ["handleReload"] = function () {
      this.autoduoStopAllAuto();
      let _0x5bea30 = window.location.pathname;
      switch (_0x5bea30) {
        case this.listeningPacticePath:
          let _0x1b414e = document.querySelector("[data-test=\"quit-button\"]");
          if (_0x1b414e) {
            _0x1b414e.click();
          }
          setTimeout(() => {
            let _0x18680e = document.querySelector("[data-test=\"notification-button\"]");
            if (_0x18680e) {
              _0x18680e.click();
            }
          }, this.nextTime + 0x1f4);
        case this.practiceHubPath:
          setTimeout(() => {
            window.location.reload();
          }, this.nextTime + 0x5dc);
          break;
        default:
          window.location.reload();
      }
    };
    ["startFarmXP"] = function () {
      this.autoduoDisableFeatures(this.legendModeWrapper, this.passModeWrapper, this.farmingLocationContainer, this.autoGetX2Wrapper);
      document.body.appendChild(this.overlayContainer);
      this.isAuto = true;
      this.autoFarmBtn.classList.add('btn-red', "running");
      this.autoFarmBtn.innerHTML = _0x424dc6("text37") + " <label>(" + _0x424dc6('text73') + ')</label>';
      if (this.isGettingX2) {
        this.handleGetX2();
        return;
      }
      if (this.isGetX2Failed) {
        this.handleGetX2Failed(true);
      }
      this.startTime = Date.now();
      this.handleLocation();
    };
    ['stopFarmXP'] = function () {
      this.autoduoEnableFeatures(this.legendModeWrapper, this.passModeWrapper, this.farmingLocationContainer, this.autoGetX2Wrapper);
      if (document.body.contains(this.overlayContainer)) {
        document.body.removeChild(this.overlayContainer);
      }
      if (this.isGettingX2) {
        this.isGettingX2 = false;
        _0x5f0d10('isGettingX2', this.isGettingX2);
        this.autoGetX2Label.remove();
      }
      if (this.isGetX2Failed) {
        this.handleGetX2Failed(false, true);
      }
      this.isAuto = false;
      this.autoFarmBtn.classList.remove("btn-red", "running");
      this.autoFarmBtn.innerHTML = _0x424dc6('text36') + " <label>(" + _0x424dc6("text73") + ')</label>';
    };
    ["startLegend"] = function () {
      if (!this.isLegendMode && !this.isSolving && !this.isAuto) {
        this.autoduoDisableFeatures(this.passModeWrapper, this.autoFarmBtn);
        this.isAuto = true;
        this.isLegendMode = true;
        this.legendModeWrapper.setAutoduoSwitch(true);
        this.handleLegend();
      }
    };
    ["stopLegend"] = function () {
      if (this.isLegendMode) {
        this.autoduoEnableFeatures(this.passModeWrapper, this.autoFarmBtn);
        if (document.body.contains(this.overlayContainer)) {
          document.body.removeChild(this.overlayContainer);
        }
        this.isAuto = false;
        this.isLegendMode = false;
        this.legendModeWrapper.setAutoduoSwitch(false);
      }
    };
    ["startPassMode"] = function () {
      if (!this.isAuto && !this.isSolving && !this.isPassMode) {
        this.autoduoDisableFeatures(this.legendModeWrapper, this.autoFarmBtn);
        this.isAuto = true;
        this.isPassMode = true;
        this.handlePassMode();
      }
    };
    ["stopPassMode"] = function () {
      if (this.isPassMode) {
        this.autoduoEnableFeatures(this.legendModeWrapper, this.autoFarmBtn);
        if (document.body.contains(this.overlayContainer)) {
          document.body.removeChild(this.overlayContainer);
        }
        this.isAuto = false;
        this.isPassMode = false;
        _0x5f0d10("isPassMode", false);
      }
    };
    ['handleCountDown'] = function (_0x1bc1dc, _0x5935f5) {
      let _0x359a1f = document.createElement("div");
      Object.assign(_0x359a1f, {
        'className': "countdown-overlay-listening",
        'style': "--data-prefix: \"" + _0x424dc6("text61") + "\""
      });
      document.body.appendChild(_0x359a1f);
      let _0x193d1a = _0x9dbbd1 => {
        _0x359a1f.innerText = _0x9dbbd1 + 's';
        if (_0x9dbbd1 < 0x0) {
          document.body.removeChild(_0x359a1f);
          _0x5935f5();
          return;
        }
        setTimeout(() => _0x193d1a(_0x9dbbd1 - 0x1), 0x3e8);
      };
      _0x193d1a(_0x1bc1dc);
    };
    ["handlePassMode"] = function () {
      if (!this.isPassMode && this.isAutoFarmXP && !this.isAutoGetX2 && !this.isGettingX2) {
        return;
      }
      if (this.isPassMode && this.passValue >= this.passModeValue) {
        setTimeout(() => {
          alert(_0x424dc6("text41", this.passModeValue));
        }, 0x3e8);
        this.handlePassModeOff();
        return;
      }
      if (this.isAutoGetX2 && this.isGettingX2 && _0x410634("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/icons/68c1fd0f467456a4c607ecc0ac040533.svg\"]")) {
        this.handleGotX2();
        return;
      }
      let _0xb5f92b = window.location.pathname;
      switch (_0xb5f92b) {
        case this.lessonPath:
          this.handleLegend();
          break;
        case this.homePath:
          if (this.openBoxReward() || this.skipCharacterGate()) {
            return;
          }
        default:
          if (this.isPassLegend) {
            let _0x50e7ea = _0x410634("[data-test*=\"skill-path-level\"] img:is([src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/bfa591f6854b4de08e1656b3e8ca084f.svg\"], [src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7aa61c3f60bd961a60a46fb36e76c72f.svg\"])");
            if (_0x50e7ea) {
              this.handleCountDown(0x3, this.goLegendChallenge.bind(this, _0x50e7ea));
              break;
            }
          }
          this.handleCountDown(0x3, this.goLessonChallenge.bind(this));
      }
    };
    ["handleLegend"] = function () {
      if (!this.isAuto || this.isAutoFarmXP && !this.isAutoGetX2 && !this.isGettingX2) {
        return;
      }
      let _0x47a119 = _0x410634(this.lessonWrapper);
      let _0x5fdd81 = _0x410634(this.storyWrapper);
      if (_0x47a119 || _0x5fdd81) {
        if (!document.body.contains(this.overlayContainer)) {
          document.body.appendChild(this.overlayContainer);
        }
        this.startTime = Date.now();
        this.getDataStateNode(_0x47a119 || _0x5fdd81);
        let _0x22b61a = _0x410634("img[class=\"CenF1\"]");
        if (_0x22b61a) {
          setTimeout(this.handleRadioChallenge.bind(this), 0x3e8);
          return;
        }
        if (_0x47a119) {
          this.nextQuestion();
        } else {
          this.continueStory();
        }
        return;
      }
      let _0x58c4c0 = _0x410634("._2SxJv._30qMV._2N_A5._36Vd3._16r-S") || _0x410634("[data-test=\"player-next\"]");
      if (_0x58c4c0) {
        _0x58c4c0.click();
        if (this.isPassMode || this.isAutoFarmXP && this.isAutoGetX2 && this.isGettingX2) {
          setTimeout(this.handlePassMode.bind(this), 0x3e8);
          return;
        }
        setTimeout(this.handleLegend.bind(this), 0x3e8);
        return;
      }
      let _0x219314 = _0x410634("[data-test=\"story-start\"]");
      if (_0x219314) {
        _0x219314.click();
        setTimeout(this.handleLegend.bind(this), 0x3e8);
        return;
      }
      if (this.isPassMode || this.isAutoFarmXP && this.isAutoGetX2 && this.isGettingX2) {
        if (this.isPassLegend) {
          let _0x972336 = _0x410634("[data-test=\"legendary-start-button\"]");
          if (_0x972336) {
            _0x972336.click();
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
        }
        if (this.autoduoSkipBtn()) {
          setTimeout(this.handlePassMode.bind(this), 0x3e8);
          return;
        }
        if (window.location.pathname === this.homePath) {
          setTimeout(this.handlePassMode.bind(this), 0x7d0);
          return;
        }
      }
      setTimeout(this.handleLegend.bind(this), 0x7d0);
    };
    ["handleLocation"] = function () {
      if (!this.isAuto) {
        return;
      }
      if (this.isFarmingLocation) {
        this.handleFarmingLocationChallenge();
        return;
      }
      let _0x4a36d4 = window.location.pathname;
      switch (_0x4a36d4) {
        case this.practiceHubPath:
          this.goPracticeHubChallenge();
          break;
        case this.listeningPacticePath:
          this.handlePracticeHubChallenge();
          break;
        case this.homePath:
          this.goPracticeChallenge();
          break;
        case this.practicePath:
          this.handlePracticeChallenge();
          break;
        default:
          this.autoduoError(_0x424dc6("text42"));
      }
    };
    ["goPracticeHubChallenge"] = function () {
      if (false === this.isAuto) {
        return;
      }
      let _0x5d4822 = _0x410634("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/2ebe830fd55a7f2754d371bcd79faf32.svg\"]");
      if (!_0x5d4822) {
        setTimeout(this.goPracticeHubChallenge.bind(this), 0x3e8);
        return;
      }
      _0x5d4822.click();
      setTimeout(this.handlePracticeHubChallenge.bind(this), 0x3e8);
    };
    ["goPracticeChallenge"] = function () {
      window.location.pathname = this.practicePath;
    };
    ["goFarmingLocationChallenge"] = function () {
      window.location.href = this.farmingLocationUrl;
    };
    ["goLessonChallenge"] = function () {
      if (window.location.pathname === this.homePath) {
        if (this.openBoxReward() || this.skipCharacterGate()) {
          return;
        }
        let _0x22c158 = _0x410634("[aria-hidden=\"true\"]");
        if (!_0x22c158) {
          let _0x5b71df = _0x410634("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/6a4aeae39e2054b3d9a33cc8e5a05816.svg\"]");
          if (_0x5b71df) {
            _0x5b71df.click();
            setTimeout(this.goLessonChallenge.bind(this), 0x3e8);
            return;
          }
          if (this.isPassMode) {
            this.handlePassModeOff();
            setTimeout(() => {
              alert(_0x424dc6('text44'));
            }, 0x1f4);
          }
          if (this.isAutoFarmXP && this.isAutoGetX2 && this.isGettingX2) {
            this.handleGetX2Failed(true, true);
            this.handleAutoGetX2Off();
            this.handleGotX2();
          }
          return;
        }
      }
      window.location.pathname = this.lessonPath;
    };
    ["goLegendChallenge"] = function (_0x437117) {
      _0x437117.click();
      setTimeout(() => {
        let _0x225d01 = _0x410634("[data-test*=\"skill-path-state-passed\"] + button");
        if (_0x225d01) {
          _0x225d01.click();
          setTimeout(this.handleLegend.bind(this), 0x320);
        } else {
          _0x437117.click();
          setTimeout(this.goLessonChallenge.bind(this), 0x320);
        }
      }, 0x320);
    };
    ['handlePracticeHubChallenge'] = function () {
      if (window.location.pathname === this.practiceHubPath) {
        this.goPracticeHubChallenge();
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handlePracticeHubChallenge.bind(this));
    };
    ['handlePracticeChallenge'] = function () {
      if (window.location.pathname === this.homePath) {
        setTimeout(this.goPracticeChallenge.bind(this), 0x3e8);
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handlePracticeChallenge.bind(this));
    };
    ["handleFarmingLocationChallenge"] = function () {
      if (this.farmingLocationErrorCount >= 0x4) {
        this.handleFarmXPOff();
        setTimeout(() => {
          window.alert(_0x424dc6("text72"));
        }, 0x1f4);
        return;
      }
      if (window.location.href !== this.farmingLocationUrl) {
        _0x5f0d10("farmingLocationErrorCount", ++this.farmingLocationErrorCount);
        this.goFarmingLocationChallenge();
        return;
      }
      if (_0x410634(this.skipLegendarySuggestionBtn)) {
        this.goFarmingLocationChallenge();
        return;
      }
      let _0x43ca56 = _0x410634("[data-test=\"story-start\"]") || _0x410634(this.storyWrapper);
      if (_0x43ca56) {
        _0x43ca56.click();
        setTimeout(() => {
          this.handleAutoFarmChallengeGeneral(this.handleFarmingLocationChallenge.bind(this), "story");
        }, 0x320);
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handleFarmingLocationChallenge.bind(this));
    };
    ['handleAutoFarmChallengeGeneral'] = function (_0x5e2c0c = () => {}, _0x51a84f = 'lesson') {
      if (!this.isAuto) {
        return;
      }
      let _0x2b0041 = 'lesson' === _0x51a84f ? _0x410634(this.lessonWrapper) : _0x410634(this.storyWrapper);
      if (_0x2b0041) {
        if (this.isFarmingLocation) {
          this.farmingLocationErrorCount = 0x0;
        }
        this.getDataStateNode(_0x2b0041);
        if ("lesson" === _0x51a84f) {
          this.nextQuestion();
        } else {
          this.continueStory();
        }
        return;
      }
      let _0x102dca = _0x51a84f = _0x410634("[data-test=\"player-next\"][aria-disabled=\"false\"]");
      if (_0x102dca) {
        this.nextQuestion();
        return;
      }
      this.autoduoSkipBtn();
      setTimeout(_0x5e2c0c, 0x3e8);
    };
    ["doChallenge"] = async function () {
      if (this.isSafeMode) {
        await this.sleep(this.safeDelayTimeTemp);
      }
      if (!this.isAuto || this.isSolving) {
        return;
      }
      let _0x881a34 = _0x410634("[data-test*=\"challenge challenge\"]");
      if (!_0x881a34) {
        return this.autoduoError(_0x424dc6("text45"));
      }
      let _0x3cb970 = _0x881a34.dataset.test?.['slice'](0xa);
      this.setSolving(true);
      switch (_0x3cb970) {
        case "challenge-translate":
        case "challenge-listenTap":
        case "challenge-listen":
        case "challenge-writeComprehension":
        case "challenge-syllableTap":
        case "challenge-syllableListenTap":
          this.handleChallengeTranslate(_0x3cb970);
          break;
        case "challenge-gapFill":
        case 'challenge-listenIsolation':
        case "challenge-assist":
        case "challenge-selectTranscription":
        case "challenge-characterIntro":
        case "challenge-characterSelect":
        case 'challenge-selectPronunciation':
        case "challenge-dialogue":
        case "challenge-readComprehension":
        case "challenge-listenComprehension":
        case 'challenge-select':
        case "challenge-form":
        case "challenge-definition":
        case "challenge-sameDifferent":
          this.handleChallengeChoice();
          break;
        case "challenge-characterMatch":
        case 'challenge-match':
          this.handleChallengeMatch(_0x3cb970);
          break;
        case "challenge-listenComplete":
        case "challenge-partialListen":
        case 'challenge-name':
        case 'challenge-typeCompleteTable':
        case "challenge-typeCloze":
        case "challenge-typeClozeTable":
          this.handleChallengeTextInput(_0x3cb970);
          break;
        case "challenge-listenMatch":
          this.handleChallengeListenMatch();
          break;
        case "challenge-extendedListenMatch":
          this.handleChallengeExtendedListenMatch();
          break;
        case 'challenge-extendedMatch':
          this.handleChallengeExtendedMatch();
          break;
        case 'challenge-completeReverseTranslation':
          this.handleChallengeCompleteReverseTranslation(_0x3cb970);
          break;
        case "challenge-partialReverseTranslate":
          this.handleChallengePartialReverseTranslate();
          break;
        case "challenge-tapComplete":
        case "challenge-tapCompleteTable":
        case "challenge-tapCloze":
        case "challenge-tapClozeTable":
          this.handleChallengeTapComplete(_0x3cb970);
          break;
        case "challenge-speak":
        case "challenge-listenSpeak":
          this.handleSkipChallenge();
          break;
        default:
          this.autoduoError(_0x424dc6('text46', _0x3cb970));
      }
    };
    ["handleChallengeTranslate"] = function (_0x320f25) {
      if (false === this.isAuto) {
        this.setSolving(false);
        return;
      }
      let _0x38fb55 = null;
      switch (_0x320f25) {
        case "challenge-listenTap":
        case "challenge-translate":
          if (!(_0x38fb55 = this.getData("correctTokens"))?.["length"]) {
            _0x38fb55 = this.getData(["challengeResponseTrackingProperties", "best_solution"])?.['split'](" ");
          }
          break;
        case "challenge-listen":
          _0x38fb55 = this.getData('prompt')?.["split"](" ");
          break;
        case "challenge-completeReverseTranslation":
        case "challenge-writeComprehension":
          _0x38fb55 = this.getData(["challengeResponseTrackingProperties", "best_solution"])?.["split"](" ");
          break;
        case "challenge-syllableTap":
        case 'challenge-syllableListenTap':
          let _0x3baeeb = this.getData('choices');
          _0x38fb55 = this.getData("correctIndices").map(_0x5587cb => {
            let {
              text: _0x58018e,
              damagePosition: _0x3817d8
            } = _0x3baeeb[_0x5587cb];
            return {
              'text': _0x58018e,
              'damagePosition': _0x3817d8.toUpperCase()
            };
          });
      }
      if (!_0x38fb55) {
        return this.autoduoError(_0x424dc6("text47"));
      }
      let _0x31cede = _0x410634("textarea[data-test=\"challenge-translate-input\"]:not([disabled])");
      if (_0x31cede) {
        let _0x57ee38 = _0x410634("[data-test=\"player-toggle-keyboard\"]");
        if (_0x57ee38) {
          _0x57ee38.click();
          return setTimeout(this.handleChallengeTranslate.bind(this, _0x320f25), 0x1f4);
        }
        let _0x160602 = new Event("input", {
          'bubbles': true
        });
        let _0x3b7439 = '';
        if (this.isTurboMode) {
          _0x3b7439 = _0x38fb55.join(" ");
          this.nativeTextareaValueSetter.call(_0x31cede, _0x3b7439);
          _0x31cede.dispatchEvent(_0x160602);
          this.setSolving(false);
          this.nextQuestion(true);
          return;
        }
        let _0x11f9e2 = () => {
          setTimeout(() => {
            if (0x0 === _0x38fb55.length) {
              this.setSolving(false);
              this.nextQuestion(true);
              return;
            }
            _0x3b7439 += " " + _0x38fb55.shift();
            this.nativeTextareaValueSetter.call(_0x31cede, _0x3b7439);
            _0x31cede.dispatchEvent(_0x160602);
            _0x11f9e2();
          }, this.randomSafeDelayTime());
        };
        return void _0x11f9e2();
      }
      let _0x212af5 = Array.from(_0x4181bd("[class=\"_1v1Bd\"] button[data-test*=\"challenge-tap-token\"]"));
      if (0x0 === _0x212af5.length) {
        return setTimeout(this.handleChallengeTranslate.bind(this, _0x320f25), 0x1f4);
      }
      let _0xfb2a2e = _0x38873a => {
        let _0x21b842 = _0x212af5.findIndex(_0x486d4c => _0x38873a?.['damagePosition'] ? (_0x486d4c.classList.contains("P3baP") ? "RIGHT" : _0x486d4c.classList.contains("bfI-N") ? "LEFT" : _0x486d4c.classList.contains('_1WVl5') ? 'BOTH' : "NEITHER") === _0x38873a.damagePosition && _0x486d4c.textContent === _0x38873a.text : _0x486d4c.textContent === _0x38873a);
        return _0x21b842;
      };
      if (this.isTurboMode) {
        for (let _0x49c044 of _0x38fb55) {
          let _0x36c59e = _0xfb2a2e(_0x49c044);
          if (-0x1 === _0x36c59e) {
            return this.autoduoLessonError(_0x424dc6("text48"));
          }
          _0x212af5[_0x36c59e].click();
          _0x212af5.splice(_0x36c59e, 0x1);
        }
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      let _0xf716cd = () => {
        setTimeout(() => {
          if (0x0 === _0x38fb55.length) {
            this.setSolving(false);
            this.nextQuestion(true);
            return;
          }
          let _0x596bbc = _0x38fb55.shift();
          let _0x308b4f = _0xfb2a2e(_0x596bbc);
          if (-0x1 === _0x308b4f) {
            return this.autoduoLessonError(_0x424dc6("text48"));
          }
          _0x212af5[_0x308b4f].click();
          _0x212af5.splice(_0x308b4f, 0x1);
          _0xf716cd();
        }, this.randomSafeDelayTime());
      };
      _0xf716cd();
    };
    ["handleChallengeListenMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x21fdbc = _0x410634("[data-test*=\"challenge-listenMatch\"]");
      let _0x5d9cb1 = Array.from(_0x21fdbc.querySelectorAll("[class=\"_3VyQa\"] > button"));
      let _0xe9c1b0 = _0x5d9cb1.splice(_0x5d9cb1.length / 0x2);
      this.listenMatchHandlerGeneral(_0x5d9cb1, _0xe9c1b0, () => {
        this.setSolving(false);
        this.nextQuestion(true);
      });
    };
    ["listenMatchHandlerGeneral"] = function (_0x5a5e6b, _0x5ad8ec, _0x15659f = () => {}) {
      let _0x53b8ed = null;
      if (this.isTurboMode) {
        for (let _0x5c48f9 of _0x5a5e6b) {
          _0x53b8ed = _0x5c48f9.dataset.test;
          _0x5c48f9.click();
          let _0x5095ef = _0x5ad8ec.findIndex(_0x139bca => _0x139bca.dataset.test === _0x53b8ed);
          if (-0x1 === _0x5095ef) {
            return this.autoduoLessonError(_0x424dc6("text49"));
          }
          _0x5ad8ec[_0x5095ef].click();
          _0x5ad8ec.splice(_0x5095ef, 0x1);
        }
        _0x15659f();
        return;
      }
      let _0x56d42f = () => {
        setTimeout(() => {
          if (0x0 === _0x5ad8ec.length) {
            _0x15659f();
            return;
          }
          if (null === _0x53b8ed) {
            let _0x3e2c3c = _0x5a5e6b.shift();
            _0x53b8ed = _0x3e2c3c.dataset.test;
            _0x3e2c3c.click();
          } else {
            let _0x4649ed = _0x5ad8ec.findIndex(_0x5007a3 => _0x5007a3.dataset.test === _0x53b8ed);
            if (-0x1 === _0x4649ed) {
              return this.autoduoLessonError(_0x424dc6('text49'));
            }
            _0x5ad8ec[_0x4649ed].click();
            _0x5ad8ec.splice(_0x4649ed, 0x1);
            _0x53b8ed = null;
          }
          _0x56d42f();
        }, this.randomSafeDelayTime());
      };
      _0x56d42f();
    };
    ["handleChallengeExtendedListenMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x47f32e = _0x410634("[data-test*=\"challenge-extendedListenMatch\"]");
      let _0x161276 = Array.from(_0x47f32e.querySelectorAll("button[data-test*=\"challenge-tap-token\"]"));
      let _0x2fc0e7 = _0x161276.length / 0x2;
      let _0xfead50 = _0x161276.splice(_0x2fc0e7);
      let _0x2ee645 = _0x410634("[data-test=\"player-next\"]");
      let _0x540576 = 0x0;
      let _0x32df8b = null;
      let _0xdf851b = () => {
        _0x32df8b = null;
        if (++_0x540576 >= _0x2fc0e7) {
          _0x540576 = 0x0;
        }
      };
      let _0xc519ae = () => {
        setTimeout(() => {
          if ("false" === _0x2ee645.getAttribute('aria-disabled')) {
            this.setSolving(false);
            this.nextQuestion();
            return;
          }
          if (null === _0x32df8b) {
            let _0x339892 = _0x161276[_0x540576];
            _0x32df8b = _0x339892.dataset.test;
            _0x339892.click();
          } else {
            let _0x4c333d = _0xfead50.findIndex(_0xfb3f1f => _0xfb3f1f.dataset.test === _0x32df8b);
            if (-0x1 === _0x4c333d) {
              _0xdf851b();
              _0xc519ae();
              return;
            }
            _0xfead50[_0x4c333d].click();
            _0xdf851b();
          }
          _0xc519ae();
        }, this.randomSafeDelayTime() + 0x96);
      };
      _0xc519ae();
    };
    ["handleChallengeMatch"] = function (_0x1ffbb7) {
      if (!this.isAuto) {
        return;
      }
      let _0x200871 = _0x410634("[data-test*=\"challenge \"]");
      let _0x3381f6 = Array.from(_0x200871.querySelectorAll("[data-test=\"challenge-tap-token-text\"]"));
      let _0x22c1b9 = _0x3381f6.splice(_0x3381f6.length / 0x2);
      let _0x561d5c = null;
      switch (_0x1ffbb7) {
        case "challenge-characterMatch":
          _0x561d5c = this.getData("pairs")?.["reduce"]((_0x5bdeca, _0x56de26) => {
            let {
              transliteration: _0x5ec209,
              character: _0x187190
            } = _0x56de26;
            _0x5bdeca[_0x5ec209] = _0x187190;
            return _0x5bdeca;
          }, {});
          break;
        case "challenge-match":
          _0x561d5c = this.getData("pairs")?.["reduce"]((_0x44eb57, _0x443f93) => {
            let {
              fromToken: _0x39ee42,
              learningToken: _0x180f7f
            } = _0x443f93;
            _0x44eb57[_0x39ee42] = _0x180f7f;
            return _0x44eb57;
          }, {});
      }
      if (!_0x561d5c) {
        return this.autoduoError(_0x424dc6("text47"));
      }
      let _0x4405a0 = null;
      if (this.isTurboMode) {
        for (let _0x2ddb6c of _0x3381f6) {
          _0x2ddb6c.click();
          _0x4405a0 = _0x561d5c[_0x2ddb6c.innerText];
          let _0x1f272f = _0x22c1b9.findIndex(_0x151100 => _0x151100.innerText === _0x4405a0);
          if (-0x1 === _0x1f272f) {
            return this.autoduoLessonError(_0x424dc6("text50"));
          }
          _0x22c1b9[_0x1f272f].click();
          _0x22c1b9.splice(_0x1f272f, 0x1);
        }
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      let _0x21cd3c = () => {
        setTimeout(() => {
          if (0x0 === _0x22c1b9.length) {
            this.setSolving(false);
            this.nextQuestion(true);
            return;
          }
          if (null === _0x4405a0) {
            let _0x5e7f8e = _0x3381f6.shift();
            _0x5e7f8e.click();
            _0x4405a0 = _0x561d5c[_0x5e7f8e.innerText];
          } else {
            let _0x412ecc = _0x22c1b9.findIndex(_0x40f85e => _0x40f85e.innerText === _0x4405a0);
            if (-0x1 === _0x412ecc) {
              return this.autoduoLessonError(_0x424dc6('text50'));
            }
            _0x22c1b9[_0x412ecc].click();
            _0x22c1b9.splice(_0x412ecc, 0x1);
            _0x4405a0 = null;
          }
          _0x21cd3c();
        }, this.randomSafeDelayTime());
      };
      _0x21cd3c();
    };
    ["handleChallengeExtendedMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x23a756 = _0x410634("[data-test*=\"challenge \"]");
      let _0x4c5287 = Array.from(_0x23a756.querySelectorAll("[data-test=\"challenge-tap-token-text\"]"));
      let _0x4fb902 = _0x4c5287.length / 0x2;
      let _0x2c27a1 = _0x4c5287.splice(_0x4fb902);
      let _0x6f6bf3 = this.getData('pairs')?.['reduce']((_0x3f7a1d, _0x1f0345) => {
        let {
          fromToken: _0x43b986,
          learningToken: _0x1522a8
        } = _0x1f0345;
        _0x3f7a1d[_0x43b986] = _0x1522a8;
        return _0x3f7a1d;
      }, {});
      if (!_0x6f6bf3) {
        return this.autoduoError(_0x424dc6("text47"));
      }
      let _0x5acc26 = _0x410634("[data-test=\"player-next\"]");
      let _0xda56ae = 0x0;
      let _0xec9885 = null;
      let _0x4e2f8b = () => {
        _0xec9885 = null;
        if (++_0xda56ae >= _0x4fb902) {
          _0xda56ae = 0x0;
        }
      };
      let _0x23659c = () => {
        setTimeout(() => {
          if ("false" === _0x5acc26.getAttribute("aria-disabled")) {
            this.setSolving(false);
            this.nextQuestion();
            return;
          }
          if (null === _0xec9885) {
            let _0x45fd46 = _0x4c5287[_0xda56ae];
            _0xec9885 = _0x6f6bf3[_0x45fd46.textContent];
            _0x45fd46.click();
          } else {
            let _0x1b7dcf = _0x2c27a1.findIndex(_0x21ad6a => _0x21ad6a.textContent === _0xec9885);
            if (-0x1 === _0x1b7dcf) {
              _0x4e2f8b();
              _0x23659c();
              return;
            }
            _0x2c27a1[_0x1b7dcf].click();
            _0x4e2f8b();
          }
          _0x23659c();
        }, this.randomSafeDelayTime() + 0x96);
      };
      _0x23659c();
    };
    ["handleChallengeChoice"] = function () {
      this.handleChallengeChoiceGeneral(() => {
        this.setSolving(false);
        this.nextQuestion(true);
      });
    };
    ["handleChallengeChoiceGeneral"] = function (_0x1a50fd = () => {}) {
      if (!this.isAuto) {
        return;
      }
      let _0xe3e2e1 = _0x4181bd("[data-test=\"challenge-choice\"]");
      let _0x3efc35 = this.getData('correctIndex');
      if (null === _0x3efc35) {
        return this.autoduoError(_0x424dc6("text47"));
      }
      if (this.isTurboMode) {
        _0xe3e2e1[_0x3efc35].click();
        _0x1a50fd();
        return;
      }
      setTimeout(() => {
        _0xe3e2e1[_0x3efc35].click();
        setTimeout(_0x1a50fd, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengeTextInput"] = function (_0x5bff36) {
      if (!this.isAuto) {
        return;
      }
      let _0x381270 = null;
      let _0x18b257;
      switch (_0x5bff36) {
        case "challenge-listenComplete":
        case "challenge-partialListen":
        case "challenge-completeReverseTranslation":
        case "challenge-typeCloze":
          _0x18b257 = _0x4181bd("[class=\"zlazS\"]");
          _0x381270 = Array.from(_0x18b257).reduce((_0x263d95, _0x304431) => {
            let _0x1264c3 = _0x304431?.['textContent']?.["replaceAll"]('_', '');
            return _0x1264c3 ? [..._0x263d95, _0x1264c3] : _0x263d95;
          }, []);
          break;
        case "challenge-typeCompleteTable":
        case 'challenge-typeClozeTable':
          _0x18b257 = _0x4181bd("[class=\"zlazS\"]:first-child");
          _0x381270 = Array.from(_0x18b257).map(_0xb3e885 => _0xb3e885?.["textContent"]?.["replaceAll"]('_', ''));
          break;
        case "challenge-name":
          _0x381270 = this.getData("correctSolutions");
      }
      if (!_0x381270?.["length"]) {
        return this.autoduoError(_0x424dc6('text47'));
      }
      let _0x487b42 = _0x4181bd("[data-test=\"challenge-text-input\"][value=\"\"]");
      if (!_0x487b42.length) {
        _0x487b42 = _0x4181bd("input[value=\"\"]");
      }
      let _0x2ee807 = new Event("input", {
        'bubbles': true
      });
      let _0x285ed7 = () => {
        let _0x428816 = Array.from(_0x4181bd("[data-test=\"challenge-choice\"] [data-test=\"challenge-judge-text\"]"));
        Array.from(_0x487b42).forEach((_0x151733, _0x4f0cd5) => {
          if (_0x428816.length > 0x0) {
            let _0x1c58cc = _0x428816.find(_0x361865 => _0x381270[_0x4f0cd5].startsWith(_0x361865.textContent));
            _0x1c58cc?.['click']();
            _0x381270[_0x4f0cd5] = _0x381270[_0x4f0cd5].replace(_0x1c58cc?.["textContent"], '');
          }
          this.nativeInputValueSetter.call(_0x151733, _0x381270[_0x4f0cd5]);
          _0x151733.dispatchEvent(_0x2ee807);
        });
      };
      if (this.isTurboMode) {
        _0x285ed7();
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      setTimeout(() => {
        _0x285ed7();
        setTimeout(() => {
          this.setSolving(false);
          this.nextQuestion(true);
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengePartialReverseTranslate"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x34a6d5 = _0x410634("label span:last-child")?.["textContent"];
      let _0x1ba0b7 = _0x410634("span[contenteditable=\"true\"]");
      let _0x50f149 = new Event("input", {
        'bubbles': true
      });
      if (this.isTurboMode) {
        _0x1ba0b7.innerText = _0x34a6d5;
        _0x1ba0b7.dispatchEvent(_0x50f149);
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      setTimeout(() => {
        _0x1ba0b7.innerText = _0x34a6d5;
        _0x1ba0b7.dispatchEvent(_0x50f149);
        setTimeout(() => {
          this.setSolving(false);
          this.nextQuestion(true);
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ['handleChallengeCompleteReverseTranslation'] = function (_0x15299d) {
      let _0x1c930e = _0x410634("textarea[data-test=\"challenge-translate-input\"]:not([disabled])");
      if (_0x1c930e) {
        this.handleChallengeTranslate(_0x15299d);
        return;
      }
      this.handleChallengeTextInput(_0x15299d);
    };
    ["handleChallengeTapComplete"] = function (_0x7bf58e) {
      if (!this.isAuto) {
        return;
      }
      let _0x57214b = Array.from(_0x4181bd("[data-test=\"word-bank\"] [data-test=\"challenge-tap-token-text\"]"));
      let _0x2c7154 = null;
      switch (_0x7bf58e) {
        case "challenge-tapCompleteTable":
          _0x2c7154 = (_0x5904d4 => {
            let _0x44921f = _0x5904d4.reduce((_0x69267, _0x1fe27a) => (_0x1fe27a.forEach(_0x5e7f56 => {
              let {
                text: _0x86a3fe,
                isBlank: _0x6e474c
              } = _0x5e7f56[0x0];
              if (_0x6e474c) {
                let _0x22bd98 = _0x57214b.findIndex(_0x3c41c2 => _0x3c41c2.textContent === _0x86a3fe);
                _0x69267.push(_0x22bd98);
              }
            }), _0x69267), []);
            return _0x44921f;
          })(this.getData("displayTableTokens"));
          break;
        case "challenge-tapClozeTable":
          _0x2c7154 = (_0x188070 => {
            let _0x336b96 = _0x188070.reduce((_0x467d9e, _0x157567) => (_0x157567.forEach(_0x4e0696 => {
              let {
                text: _0x26ff23,
                damageStart: _0x1adebd
              } = _0x4e0696[0x0];
              if (_0x1adebd) {
                let _0x5629fa = _0x26ff23.slice(_0x1adebd);
                let _0x1c6211 = _0x57214b.findIndex(_0x1e919c => _0x1e919c.textContent === _0x5629fa);
                _0x467d9e.push(_0x1c6211);
              }
            }), _0x467d9e), []);
            return _0x336b96;
          })(this.getData("displayTableTokens"));
          break;
        default:
          _0x2c7154 = this.getData("correctIndices");
      }
      if (!_0x2c7154) {
        return this.autoduoError(_0x424dc6("text47"));
      }
      if (this.isTurboMode) {
        for (let _0x1a5c40 of _0x2c7154) _0x57214b[_0x1a5c40].click();
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      let _0x1ccef1 = () => {
        setTimeout(() => {
          if (0x0 === _0x2c7154.length) {
            this.setSolving(false);
            this.nextQuestion(true);
            return;
          }
          let _0x401d22 = _0x2c7154.shift();
          _0x57214b[_0x401d22].click();
          _0x1ccef1();
        }, this.randomSafeDelayTime());
      };
      _0x1ccef1();
    };
    ["handleSkipChallenge"] = function () {
      setTimeout(() => {
        let _0x1f0d2c = _0x410634("[data-test=\"player-skip\"]");
        if (!_0x1f0d2c) {
          setTimeout(this.handleSkipChallenge.bind(this), 0x190);
          return;
        }
        _0x1f0d2c.click();
        setTimeout(() => {
          this.setSolving(false);
          this.nextQuestion();
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["nextQuestion"] = function (_0x22bbdc = false) {
      if (!this.isAuto) {
        return;
      }
      if (this.isTurboMode && _0x22bbdc) {
        let _0x379fa2 = () => {
          if (!this.isAuto) {
            _0x370976.disconnect();
            clearTimeout(_0x1b715a);
            return;
          }
          let _0x5b691a = _0x410634("[data-test=\"player-next\"][aria-disabled=\"false\"]");
          if (_0x5b691a) {
            _0x370976.disconnect();
            clearTimeout(_0x1b715a);
            this.nextQuestion();
          }
        };
        let _0x1b715a = setTimeout(() => {
          _0x370976.disconnect();
          this.nextQuestion();
        }, 0x1f4);
        let _0x370976 = new MutationObserver(_0x379fa2);
        _0x370976.observe(document.body, {
          'childList': true,
          'subtree': true
        });
        _0x379fa2();
        return;
      }
      let _0x169590 = _0x410634("[class=\"_1XNQX\"]");
      if (_0x169590) {
        let _0x3238f4 = this.getExpState(_0x169590);
        if (undefined !== _0x3238f4) {
          let {
            totalXpThisSession: _0x5b0213,
            hasXpBoost: _0x79ae4f
          } = _0x3238f4;
          this.exp += _0x5b0213;
          this.expElm.innerText = this.exp;
          let _0x5e6cf1 = Date.now();
          let _0x4a52e9 = _0x5e6cf1 - this.startTime;
          this.totalTime += _0x4a52e9;
          this.startTime = _0x5e6cf1;
          this.renderTime();
          _0x5f0d10({
            'exp': this.exp,
            'time': this.totalTime
          });
          if (this.isPassMode) {
            this.passValue++;
            this.updatePassModeState();
          }
          if (this.keyTimeOut <= _0x5e6cf1) {
            this.handleKeyTimeOut();
            return;
          }
          if (this.isTargetMode) {
            if (this.exp >= this.targetModeValue) {
              let _0x379687 = this.isPassMode ? _0x424dc6("text51", this.passValue, this.passModeValue) : '';
              setTimeout(() => {
                alert(_0x424dc6("text52", this.exp, this.targetModeValue) + _0x379687);
              }, 0x7d0);
              this.handleTargetModeOff(true);
              let _0x5cc30c = _0x410634("[data-test=\"player-next\"]");
              if (_0x5cc30c) {
                _0x5cc30c.click();
              }
              return;
            }
            this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
          }
          if (this.isAutoGetX2 && this.isAutoFarmXP) {
            if (!_0x79ae4f) {
              this.handleGetX2(!this.isGettingX2);
              return;
            }
            if (this.isGettingX2 && _0x79ae4f) {
              this.handleGotX2();
              return;
            }
          }
          if (this.isLegendMode) {
            document.body.removeChild(this.overlayContainer);
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
          let _0x3dd3b6 = window.location.pathname;
          if ((_0x3dd3b6 === this.practicePath || _0x3dd3b6 === this.listeningPacticePath) && (this.totalReloadTime += _0x4a52e9) >= this.reloadTime) {
            window.location.reload();
            return;
          }
          let _0x2ee1fc = _0x410634("[data-test=\"player-practice-again\"]");
          if (_0x2ee1fc) {
            _0x2ee1fc.click();
            setTimeout(this.handlePracticeChallenge.bind(this), 0x7d0);
            return;
          }
        }
      }
      let _0xd9ab08 = _0x410634("[data-test=\"player-next\"]");
      if (!_0xd9ab08) {
        let _0x55f655 = _0x410634("[data-test=\"legendary-session-end-continue\"]");
        if (_0x55f655) {
          _0x55f655.click();
          setTimeout(this.nextQuestion.bind(this), 0x1f4);
          return;
        }
        if (this.isPassMode) {
          setTimeout(this.handlePassMode.bind(this), 0x3e8);
          return;
        }
        setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
        return;
      }
      let _0x59d488 = _0xd9ab08.getAttribute("aria-disabled");
      let _0xc835ff = _0xd9ab08.classList.contains("_3whsM");
      if ("true" === _0x59d488 && !_0xc835ff) {
        setTimeout(this.doChallenge.bind(this), this.nextTime);
        return;
      }
      if (!_0xc835ff) {
        _0xd9ab08.click();
      }
      setTimeout(this.nextQuestion.bind(this), this.nextTime);
    };
    ['continueStory'] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x349840 = _0x410634("[class=\"_2ZCEq _2CoFd\"]");
      if (_0x349840 && true !== _0x349840.wasGetExp) {
        let _0xd70293 = this.getExpStory(_0x349840);
        if (_0xd70293) {
          let {
            sessionXp: _0x3abb8c,
            hasXpBoost: _0x55fff2
          } = _0xd70293;
          this.exp += _0x3abb8c;
          this.expElm.innerText = this.exp;
          let _0x38a512 = Date.now();
          this.totalTime += _0x38a512 - this.startTime;
          this.renderTime();
          _0x5f0d10({
            'exp': this.exp,
            'time': this.totalTime
          });
          _0x349840.wasGetExp = true;
          if (this.isPassMode) {
            this.passValue++;
            this.updatePassModeState();
          }
          if (this.keyTimeOut <= _0x38a512) {
            this.handleKeyTimeOut();
            return;
          }
          if (this.isTargetMode) {
            if (this.exp >= this.targetModeValue) {
              setTimeout(() => {
                let _0x39820d = this.isPassMode ? _0x424dc6("text51", this.passValue, this.passModeValue) : '';
                setTimeout(() => {
                  alert(_0x424dc6("text52", this.exp, this.targetModeValue) + _0x39820d);
                }, 0x3e8);
                this.handleTargetModeOff(true);
              }, 0x7d0);
            } else {
              this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
            }
          }
          if (this.isAutoGetX2 && this.isAutoFarmXP) {
            if (!_0x55fff2) {
              this.handleGetX2(!this.isGettingX2);
              return;
            }
            if (this.isGettingX2 && _0x55fff2) {
              this.handleGotX2();
              return;
            }
          }
        }
      }
      let _0xab6c8 = _0x410634("[data-test=\"stories-player-continue\"]");
      if (!_0xab6c8) {
        let _0x3be52c = _0x410634("[data-test=\"stories-player-done\"]");
        if (_0x3be52c) {
          _0x3be52c.click();
          if (this.isLegendMode) {
            document.body.removeChild(this.overlayContainer);
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
          if (this.isPassMode) {
            setTimeout(this.handlePassMode.bind(this), 0x3e8);
            return;
          }
          let _0x23210c = () => {
            setTimeout(() => {
              if (document.body.contains(_0x3be52c)) {
                _0x3be52c.click();
                _0x23210c();
                return;
              }
              setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
            }, 0x320);
          };
          _0x23210c();
          return;
        }
        return this.autoduoError(_0x424dc6('text53'));
      }
      let _0x2ab84b = _0xab6c8.disabled;
      if (_0x2ab84b) {
        let _0x5b5556 = _0xab6c8.classList.contains('_3CBig');
        if (_0x5b5556) {
          setTimeout(this.continueStory.bind(this), 0x7d0);
          return;
        }
        let _0xd269f3 = this.getDataStory();
        if (_0xd269f3) {
          this.doChallengeStory(_0xd269f3);
          return;
        }
        setTimeout(this.continueStory.bind(this), 0x3e8);
        return;
      }
      _0xab6c8.click();
      setTimeout(this.continueStory.bind(this), 0x2bc);
    };
    ["doChallengeStory"] = function (_0x4b6c7d) {
      if (this.isAuto) {
        this.setSolving(true);
        switch (_0x4b6c7d.type) {
          case "multiple-choice":
          case "select-phrases":
            this.handleStoryMultipleChoice(_0x4b6c7d.correctAnswerIndex);
            break;
          case "point-to-phrase":
            this.handleStoryPointToPhrase(_0x4b6c7d.parts[_0x4b6c7d.correctAnswerIndex].text);
            break;
          case 'match':
            this.handleStoryMatch(_0x4b6c7d.dictionary);
            break;
          case "arrange":
            this.handleStoryArrange([..._0x4b6c7d.phraseOrder]);
            break;
          default:
            return this.autoduoError(_0x424dc6("text46", _0x4b6c7d.type));
        }
      }
    };
    ["handleStoryMultipleChoice"] = function (_0x402835) {
      if (!this.isAuto) {
        return;
      }
      let _0x4a4381 = _0x4181bd("[data-test=\"stories-choice\"]");
      setTimeout(() => {
        _0x4a4381[_0x402835].click();
        this.setSolving(false);
        this.continueStory();
      }, this.randomSafeDelayTime());
    };
    ["handleStoryPointToPhrase"] = function (_0x502815) {
      if (!this.isAuto) {
        return;
      }
      let _0x29f4d3 = Array.from(_0x4181bd("[data-test=\"challenge-tap-token-text\"]"));
      let _0x5dfddc = _0x29f4d3.find(_0x12a8a4 => _0x12a8a4.innerText === _0x502815);
      if (!_0x5dfddc) {
        return this.autoduoError(_0x424dc6('text54'));
      }
      setTimeout(() => {
        _0x5dfddc.click();
        this.setSolving(false);
        this.continueStory();
      }, this.randomSafeDelayTime());
    };
    ['handleStoryMatch'] = function (_0xd431b1) {
      if (!this.isAuto) {
        return;
      }
      let _0x18f500 = Array.from(_0x4181bd("[data-test=\"challenge-tap-token-text\"]"));
      let _0x43bdeb = _0x18f500.splice(_0x18f500.length / 0x2);
      let _0x4f349c = null;
      let _0x271701 = () => {
        setTimeout(() => {
          if (0x0 === _0x43bdeb.length) {
            this.setSolving(false);
            this.continueStory();
            return;
          }
          if (null === _0x4f349c) {
            let _0x95f4e0 = _0x18f500.shift();
            _0x95f4e0.click();
            _0x4f349c = _0xd431b1["from:" + _0x95f4e0.innerText] || _0xd431b1['from:' + _0x95f4e0.innerText + " "];
          } else {
            let _0x408598 = _0x43bdeb.findIndex(_0x1090e6 => _0x1090e6.innerText === _0x4f349c);
            if (-0x1 === _0x408598) {
              return this.autoduoError(_0x424dc6("text55"));
            }
            _0x43bdeb[_0x408598].click();
            _0x43bdeb.splice(_0x408598, 0x1);
            _0x4f349c = null;
          }
          _0x271701();
        }, this.randomSafeDelayTime());
      };
      _0x271701();
    };
    ["handleStoryArrange"] = function (_0x102cb5) {
      if (!this.isAuto) {
        return;
      }
      let _0x15502f = _0x4181bd("[data-test=\"challenge-tap-token-text\"]");
      let _0x4e902a = () => {
        setTimeout(() => {
          if (0x0 === _0x102cb5.length) {
            this.setSolving(false);
            this.continueStory();
            return;
          }
          let _0x313613 = _0x102cb5.shift();
          _0x15502f[_0x313613].click();
          _0x4e902a();
        }, this.randomSafeDelayTime());
      };
      _0x4e902a();
    };
    ["getDataStory"] = function () {
      let _0x3dc076 = this.dataStateNode?.["props"]?.["currentChallengeSession"];
      return _0x3dc076;
    };
    ["getExpStory"] = function (_0x11d79e) {
      let _0x4ad3c9 = Object.keys(_0x11d79e).find(_0x54a3e0 => /^__reactProps/g.test(_0x54a3e0));
      return _0x11d79e?.[_0x4ad3c9]?.["children"]?.['props'];
    };
    ["handleRadioChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x31d3bc = _0x410634("[class=\"_1KW2f\"]");
      if (_0x31d3bc) {
        this.doRadioChallenge();
        return;
      }
      let _0xb382ec = _0x410634("[data-test=\"player-next\"]");
      if (_0xb382ec) {
        this.nextQuestion();
        return;
      }
      setTimeout(this.handleRadioChallenge.bind(this), 0x5dc);
    };
    ["doRadioChallenge"] = function () {
      this.setSolving(true);
      let _0x51efc4 = this.getData("type");
      switch (_0x51efc4) {
        case "radioListenMatch":
          this.handleRadioListenMatchChallenge();
          break;
        case 'radioBinary':
          this.handleRadioBinaryChallenge();
          break;
        case "radioListenRecognize":
          this.handleRadioListenRecognizeChallenge();
          break;
        case "radioSelect":
        case 'radioImageSelect':
          this.handleRadioChoiceChallenge();
          break;
        default:
          return this.autoduoError(_0x424dc6("text46", _0x51efc4));
      }
    };
    ["handleRadioListenMatchChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x38d480 = Array.from(_0x4181bd("button[data-test*=\"challenge-tap-token\"]"));
      let _0x2eaf95 = _0x38d480.splice(_0x38d480.length / 0x2);
      this.listenMatchHandlerGeneral(_0x38d480, _0x2eaf95, () => {
        this.setSolving(false);
        setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
      });
    };
    ["handleRadioBinaryChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x39f559 = _0x4181bd("[data-test=\"challenge-choice\"]");
      if (_0x39f559.length < 0x1) {
        this.autoduoError(_0x424dc6("text54"));
      }
      _0x39f559.forEach(_0x26c178 => _0x26c178.click());
      this.setSolving(false);
      setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
    };
    ["handleRadioListenRecognizeChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x49db4f = _0x4181bd("[data-test=\"challenge-choice\"]");
      let _0x3252de = this.getData('correctIndices');
      let _0x128abc = () => {
        if (_0x3252de.length <= 0x0) {
          this.setSolving(false);
          setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
          return;
        }
        let _0x53b0e0 = _0x3252de.shift();
        _0x49db4f[_0x53b0e0].click();
        setTimeout(_0x128abc, this.randomSafeDelayTime());
      };
      _0x128abc();
    };
    ["handleRadioChoiceChallenge"] = function () {
      if (this.isAuto) {
        this.handleChallengeChoiceGeneral(() => {
          this.setSolving(false);
          setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
        });
      }
    };
    ["findReactProps"] = function (_0x93f9f2) {
      this.reactProps = Object.keys(_0x93f9f2).find(_0x53440c => _0x53440c.startsWith('__reactProps'));
      if (!this.reactProps) {
        return this.autoduoError(_0x424dc6("text56"));
      }
    };
    ["getDataStateNode"] = function (_0x285d50) {
      if (null === this.reactProps) {
        this.findReactProps(_0x285d50);
      }
      let _0x21af67 = _0x285d50?.[this.reactProps]?.[this.lessGenealogy];
      if (Array.isArray(_0x21af67)) {
        this.dataStateNode = _0x21af67?.[0x0]?.["_owner"]?.["stateNode"];
      } else {
        this.dataStateNode = _0x21af67?.['_owner']?.["stateNode"];
      }
    };
    ["getData"] = function (_0x4657d6) {
      let _0x2831bc = this.dataStateNode?.['props']?.["currentChallenge"];
      if (!_0x2831bc) {
        return this.autoduoError(_0x424dc6("text57"));
      }
      if (Array.isArray(_0x4657d6)) {
        let _0x3f57f7 = _0x4657d6.reduce((_0x14e431, _0x58e003) => {
          if (null === _0x14e431) {
            return null;
          }
          let _0x552b8f = _0x14e431[_0x58e003];
          return _0x552b8f || null;
        }, _0x2831bc);
        return Array.isArray(_0x3f57f7) ? [..._0x3f57f7] : _0x3f57f7;
      }
      {
        let _0x2c942b = _0x2831bc[_0x4657d6];
        return Array.isArray(_0x2c942b) ? [..._0x2c942b] : _0x2c942b;
      }
    };
    ["getExpState"] = function (_0x2f9d25) {
      let _0x2f33d0 = Object.keys(_0x2f9d25);
      let _0x380f4c = _0x2f33d0.find(_0x2941b3 => _0x2941b3.startsWith("__reactProps"));
      let _0x58ebcd = _0x2f9d25?.[_0x380f4c]?.["children"]?.["props"]?.["slide"]?.["xpGoalSessionProgress"];
      return _0x58ebcd;
    };
    ["renderTime"] = function () {
      let _0x3df61e = _0x34fada(this.totalTime);
      this.dateElm.innerText = _0x3df61e;
    };
    ["showKeyBtnLoading"] = function (_0xd896dc) {
      if (_0xd896dc) {
        this.keyBtn.appendChild(this.btnLoading);
      } else {
        this.keyBtn.removeChild(this.btnLoading);
      }
      this.isFetching = _0xd896dc;
    };
    ["setSolving"] = function (_0x11f8da) {
      this.isSolving = _0x11f8da;
    };
    ["setSafeMode"] = function (_0x3b857f) {
      this.isSafeMode = _0x3b857f;
      this.safeDelayTime = _0x3b857f ? this.safeDelayTimeTemp : 0x0;
      _0x5f0d10('isSafeMode', _0x3b857f);
      return _0x3b857f;
    };
    ["randomSafeDelayTime"] = function () {
      return this.isSafeMode ? Math.floor(Math.random() * (this.safeDelayTime - 0x64) + 0x64) : 0x0;
    };
    ["sleep"] = async function (_0x216c34) {
      await new Promise(_0x2723d8 => setTimeout(_0x2723d8, _0x216c34));
    };
    ['updatePassModeState'] = function () {
      this.passModeLabel.innerText = _0x424dc6("text59", this.passValue, 0xf423f === this.passModeValue ? 'âˆ' : this.passModeValue);
      _0x5f0d10('passValue', this.passValue);
    };
    ["openBoxReward"] = function () {
      let _0xb578d5 = _0x410634("button img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/09f977a3e299d1418fde0fd053de0beb.svg\"]");
      return !!_0xb578d5 && (_0xb578d5.click(), setTimeout(this.handlePassMode.bind(this), 0x3e8), true);
    };
    ["skipCharacterGate"] = function () {
      let _0x37ac62 = _0x410634("button img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f67d6256f5ccdb54af08633d69e27ef8.svg\"]");
      if (_0x37ac62) {
        _0x37ac62.click();
        setTimeout(() => {
          let _0x4139b3 = _0x410634("a[data-test*=\"skill-path-state-active\"] + button");
          _0x4139b3?.['click']();
        }, 0x320);
        setTimeout(() => {
          let _0x2c3528 = _0x410634("button[data-test=\"notification-drawer-no-thanks-button\"]");
          _0x2c3528?.["click"]();
        }, 0x640);
        setTimeout(this.handlePassMode.bind(this), 0xe10);
        return true;
      }
    };
    ['autoduoDecode'] = function (_0x17d9a0) {
      try {
        let _0x1f4700 = this.decoder(_0x17d9a0);
        _0x1f4700 = atob(_0x1f4700);
        let _0x526afe = _0x1f4700.length / 0x2;
        let _0x30da8b = _0x1f4700.slice(0x0, _0x526afe);
        let _0x3169c4 = _0x1f4700.slice(_0x526afe);
        _0x30da8b = this.decoder(_0x30da8b);
        _0x3169c4 = this.decoder(_0x3169c4);
        let _0x4b302d = _0x30da8b + _0x3169c4;
        let _0x570c5b = JSON.parse(atob(_0x4b302d));
        return _0x570c5b;
      } catch (_0x816a36) {
        return null;
      }
    };
    ['decoder'] = function (_0x5c0c24) {
      try {
        let _0x5e579d = _0x5c0c24.length - 0x5;
        let _0x56523b = +_0x5c0c24[_0x5e579d];
        let _0xb7aa4e = _0x5c0c24.slice(0x0, _0x56523b) + _0x5c0c24.slice(_0x56523b + 0x2, _0x5e579d) + _0x5c0c24.slice(_0x5e579d + 0x2);
        return _0xb7aa4e;
      } catch (_0x40bb5b) {
        return null;
      }
    };
    ['autoduoFeatureDisabled'] = function () {
      let _0x329b96 = this.isAutoFarmXP ? "Auto Farm XP" : this.isLegendMode ? _0x424dc6("text23") : this.isPassMode ? _0x424dc6("text32") : '';
      if (_0x329b96) {
        window.alert(_0x424dc6("text81", _0x329b96, _0x329b96));
      }
    };
    ["autoduoStopAllAuto"] = function () {
      if (this.isSolving) {
        this.setSolving(false);
      }
      if (this.isLegendMode) {
        this.stopLegend();
      }
      if (this.isAutoFarmXP) {
        this.handleFarmXPOff();
      }
      if (this.isPassMode) {
        this.handlePassModeOff();
      }
    };
    ["autoduoDisableFeatures"] = function (..._0x2e6b78) {
      _0x2e6b78.forEach(_0x474584 => {
        _0x474584.classList.add("autoduo-disabled");
        _0x474584.isDisabled = true;
      });
    };
    ["autoduoEnableFeatures"] = function (..._0x18a19c) {
      _0x18a19c.forEach(_0x295003 => {
        _0x295003.classList.remove("autoduo-disabled");
        _0x295003.isDisabled = false;
      });
    };
    ["autoduoSkipBtn"] = function () {
      let _0x1041c6 = _0x410634(this.skipLegendarySuggestionBtn) || _0x410634("[data-test=\"practice-hub-ad-no-thanks-button\"]") || _0x410634("[data-test=\"plus-no-thanks\"]") || _0x410634("[data-test=\"story-start\"]");
      if (_0x1041c6) {
        _0x1041c6.click();
        return true;
      }
    };
    ["autoduoShowNewFeature"] = function () {
      if ((+_0x410c3d || 0x0) >= 0x1) {
        return;
      }
      this.autoduoStyle.innerHTML += "\n\t\t\t\tbutton.setting-btn-listening::after,\n\t\t\t\t.auto-x2-wrapper label::before{\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 6px;\n\t\t\t\t\tright: 10px;\n\t\t\t\t\twidth: 10px;\n\t\t\t\t\theight: 10px;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\tbackground-color: red;\n\n\t\t\t\t\t--scale-min: 0.7;\n\t\t\t\t\t--scale-max: 1.05;\n\t\t\t\t\tanimation: autoduo-scale-eff 0.8s infinite;\n\t\t\t\t}\n\t\t\t\t.auto-x2-wrapper label::before {\n\t\t\t\t\tright: calc(100% + 6px);\n\t\t\t\t\ttop: 2px;\n\t\t\t\t}\n\t\t\t";
      let _0x4ab307 = () => {
        _0x3b3b34('featureVersion', 0x1);
        this.autoGetX2Wrapper.removeEventListener("click", _0x4ab307);
      };
      this.autoGetX2Wrapper.addEventListener("click", _0x4ab307);
    };
    ["autoduoError"] = function (_0x242777) {
      this.autoduoStopAllAuto();
      alert("ERROR: " + _0x242777);
    };
    ["autoduoLessonError"] = function (_0x19c921) {
      let _0x225498 = _0x410634("._2VEsk");
      return _0x225498 ? (_0x225498.click(), setTimeout(() => {
        this.autoduoError(_0x19c921 + _0x424dc6("text65"));
      }, 0x320)) : this.autoduoError(_0x19c921);
    };
    ['autoduoCreateSwitch'] = function (_0x5f2bb1 = '', _0x56df40, _0x5788de, _0x40c080) {
      let _0x5e7ba4 = document.createElement('i');
      Object.assign(_0x5e7ba4, {
        'className': "switch-info-listening",
        'title': _0x424dc6("text15"),
        'onclick'() {
          alert(_0x5f2bb1);
        }
      });
      let _0x4bb9fa = document.createElement("input");
      Object.assign(_0x4bb9fa, {
        'type': 'checkbox',
        'hidden': true,
        'checked': _0x5788de
      });
      let _0x590012 = _0x4fa2bb => {
        _0x4bb9fa.checked = _0x4fa2bb;
      };
      let _0x2b80b5 = document.createElement("label");
      _0x2b80b5.addEventListener('click', () => {
        _0x40c080(_0x590012);
      });
      let _0xddf6b7 = document.createElement("div");
      _0xddf6b7.className = "switch-container-listening";
      _0xddf6b7.append(_0x5e7ba4, _0x4bb9fa, _0x2b80b5);
      _0x56df40.classList.add("switch-wrapper-listening");
      _0x56df40.append(_0xddf6b7);
      _0x56df40.setAutoduoSwitch = _0x590012;
    };
    ["showGuide"] = function () {
      alert(_0x424dc6("text60"));
    };
    ["createStyle"] = function () {
      this.animationStyle = document.createElement("style");
      this.animationStyle.innerHTML = "\n\t\t\timg, svg, canvas {\n\t\t\t\tvisibility: hidden !important;\n\t\t\t} \n\t\t\tdiv:not(.autoduo-animate):not(.setting-overlay-listening) {\n\t\t\t\ttransition: none !important;\n\t\t\t\tanimation-duration: 0s !important;\n\t\t\t}\n\t\t\t.fSJFz {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\t";
      this.autoduoStyle = document.createElement("style");
      this.autoduoStyle.innerHTML = "\n\t\t\t:root{\n\t\t\t\t--autoduo-bg: 255,255,255;\n\t\t\t\t--autoduo-color: 75,75,75;\n\t\t\t\t--autoduo-h-color: 170,0,176;\n\t\t\t}\n\t\t\t:root[data-duo-theme=\"dark\"]{\n\t\t\t\t--autoduo-bg: 19,31,36;\n\t\t\t\t--autoduo-color: 241,247,251;\n\t\t\t\t--autoduo-h-color: 241,247,251;\n\t\t\t}\n\t\t\t.control-container-listening{\n\t\t\t\tposition: fixed;\n                z-index: 9999999;\n                left: 20px;\n                bottom: 75px;\n\t\t\t\tpadding: 12px 10px;\n\t\t\t\tborder: 2px dotted #ff00ff;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbox-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n\t\t\t\tbackground-color: rgba(var(--autoduo-bg), 0.4);\n\t\t\t\tbackdrop-filter: blur(4px);\n\t\t\t}\n\t\t\t.autoduo-animate{\n\t\t\t\tanimation: autoduo-control-eff .15s;\n\t\t\t}\n\t\t\t.autoduo-animate::after{\n\t\t\t\tanimation: autoduo-control-border-eff .35s .12s backwards;\n\t\t\t}\n\t\t\t@keyframes autoduo-control-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(.8);\n\t\t\t\t\topacity: .5;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes autoduo-control-border-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1.15);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.control-container-listening::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: -1;\n\t\t\t\tinset: 0;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tbox-shadow: rgb(199 138 217 / 50%) 0px 0px 0px 5px;\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t.control-container-listening.event{border-color: #ff0000}\n\t\t\t.control-container-listening.event::after{box-shadow: rgb(217 138 138 / 50%) 0px 0px 0px 5px;}\n            .auto-container-listening{\n\t\t\t\twidth: 250px !important;\n            }\n\t\t\t.setting-overlay-listening {\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tpadding: inherit;\n\t\t\t\tpadding-bottom: 20px;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbackdrop-filter: inherit;\n\t\t\t\tbackground-color: rgba(var(--autoduo-bg), 0.8);\n\t\t\t\tanimation: setting-overlay-eff 0.4s;\n\t\t\t}\n\t\t\t@keyframes setting-overlay-eff {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\ttransform: perspective(450px) rotateY(-90deg);\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransform: perspective(450px) rotateY(0deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t.setting-overlay-listening h3 {\n\t\t\t\tpadding: 8px 0 12px 0;\n\t\t\t\ttext-align: center;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t\t.setting-function-listening{\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t\t.setting-function-listening .switch-wrapper-listening {\n\t\t\t\tmargin-bottom: 11px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: #ff4e00;\n\t\t\t}\n\t\t\t.close-setting-btn-listening {\n\t\t\t\twidth: 80%;\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\t\t\t.autoduo-btn {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t\theight: 46px;\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tcolor: rgb(var(--autoduo-bg));\n\t\t\t\tborder: none;\n\t\t\t\tborder-radius: 16px;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tletter-spacing: 1px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.autoduo-btn::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: -1;\n\t\t\t\tbackground-color: #1cb0f6;\n\t\t\t\tcolor: rgb(15, 131, 186);\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbox-shadow: 0 4px 0;\n\t\t\t}\n\t\t\t.autoduo-btn:hover {\n\t\t\t\tfilter: brightness(1.1);\n\t\t\t}\n\t\t\t.autoduo-btn:active {\n\t\t\t\ttransform: translateY(4px);\n\t\t\t}\n\t\t\t.autoduo-btn:active::before {\n\t\t\t\tbox-shadow: none;\n\t\t\t}\n\n\t\t\t.btn-green::before{\n\t\t\t\tbackground-color: #58CC02;\n\t\t\t\tcolor: rgb(80, 151, 0);\n\t\t\t}\n\t\t\t.btn-red::before {\n\t\t\t\tbackground-color: #FF4B4B;\n\t\t\t\tcolor: rgb(234,43,43);\n\t\t\t}\n\t\t\t.btn-blue::before {\n\t\t\t\tbackground-color: rgb( 60,77,255 );\n\t\t\t\tcolor: rgb( 63,34,236 );\n\t\t\t}\n\t\t\t.btn-white {\n\t\t\t\tcolor: #1cb0f6;\n\t\t\t}\n\t\t\t.btn-white:hover {\n\t\t\t\tfilter: brightness(0.85);\n\t\t\t}\n\t\t\t.btn-white::before {\n\t\t\t\tbackground-color: white;\n\t\t\t\tcolor: rgb(85 200 255);\n\t\t\t\tborder: 2px solid #8fdbff;\n\t\t\t\tbox-shadow: 0 2px 0;\n\t\t\t}\n\t\t\t.btn-orange::before {\n\t\t\t\tcolor: #ac8700;\n\t\t\t\tbackground-color: #fb9f00;\n\t\t\t}\n\t\t\t.btn-purple::before {\n\t\t\t\tbackground-color: #e800ff;\n\t\t\t\tcolor: pink;\n\t\t\t}\n\t\t\tbutton.setting-btn-listening {\n\t\t\t\twidth: 100% !important;\n\t\t\t}\n\t\t\tbutton.setting-btn-listening::before {\n\t\t\t\tbackground-image: url(https://autoduolingo.click/assets/client/setting.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 22px;\n\t\t\t\tbackground-position: 18px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening{\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 100% !important;\n\t\t\t\tmargin-top: 8px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening::before {\n\t\t\t\tbackground-image: url(https://autoduolingo.click/assets/client/xp.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 32px;\n\t\t\t\tbackground-position: 12px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.auto-x2::before {\n\t\t\t\tbackground-image: none;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.auto-x2::after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: -1;\n\t\t\t\tleft: 16px;\n\t\t\t\twidth: 25px;\n\t\t\t\theight: 30px;\n\t\t\t\tbackground-image: url(https://autoduolingo.click/assets/client/exp.svg);\n\t\t\t\tbackground-size: contain;\n    \t\t\tfilter: drop-shadow(0px 0px 6px white);\n\n\t\t\t\t--scale-min: 0.8;\n\t\t\t\t--scale-max: 1.05;\n\t\t\t\tanimation: autoduo-scale-eff 1.1s infinite;\n\t\t\t}\n\t\t\t@keyframes autoduo-scale-eff {\n\t\t\t\t0%, 100% {\n\t\t\t\t\ttransform: scale(var(--scale-min));\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(var(--scale-max));\n\t\t\t\t}\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening label {\n\t\t\t\tdisplay: none;\n\t\t\t\tfont-size: 9px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.farming-location label{\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.autoduo-disabled {\n\t\t\t\topacity: 0.8 !important;\n\t\t\t\tuser-select: none !important;\n\t\t\t\t-ms-user-select: none !important;\n\t\t\t\t-moz-user-select: none !important;\n\t\t\t\t-webkit-user-select: none !important;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.autoduo-disabled::before{\n\t\t\t\tbackground-color: #9c9c9c !important;\n    \t\t\tcolor: #686868 !important;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.turbo.running::before{\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/thunder.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: right;\n\t\t\t}\n\t\t\t.feedback-btn-listening, .dropkey-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tmargin-top: 4px;\n\t\t\t\twidth: calc(45% - 2px);\n\t\t\t}\n\t\t\t.feedback-btn-listening{\n\t\t\t\tmargin-right: 4px;\t\n\t\t\t\twidth: calc(55% - 2px);\n\t\t\t}\n\t\t\t.feedback-btn-listening::before{\n\t\t\t\tbackground-image: url(https://autoduolingo.click/assets/client/streak2.svg), url(https://autoduolingo.click/assets/client/streak2.svg),url(https://autoduolingo.click/assets/client/streak-ground.svg);\n\t\t\t\tbackground-size: 12%, 14%, cover;\n\t\t\t\tbackground-position: 6px 27px, 111px 2px, center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t}\n            .statistic-listening {\n                color: rgb(var(--autoduo-color));\n                font-size: 18px;\n                font-weight: bold;\n            }\n\t\t\t.statistic-listening p{\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.statistic-listening > p::before{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmin-width: 56px;\n\t\t\t}\n\t\t\t.statistic-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tmargin: 14px 0;\n\t\t\t}\n\t\t\t.time-listening, .total-exp-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 0 !important;\n\t\t\t}\n\t\t\t.time-listening::before,\n\t\t\t.total-exp-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 21px;\n\t\t\t\theight: 21px;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/clock.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.total-exp-listening::before{\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 21px;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/exp.svg');\n\t\t\t}\n            .total-exp-listening::after{\n                content: 'XP';\n\t\t\t\tmargin-left: 4px;\n            }\n\t\t\t.key-container-listening{\n\t\t\t\twidth: 250px;\n\t\t\t\ttext-align:center;\n\t\t\t}\n\t\t\t.key-container-listening > * {\n\t\t\t\tfont-size: 15px !important;\n\t\t\t}\n\t\t\t.key-input-listening{\n                border: 2px solid #aaa;\n                width: 100%;\n                padding: 12px 8px;\n                border-radius: 8px;\n                background-color: #eee;\n            }\n            .key-btn-listening {\n\t\t\t\tposition: relative;\n                width: 100%;\n\t\t\t\tmargin: 6px 0;\n            }\n\t\t\t.loading-btn-listening{\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground-color: #58CC02;\n    \t\t\tborder-radius: inherit;\n\t\t\t}\n\t\t\t.loading-btn-dot {\n\t\t\t\t--size: 3.25px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tborder: var(--size) solid rgb(var(--autoduo-bg));\n\t\t\t\tmargin: calc(var(--size) * 1.5);\n\t\t\t}\n\t\t\t.loading-btn-dot:nth-child(1) {\n\t\t\t\tanimation: loading-btn-eff .5s ease-in-out alternate infinite;\n\t\t\t}\n\t\t\t.loading-btn-dot:nth-child(2) {\n\t\t\t\tanimation: loading-btn-eff .5s ease-in-out alternate .2s infinite;\n\t\t\t}\n\t\t\t.loading-btn-dot:nth-child(3) {\n\t\t\t\tanimation: loading-btn-eff .5s ease-in-out alternate .4s infinite;\n\t\t\t}\n\t\t\t@keyframes loading-btn-eff {\n\t\t\t\t100% { transform: scale(1.5); }\n\t\t\t}\n\n\t\t\t.guide-btn-listening, .getlink-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\twidth: calc(50% - 3px);\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t\t.getlink-btn-listening{\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\t\t\t.getlink-btn-listening::before {\n\t\t\t\tbackground-image: url(https://autoduolingo.click/assets/client/key.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: center 21px;\n    \t\t\tbackground-size: 25px;\n\t\t\t}\n\t\t\t.guide-getlink-btn-listening, .key-vip-btn-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 8px;\n\t\t\t}\n\t\t\t.key-vip-btn-listening{\n\t\t\t\tcolor: yellow;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::before{\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/twinkle.ndx');\n    \t\t\tbackground-size: 85px auto;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.signature-listening{\n\t\t\t\tposition: fixed;\n                z-index: 99999999;\n\t\t\t\ttop: 4px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tcolor: rgb(var(--autoduo-h-color));\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tfont-style: italic;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\twidth: max-content;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.signature-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tbackground-image: url(https://autoduolingo.click/assets/client/autoduosuperThumb.ndx);\n\t\t\t\tbackground-size: cover;\n\t\t\t\tmargin: -4px 0;\n\t\t\t\tmargin-right: 4px;\n\t\t\t}\n\t\t\t.autoduo-language-wrapper{\n\t\t\t\tposition: relative;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-weight: normal;\n\t\t\t\tcolor: rgb(var(--autoduo-color));\n\t\t\t}\n\t\t\t.autoduo-language-wrapper::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 8px;\n\t\t\t\twidth: 8px;\n\t\t\t\theight: 8px;\n\t\t\t\tborder: 1.5px solid currentColor;\n\t\t\t\tborder-top: none;\n\t\t\t\tborder-left: none;\n\t\t\t\ttransform: rotate(45deg) skew(-8deg, -8deg);\n\t\t\t}\n\t\t\t.autoduo-language-selection{\n\t\t\t\tdisplay: none;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t\tpadding: 4px 0;\n\n\t\t\t\tbackground: #848484;\n\t\t\t\tcolor: white;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbox-shadow: rgb(104 149 199 / 50%) 0px 0px 0px 3px;\n\t\t\t\tanimation: language-selection-eff .25s;\n\t\t\t}\n\t\t\t.signature-listening.event .autoduo-language-selection{\n\t\t\t\tbox-shadow: rgb(255 111 111 / 50%) 0px 0px 0px 3px;\n\t\t\t}\n\t\t\t.autoduo-language-selection.show{\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t@keyframes language-selection-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: translateY(12px);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.autoduo-language-option,\n\t\t\t.autoduo-language-selected{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\ttransition: all .15s;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.autoduo-language-option:hover{\n\t\t\t\tbackground-color: #595959;\n\t\t\t}\n\t\t\t.autoduo-language-selected{\n\t\t\t\tmargin: 0;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tborder: 1px solid #d6d6d6;\n\t\t\t\tborder-radius: 6px;\n\t\t\t\tpadding: 3px 8px;\n\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\t\t\t\tbackground-color: rgba(var(--autoduo-bg),0.5);\n\t\t\t}\n\t\t\t.autoduo-language-selected:hover{\n\t\t\t\tfilter: brightness(0.9);\n\t\t\t}\n\t\t\t.autoduo-language-icon{\n\t\t\t\twidth: 24px;\n\t\t\t\theight: 15px;\n\t\t\t\tmargin-right: 6px;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbackground-image: var(--data-icon);\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\n\t\t\t.key-type-listening::before,\n\t\t\t.key-expired-listening::before {\n\t\t\t\tcontent: var(--data-name);\n\t\t\t}\n\t\t\t.key-expired-listening {\n\t\t\t\tmargin-right: -8px;\n\t\t\t}\n\t\t\t.vip-type-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tcolor: #ff00ff;\n\t\t\t\tbackground-color: #ffe0fd;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tborder: 2px solid #ff00ff;\n\t\t\t}\n\t\t\t.vip-type-listening.event {\n\t\t\t\tcolor: red;\n\t\t\t\tbackground-color: #ffedf0;\n\t\t\t\tborder-color: red;\n\t\t\t}\n\t\t\t.vip-type-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.vip-expired-listening{\n\t\t\t\tcolor: #ff00ff;\n\t\t\t\tletter-spacing: -1px;\n\t\t\t}\n\t\t\t.vip-expired-listening.event{\n\t\t\t\tcolor: #ff0000;\n\t\t\t}\n\t\t\t.vip-expired-listening span {\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\t.show-hide-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 999999999;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tcolor: rgb(var(--autoduo-h-color));\n\t\t\t\tbackground-color: #00DBDE;\n\t\t\t\tbackground-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);\n\t\t\t\tborder-color: #b800c8;\n\t\t\t\t\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 32px;\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.show-hide-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/vipCircle.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransform: scale(1.2);\n\t\t\t}\n\t\t\t.show-hide-listening::after{\n\t\t\t\tcontent: var(--data-version);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 0;\n\t\t\t\ttransform: translate(-50%, 130%);\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.show-hide-listening.older::after{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t.show-hide-listening i {\n\t\t\t\tposition: relative;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/little-eye.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.show-hide-listening.hide i::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 110%;\n\t\t\t\theight: 5px;\n\t\t\t\ttransform: rotate(45deg) translateX(-3px);\n\t\t\t\tbackground-image: linear-gradient(90deg, #fea0ff 0%, #00DBDE 100%);\n\t\t\t\tborder-radius: 7px;\n\t\t\t}\n\t\t\t.overlay-listening, \n\t\t\t.countdown-overlay-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: 9999;\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\t\t\t.countdown-overlay-listening{\n\t\t\t\tz-index: 999999999;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 12px;\n\n\t\t\t\tbackground-color: rgba(0,0,0,0.5);\n\t\t\t\tcolor: white;\n\t\t\t\tfont-size: 28px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.countdown-overlay-listening::before{\n\t\t\t\tcontent: var(--data-prefix);\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening::before{\n\t\t\t\tcontent: var(--data-name);\n\t\t\t}\n\t\t\t.autoduo-disabled{\n\t\t\t\topacity: .4;\n\t\t\t\tuser-select: none !important;\n\t\t\t\t-ms-user-select: none !important;\n\t\t\t\t-moz-user-select: none !important;\n\t\t\t\t-webkit-user-select: none !important;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable{\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable label{\n\t\t\t\topacity: .6;\n\t\t\t}\n\t\t\t.switch-container-listening{\n\t\t\t\tflex-grow: 1;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.switch-info-listening{\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\tmargin-right: 8px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: url('https://autoduolingo.click/assets/client/infomation-icon.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.switch-info-listening:hover{\n\t\t\t\tfilter: brightness(0.8);\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening label{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 46px;\n\t\t\t\theight: 24px;\n\t\t\t\tbackground-color: #bbb;\n\t\t\t\tbox-shadow: rgb(195 109 221 / 62%) 0px 0px 0px 3px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.control-container-listening.event .switch-wrapper-listening label{\n\t\t\t\tbox-shadow: rgb(255 85 85 / 62%) 0px 0px 0px 3px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening label::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 2px;\n\t\t\t\ttop: 2px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: white;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label{\n\t\t\t\tbackground-color: #1FC2FF;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label::after {\n\t\t\t\tleft: 24px;\n\t\t\t}\n\t\t\t\n\t\t\t.function-wrapper-listening{\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #ff4e00;\n\t\t\t}\n\t\t\t.autoduo-label{\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 99999;\n\t\t\t\tbottom: 6px;\n\t\t\t\tleft: 50%;\n\t\t\t\tmax-width: calc(100% - 16px);\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.autoduo-label p + p{\n\t\t\t\tmargin-top: 2px;\n\t\t\t}\n\t\t\t.local-label-listening{\n\t\t\t\tmargin: -16px -4px 8px -4px;\n   \t\t\t\tpadding: 12px 16px 0 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tword-wrap: break-word;\n\t\t\t\toverflow-wrap: break-word;\n\t\t\t\tline-height: 16px;\n\t\t\t\tmax-height: 46px;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: #ff65e1;\n\t\t\t\tborder: 1px solid #ff4e00;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\tborder-top: none;\n\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\tborder-top-right-radius: 0;\n\t\t\t\tanimation: local-label-eff 0.5s;\n\t\t\t}\n\t\t\t@keyframes local-label-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: translateY(-70%);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.label-listening{\n\t\t\t\twidth: max-content;\n\t\t\t\tmax-width: 100%;\n\t\t\t\tline-height: 16px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tcolor: #df0d0d;\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tborder-radius: 40px;\n\t\t\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\t\t}\n\t\t\t.targetmode-label-listening::before{\n\t\t\t\tcontent: var(--data-frefix);\n\t\t\t}\n\n\t\t\t.contact-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tmargin: 8px 0 -4px 0;\n\t\t\t}\n\t\t\t.contact-item-listening{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tmargin: 2px 4px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: var(--data-img);\n\t\t\t\tcolor: rgb(var(--autoduo-color));\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransition: .12s;\n\t\t\t}\n\t\t\t.contact-item-listening:hover{\n\t\t\t\tbox-shadow: rgb(199 138 217 / 50%) 0px 0px 0px 3px;\n\t\t\t\ttransform: scale(1.11);\n\t\t\t}\n\t\t\t.contact-item-listening:hover .popup {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.contact-item-listening .popup {\n\t\t\t\tdisplay: none;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 100%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tpadding: 2px 6px;\n\t\t\t\twidth: max-content;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tborder-radius: 6px;\n\t\t\t\tbackground-color: rgb(var(--autoduo-bg));\n\t\t\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\t\t\tanimation: contact-popup-eff 0.2s;\n\t\t\t}\n\t\t\t@keyframes contact-popup-eff {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tbottom: 50%;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tbottom: 100%;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.contact-item-listening .popup::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(100% - 2px);\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tborder: 10px solid transparent;\n\t\t\t\tborder-top-color: rgb(var(--autoduo-bg));\n\n\t\t\t}\n\t\t\t.control-container-listening.event .contact-item-listening:hover{\n\t\t\t\tbox-shadow: rgb(255 103 103 / 50%) 0px 0px 0px 3px;\n\t\t\t}\n\n\t\t\t@media (max-height: 550px) {\n\t\t\t\t.control-container-listening {\n\t\t\t\t\tbottom: 4px;\n\t\t\t\t}\n\t\t\t}\n        ";
      document.head.appendChild(this.autoduoStyle);
    };
  }
  let _0x3e6885 = {
    'text1': "Nháº­p Key VÃ o ÄÃ¢y...",
    'text2': "NHáº¬P KEY",
    'text3': "HÆ¯á»šNG DáºªN",
    'text4': "LINK Láº¤Y KEY",
    'text5': "HÆ¯á»šNG DáºªN Láº¤Y KEY",
    'text6': "MUA KEY VIP DÃ€I Háº N",
    'text7': "DevX Said: Key khÃ´ng Ä‘Ãºng hoáº·c Ä‘Ã£ háº¿t háº¡n, vui lÃ²ng thá»­ láº¡i!",
    'text8': "Key hiá»‡n táº¡i Ä‘Ã£ háº¿t háº¡n sá»­ dá»¥ng, vui lÃ²ng láº¥y Key má»›i Ä‘á»ƒ tiáº¿p tá»¥c auto!",
    'text9': "CÃ³ lá»—i xáº£y ra khi xÃ¡c thá»±c, vui lÃ²ng thá»­ láº¡i sau!",
    'text10': "Lá»—i dá»¯ liá»‡u báº¥t há»£p phÃ¡p!",
    'text11': "VÃ´ thá»i háº¡n",
    'text12': "Key cÆ¡ báº£n",
    'text13': "Loáº¡i: ",
    'text14': "HSD: ",
    'text15': "Xem thÃ´ng tin",
    'text16': "áº¨n hoáº¡t áº£nh",
    'text17': "- CHáº¾ Äá»˜ áº¨N HOáº T áº¢NH:\nKhi báº­t cháº¿ Ä‘á»™ nÃ y, cÃ¡c hÃ¬nh áº£nh vÃ  hoáº¡t áº£nh Ä‘á»™ng trong trang web sáº½ Ä‘Æ°á»£c áº©n Ä‘á»ƒ tá»‘i Æ°u hiá»‡u suáº¥t.",
    'text18': "Cháº¿ Ä‘á»™ an toÃ n",
    'text19': "- CHáº¾ Äá»˜ AN TOÃ€N:\nKhi báº­t cháº¿ Ä‘á»™ nÃ y, há»‡ thá»‘ng sáº½ mÃ´ phá»ng thao tÃ¡c cá»§a ngÆ°á»i dÃ¹ng khi auto. Tá»‘c Ä‘á»™ sáº½ thÆ° thÃ¡i hÆ¡n, bÃ¹ láº¡i thá»i gian hoÃ n thÃ nh bÃ i há»c vÃ  lÆ°á»£ng kinh nghiá»‡m sáº½ Ä‘Æ°á»£c tá»± nhiÃªn nháº¥t, giáº£m thiá»ƒu cÃ¡c rá»§i ro vá» REPORT vÃ  BAN tÃ i khoáº£n!",
    'text20': "Cháº¿ Ä‘á»™ tÄƒng tá»‘c",
    'text21': "- CHáº¾ Äá»˜ TÄ‚NG Tá»C:\nKhi báº­t, há»‡ thá»‘ng sáº½ tÄƒng tá»‘c Ä‘á»™ auto má»™t cÃ¡ch vÆ°á»£t trá»™i. Hiá»‡u nÄƒng cÅ©ng sáº½ sá»­ dá»¥ng nhiá»u hÆ¡n vÃ  khÃ´ng khuyáº¿n khÃ­ch sá»­ dá»¥ng trÃªn cÃ¡c thiáº¿t bá»‹ cÃ³ hiá»‡u nÄƒng tháº¥p. \nTáº¯t vÃ  lÃ m má»›i trang náº¿u báº¡n gáº·p sá»± cá»‘ khi kÃ­ch hoáº¡t cháº¿ Ä‘á»™ nÃ y.\n\n - LÆ°u Ã½: ÄÃ¢y lÃ  tÃ­nh nÄƒng thá»­ nghiá»‡m vÃ  cáº§n cÃ³ Key Vip Ä‘á»ƒ sá»­ dá»¥ng. Chá»‰ báº­t khi báº¡n thá»±c sá»± cáº§n tá»‘c Ä‘á»™ vÃ  hiá»ƒu rÃµ vá» nÃ³!!!",
    'text22': "Xin lá»—i, tÃ­nh nÄƒng nÃ y chá»‰ dÃ nh cho Key VIP, liÃªn há»‡ ADMIN Ä‘á»ƒ biáº¿t thÃªm chi tiáº¿t!!",
    'text23': "Cháº¿ Ä‘á»™ vÆ°á»£t",
    'text24': "- CHáº¾ Äá»˜ VÆ¯á»¢T BÃ€I Há»ŒC:\nKhi Ä‘Æ°á»£c báº­t, há»‡ thá»‘ng khÃ´ng lÃ m láº·p láº¡i cÃ¡c bÃ i luyá»‡n táº­p nhÆ° cháº¿ Ä‘á»™ thÃ´ng thÆ°á»ng mÃ  sáº½ lÃ m cÃ¡c bÃ i mÃ  ngÆ°á»i dÃ¹ng chá»§ Ä‘á»™ng lá»±a chá»n. Cháº¿ Ä‘á»™ nÃ y Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ lÃ m cÃ¡c bÃ i táº­p huyá»n thoáº¡i, bÃ i táº­p truyá»‡n vÃ  háº§u háº¿t cÃ¡c bÃ i táº­p tÆ°Æ¡ng tá»± khÃ¡c. Báº¡n cáº§n vÃ o bÃ i há»c muá»‘n vÆ°á»£t trÆ°á»›c, sau Ä‘Ã³ há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng vÆ°á»£t bÃ i Ä‘Ã³ cho báº¡n!\nNÃºt auto cÆ¡ báº£n sáº½ táº¡m thá»i bá»‹ táº¯t khi cháº¿ Ä‘á»™ nÃ y báº­t!",
    'text25': "Cháº¿ Ä‘á»™ KN má»¥c tiÃªu",
    'text26': "- CHáº¾ Äá»˜ KINH NGHIá»†M Má»¤C TIÃŠU:\nBáº±ng viá»‡c Ä‘áº·t sá»‘ kinh nghiá»‡m má»¥c tiÃªu, há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng dá»«ng auto khi tá»•ng sá»‘ kinh nghiá»‡m thu Ä‘Æ°á»£c báº±ng hoáº·c vÆ°á»£t qua sá»‘ kinh nghiá»‡m má»¥c tiÃªu Ä‘Ã£ Ä‘áº·t.\nÄiá»u nÃ y giÃºp báº¡n kiá»ƒm soÃ¡t auto tá»‘t hÆ¡n, trÃ¡nh viá»‡c quÃªn táº¯t auto dáº«n Ä‘áº¿n lÆ°á»£ng kinh nghiá»‡m thu Ä‘Æ°á»£c khÃ´ng mong muá»‘n!\n\n- LÆ°u Ã½: sá»‘ kinh nghiá»‡m má»¥c tiÃªu pháº£i lá»›n hÆ¡n lÆ°á»£ng kinh nghiá»‡m Ä‘Ã£ auto hiá»‡n táº¡i!",
    'text27': "Báº¡n cÃ³ cháº¯c cháº¯n muá»‘n há»§y bá» má»¥c tiÃªu hiá»‡n táº¡i khÃ´ng?",
    'text28': "Báº±ng viá»‡c Ä‘áº·t sá»‘ kinh nghiá»‡m má»¥c tiÃªu, há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng dá»«ng auto khi tá»•ng sá»‘ kinh nghiá»‡m thu Ä‘Æ°á»£c báº±ng hoáº·c vÆ°á»£t qua sá»‘ kinh nghiá»‡m má»¥c tiÃªu Ä‘Ã£ Ä‘áº·t.\n# LÆ°u Ã½: Sá»‘ KN má»¥c tiÃªu pháº£i lá»›n hÆ¡n sá»‘ KN Ä‘Ã£ thu Ä‘Æ°á»£c hiá»‡n táº¡i!\n\nNháº­p vÃ o sá»‘ kinh nghiá»‡m má»¥c tiÃªu báº¡n muá»‘n:",
    'text29': "GiÃ¡ trá»‹ khÃ´ng há»£p lá»‡, vui lÃ²ng thá»­ láº¡i!",
    'text30': "Sá»‘ KN má»¥c tiÃªu pháº£i lá»›n hÆ¡n sá»‘ KN Ä‘Ã£ auto hiá»‡n táº¡i (%v), vui lÃ²ng thá»­ láº¡i!",
    'text31': "GiÃ¡ trá»‹ quÃ¡ lá»›n, vui lÃ²ng thá»­ láº¡i!",
    'text32': "Cháº¿ Ä‘á»™ auto vÆ°á»£t",
    'text33': "- CHáº¾ Äá»˜ Tá»° Äá»˜NG VÆ¯á»¢T BÃ€I Há»ŒC Má»šI:\nBáº±ng viá»‡c Ä‘áº·t sá»‘ bÃ i há»c mÃ  báº¡n muá»‘n vÆ°á»£t, há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng vÆ°á»£t sá»‘ bÃ i há»c má»›i tÆ°Æ¡ng á»©ng vá»›i giÃ¡ trá»‹ mÃ  báº¡n Ä‘Ã£ Ä‘áº·t!\nNÃºt auto cÆ¡ báº£n sáº½ táº¡m thá»i bá»‹ táº¯t khi cháº¿ Ä‘á»™ nÃ y báº­t!\n\n- LÆ°u Ã½: giÃ¡ trá»‹ cá»§a bÃ i há»c náº±m trong pháº¡m vi 1 - 1000 (Nháº­p 0 Ä‘á»ƒ auto vÃ´ háº¡n)!",
    'text34': "Báº¡n cÃ³ cháº¯c cháº¯n muá»‘n dá»«ng auto láº¡i khÃ´ng?",
    'text35': "Báº±ng viá»‡c Ä‘áº·t sá»‘ bÃ i há»c mÃ  báº¡n muá»‘n vÆ°á»£t, há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng vÆ°á»£t sá»‘ bÃ i há»c má»›i tÆ°Æ¡ng á»©ng vá»›i giÃ¡ trá»‹ mÃ  báº¡n Ä‘Ã£ Ä‘áº·t!\n(Nháº­p 0 Ä‘á»ƒ auto vÃ´ háº¡n)\n\nNháº­p vÃ o sá»‘ bÃ i há»c mÃ  báº¡n muá»‘n vÆ°á»£t (1 - 1000):",
    'text36': "Báº®T Äáº¦U FARM KN",
    'text37': "Dá»ªNG FARM KN",
    'text38': "Gá»  KEY",
    'text39': "Báº¡n cÃ³ thá»±c sá»± muá»‘n gá»¡ Key hiá»‡n táº¡i khÃ´ng? (Sau khi gá»¡ sáº½ tá»± Ä‘á»™ng lÃ m má»›i trang Ä‘á»ƒ cáº­p nháº­t)",
    'text40': "Sau khi báº­t, tá»‘c Ä‘á»™ auto sáº½ ráº¥t nhanh, tuy nhiÃªn nÃ³ sáº½ tiÃªu tá»‘n nhiá»u hÆ¡n hiá»‡u nÄƒng cá»§a thiáº¿t bá»‹ (khÃ´ng khuyáº¿n khÃ­ch trÃªn cÃ¡c thiáº¿t bá»‹ cÃ³ hiá»‡u nÄƒng tháº¥p). Báº¡n cÃ³ cháº¯c muá»‘n má»Ÿ cháº¿ Ä‘á»™ nÃ y khÃ´ng?",
    'text41': "[Auto Pass Mode] ÄÃ£ hoÃ n thÃ nh %v bÃ i há»c má»›i.\nAuto Ä‘Ã£ tá»± Ä‘á»™ng dá»«ng láº¡i!!",
    'text42': "Vá»‹ trÃ­ khÃ´ng thÃ­ch há»£p: chá»‰ báº­t auto khi Ä‘ang á»Ÿ trang chá»§ hoáº·c trang luyá»‡n táº­p dÃ nh riÃªng cho Duolingo Super (cÃ³ hÃ¬nh quáº£ táº¡)!\n- Náº¿u báº¡n muá»‘n Farm KN táº¡i bÃ i há»c cá»¥ thá»ƒ, hÃ£y báº­t tÃ­nh nÄƒng \"Äáº·t vá»‹ trÃ­ Farm KN\" trong cÃ i Ä‘áº·t cá»§a cÃ´ng cá»¥!\n- Báº­t auto táº¡i trang chá»§ sáº½ tá»± Ä‘á»™ng farm bÃ i luyá»‡n táº­p (10 KN), cÃ²n báº­t auto táº¡i trang luyá»‡n táº­p cá»§a Duolingo Super sáº½ tá»± Ä‘á»™ng farm bÃ i luyá»‡n nghe (20 KN).\n- Náº¿u báº¡n muá»‘n auto lÃ m cÃ¡c bÃ i táº­p huyá»n thoáº¡i hoáº·c má»Ÿ khÃ³a cÃ¡c bÃ i táº­p khÃ¡c, vui lÃ²ng báº­t cháº¿ Ä‘á»™ vÆ°á»£t (Lesson Pass Mode).",
    'text43': '',
    'text44': "[Auto Pass Mode] Báº¡n Ä‘Ã£ hoÃ n thÃ nh táº¥t cáº£ cÃ¡c bÃ i táº­p trong khÃ³a há»c nÃ y!!",
    'text45': "Thá»­ thÃ¡ch khÃ´ng xÃ¡c Ä‘á»‹nh!!",
    'text46': "BÃ i táº­p nÃ y hiá»‡n chÆ°a Ä‘Æ°á»£c há»— trá»£, vui lÃ²ng bÃ¡o lá»—i cho Admin hoáº·c kháº¯c phá»¥c táº¡m thá»i báº±ng cÃ¡ch lÃ m thá»§ cÃ´ng bÃ i táº­p nÃ y, sau Ä‘Ã³ báº­t láº¡i auto! [%v]",
    'text47': "KhÃ´ng tÃ¬m tháº¥y dá»¯ liá»‡u bÃ i há»c.",
    'text48': "KhÃ´ng tÃ¬m tháº¥y lá»±a chá»n phÃ¹ há»£p.",
    'text49': "KhÃ´ng tÃ¬m tháº¥y káº¿t quáº£ tÆ°Æ¡ng á»©ng!",
    'text50': "KhÃ´ng tÃ¬m tháº¥y Ä‘Ã¡p Ã¡n thÃ­ch há»£p!",
    'text51': "\n(Auto Pass Mode - %v/%v bÃ i há»c má»›i!)",
    'text52': "[Target Mode] ÄÃ£ Ä‘áº¡t má»©c kinh nghiá»‡m má»¥c tiÃªu (%v / %v KN).\nAuto Ä‘Ã£ tá»± Ä‘á»™ng Ä‘Æ°á»£c táº¯t!!",
    'text53': "CÃ³ lá»—i xáº£y ra trong quÃ¡ trÃ¬nh Ä‘á»c truyá»‡n!",
    'text54': "KhÃ´ng tÃ¬m tháº¥y Ä‘Ã¡p Ã¡n!",
    'text55': "KhÃ´ng tÃ¬m tháº¥y tá»« phÃ¹ há»£p!",
    'text56': "Lá»—i tÃ¬m kiáº¿m react props",
    'text57': "Xáº£y ra lá»—i trong quÃ¡ trÃ¬nh táº£i dá»¯ liá»‡u thá»­ thÃ¡ch!",
    'text58': "Xáº£y ra lá»—i trong quÃ¡ trÃ¬nh get dá»¯ liá»‡u!",
    'text59': "Tá»± Ä‘á»™ng vÆ°á»£t bÃ i táº­p má»›i: %v / %v bÃ i há»c!",
    'text60': "+++++ HÆ¯á»šNG DáºªN +++++\n\n- Cáº§n cÃ³ key kÃ­ch hoáº¡t auto. Key lÃ  phÆ°Æ¡ng thá»©c duy nháº¥t giÃºp mÃ¬nh duy trÃ¬ vÃ  phÃ¡t triá»ƒn Auto-Duolingo, nÃªn mong cÃ¡c báº¡n thÃ´ng cáº£m vÃ  á»§ng há»™ mÃ¬nh, mÃ¬nh xin cáº£m Æ¡n ráº¥t nhiá»u!\n___________________________\n- Hiá»‡n táº¡i cÃ³ 2 cÃ¡ch Ä‘á»ƒ láº¥y key nhÆ° sau:\n+ Láº¥y Key 24h báº±ng cÃ¡ch vÆ°á»£t má»™t vÃ i liÃªn káº¿t cÃ³ chá»©a quáº£ng cÃ¡o (Chá»‰ há»— trá»£ Tiáº¿ng Viá»‡t).\n+ Mua Key VIP vá»›i thá»i háº¡n lÃ¢u dÃ i vÃ  á»•n Ä‘á»‹nh hÆ¡n (Äá»ƒ mua Key, vui lÃ²ng liÃªn há»‡ trá»±c tiáº¿p vá»›i Admin thÃ´ng qua cÃ¡c phÆ°Æ¡ng thá»©c liÃªn láº¡c phÃ­a cuá»‘i cÃ´ng cá»¥).\n___________________________\n- Tham gia cá»™ng Ä‘á»“ng AutoDuo Zalo hoáº·c AutoDuo Telegram Ä‘á»ƒ Ä‘Æ°á»£c há»— trá»£ vÃ  cáº­p nháº­t nhá»¯ng thÃ´ng tin má»›i nháº¥t!\n\nAuto-Duolingo By DevX!",
    'text61': "Auto sáº½ tiáº¿p tá»¥c sau:",
    'text62': "Cáº§n lÃ m má»›i trang Ä‘á»ƒ cáº­p nháº­t ngÃ´n ngá»¯, lÃ m má»›i ngay?",
    'text63': "KN má»¥c tiÃªu: ",
    'text64': "PHáº¢N Há»’I",
    'text65': " Náº¿u báº¡n Ä‘ang báº­t hiá»ƒn thá»‹ phiÃªn Ã¢m, vui lÃ²ng táº¯t nÃ³ trÆ°á»›c sau Ä‘Ã³ reload trang rá»“i báº­t láº¡i auto!",
    'text66': "Báº¡n cÃ³ muá»‘n auto káº¿t há»£p vÆ°á»£t cÃ¡c bÃ i táº­p huyá»n thoáº¡i khÃ´ng?\n\nLÆ¯U Ã:\n+ Auto vÆ°á»£t huyá»n thoáº¡i chá»‰ cÃ³ tÃ¡c dá»¥ng vá»›i cÃ¡c tÃ i khoáº£n cÃ³ trÃ¡i tim vÃ´ háº¡n! KHÃ”NG NÃŠN báº­t tÃ¹y chá»n nÃ y vá»›i cÃ¡c tÃ i khoáº£n khÃ´ng cÃ³ trÃ¡i tim vÃ´ háº¡n vÃ¬ nÃ³ cÃ³ thá»ƒ dáº«n Ä‘áº¿n viá»‡c bá»‹ máº¯c káº¹t khi auto.\n+ Há»‡ thá»‘ng sáº½ chá»‰ vÆ°á»£t cÃ¡c bÃ i huyá»n thoáº¡i trÆ°á»›c Ä‘Ã³ cÃ³ pháº¡m vi gáº§n vá»›i bÃ i há»c hiá»‡n táº¡i, náº¿u pháº¡m vi xa hÆ¡n sáº½ tá»± Ä‘á»™ng bá» qua!",
    'text67': "KhÃ´ng thá»ƒ xÃ¡c thá»±c do key Ä‘Ã£ nháº­n Ä‘á»§ sá»‘ IP cho phÃ©p!\nLÆ°u Ã½: Ä‘á»‘i vá»›i key 24h sáº½ chá»‰ há»— trá»£ 1 ip / key, vÃ¬ váº­y náº¿u Ä‘á»‹a chá»‰ ip cá»§a báº¡n bá»‹ thay Ä‘á»•i trong quÃ¡ trÃ¬nh sá»­ dá»¥ng (do thay Ä‘á»•i máº¡ng, sá»­ dá»¥ng VPN hoáº·c reset máº¡ng,...) sáº½ khÃ´ng thá»ƒ kÃ­ch hoáº¡t láº¡i ngay cáº£ khi key cÃ²n thá»i háº¡n.\n- Náº¿u ip cá»§a báº¡n thÆ°á»ng xuyÃªn bá»‹ thay Ä‘á»•i, hÃ£y xem xÃ©t sá»­ dá»¥ng dá»‹ch vá»¥ Key Vip dÃ i háº¡n Ä‘á»ƒ cÃ³ thá»ƒ sá»­ dá»¥ng lÃ¢u dÃ i vÃ  á»•n Ä‘á»‹nh hÆ¡n!",
    'text68': "Äáº·t vá»‹ trÃ­ Farm KN",
    'text69': "Äáº¶T Vá»Š TRÃ FARM KN\n- Máº·c Ä‘á»‹nh, há»‡ thá»‘ng chá»‰ cÃ³ thá»ƒ Farm KN táº¡i bÃ i luyá»‡n táº­p hoáº·c luyá»‡n nghe. Tuy nhiÃªn vá»›i tÃ­nh nÄƒng nÃ y, báº¡n cÃ³ thá»ƒ Farm KN táº¡i báº¥t cá»© bÃ i há»c nÃ o báº¡n muá»‘n, tháº­m chÃ­ cÃ³ thá»ƒ Farm KN táº¡i cáº£ cÃ¡c bÃ i há»c cÃ¢u chuyá»‡n!\n- CÃ¡ch sá»­ dá»¥ng: KÃ­ch hoáº¡t tÃ­nh nÄƒng vÃ  nháº­p vÃ o Ä‘Æ°á»ng dáº«n tá»›i bÃ i há»c báº¡n muá»‘n sau Ä‘Ã³ báº­t cháº¿ Ä‘á»™ Farm KN Ä‘á»ƒ báº¯t Ä‘áº§u farm.\n- LÆ¯U Ã: ÄÆ°á»ng dáº«n tá»›i bÃ i há»c pháº£i tháº­t chÃ­nh xÃ¡c vÃ  bÃ i há»c pháº£i cÃ³ thá»ƒ lÃ m Ä‘Æ°á»£c láº·p láº¡i. Náº¿u nháº­p Ä‘Æ°á»ng dáº«n khÃ´ng chÃ­nh xÃ¡c cÃ³ thá»ƒ dáº«n Ä‘áº¿n lá»—i hay tháº­m chÃ­ gÃ¢y rá»§i ro cho tÃ i khoáº£n cá»§a báº¡n!",
    'text70': "Báº±ng viá»‡c nháº­p vÃ o Ä‘Æ°á»ng dáº«n tá»›i bÃ i há»c báº¡n muá»‘n, há»‡ thá»‘ng sáº½ giÃºp báº¡n cÃ³ thá»ƒ Farm XP táº¡i bÃ i há»c Ä‘Ã³! LÆ°u Ã½, Ä‘Æ°á»ng dáº«n tá»›i bÃ i há»c pháº£i tháº­t chÃ­nh xÃ¡c náº¿u khÃ´ng cÃ³ thá»ƒ gÃ¢y ra lá»—i hay tháº­m chÃ­ gÃ¢y rá»§i ro cho tÃ i khoáº£n cá»§a báº¡n!\n\nNháº­p vÃ o Ä‘Æ°á»ng dáº«n tá»›i bÃ i há»c báº¡n muá»‘n:\n(VD: https://www.duolingo.com/practice)",
    'text71': "ÄÆ°á»ng dáº«n Ä‘Ã£ nháº­p khÃ´ng há»£p lá»‡, vui lÃ²ng thá»­ láº¡i!",
    'text72': "Auto Ä‘Ã£ tá»± Ä‘á»™ng dá»«ng láº¡i do khÃ´ng thá»ƒ Farm KN táº¡i vá»‹ trÃ­ Ä‘Ã£ chá»‰ Ä‘á»‹nh!",
    'text73': "Farm theo vá»‹ trÃ­",
    'text74': "CÃ i Ä‘áº·t khÃ¡c",
    'text75': "ÄÃ³ng",
    'text76': "Cháº¿ Ä‘á»™ tá»‘i",
    'text77': "CHáº¾ Äá»˜ Tá»I\n- Báº­t / táº¯t cháº¿ Ä‘á»™ tá»‘i cá»§a trang web nhanh hÆ¡n!",
    'text78': "Tá»± Ä‘á»™ng láº¥y x2 KN",
    'text79': "Tá»° Äá»˜NG Láº¤Y X2 KN:\n- ÄÃ¢y lÃ  tÃ­nh nÄƒng bá»• trá»£ cho \"Auto Farm KN\", giÃºp duy trÃ¬ tráº¡ng thÃ¡i x2 KN trong quÃ¡ trÃ¬nh Farm. Khi Ä‘Æ°á»£c báº­t, nÃ³ sáº½ kiá»ƒm tra vÃ  tá»± Ä‘á»™ng lÃ m cÃ¡c bÃ i há»c má»›i Ä‘á»ƒ láº¥y pháº§n thÆ°á»Ÿng x2 KN náº¿u phÃ¡t hiá»‡n tráº¡ng thÃ¡i hiá»‡n táº¡i khÃ´ng cÃ³ x2. Äiá»u nÃ y sáº½ giÃºp báº¡n Farm Ä‘Æ°á»£c nhiá»u Ä‘iá»ƒm KN hÆ¡n so vá»›i thÃ´ng thÆ°á»ng. \n\n- LÆ¯U Ã:  TÃ­nh nÄƒng nÃ y sáº½ lÃ m cÃ¡c bÃ i há»c má»›i Ä‘á»ƒ duy trÃ¬ tráº¡ng thÃ¡i x2, vÃ¬ váº­y hÃ£y cÃ¢n nháº¯c trÆ°á»›c khi báº­t nÃ³ náº¿u báº¡n cÃ³ rÃ ng buá»™c vá»›i nhá»¯ng bÃ i há»c nÃ y!",
    'text80': "Auto-Duolingo Ä‘ang tá»± Ä‘á»™ng láº¥y x2 KN...",
    'text81': "KhÃ´ng thá»ƒ truy cáº­p tÃ­nh nÄƒng nÃ y khi \"%v\" Ä‘ang báº­t. Äá»ƒ sá»­ dá»¥ng, hÃ£y táº¯t tÃ­nh nÄƒng \"%v\" trÆ°á»›c!",
    'text82': "[WARNING] TÃ­nh nÄƒng tá»± Ä‘á»™ng láº¥y x2 KN Ä‘ang lÃ m viá»‡c, náº¿u táº¯t auto bÃ¢y giá» Ä‘á»“ng nghÄ©a vá»›i viá»‡c báº¡n sáº½ há»§y toÃ n bá»™ quÃ¡ trÃ¬nh nÃ y! Báº¡n cÃ³ cháº¯c cháº¯n chá»©?",
    'text83': "Tá»± Ä‘á»™ng láº¥y x2 Ä‘Ã£ táº¯t do khÃ´ng tÃ¬m tháº¥y bÃ i há»c má»›i nÃ o!"
  };
  let _0x56310b = {
    'text1': "Enter Key Here...",
    'text2': "ENTER KEY",
    'text3': "GUIDE",
    'text4': "GET KEY LINK",
    'text5': "GUIDE TO GET KEY",
    'text6': "BUY LONG-TERM VIP KEY",
    'text7': "DevX Said: Invalid or expired key, please try again!",
    'text8': "The current key has expired, please obtain a new key to continue using the auto feature!",
    'text9': "An error occurred during authentication, please try again later!",
    'text10': "Invalid data error!",
    'text11': "Indefinitely",
    'text12': "Basic key",
    'text13': "Type: ",
    'text14': "EXP: ",
    'text15': "View information",
    'text16': "Hide Animation",
    'text17': "- HIDE ANIMATION MODE:\nWhen this mode is enabled, images and animations on the website will be hidden to optimize performance.",
    'text18': "Safe Mode",
    'text19': "- SAFE MODE:\nWhen this mode is enabled, the system will simulate user actions when using auto. The speed will be more relaxed, in exchange for the completion time of lessons and the amount of experience will be the most natural, minimizing the risks of REPORT and account BAN!",
    'text20': "Turbo Mode",
    'text21': "- TURBO MODE:\nWhen enabled, the system will significantly boost the auto speed. It will utilize higher performance and is not recommended for use on low-performance devices.\nTurn it off and refresh the page if you encounter issues while activating this mode!\n\nNote: This is an experimental feature and requires a VIP Key to use. Only enable it when you truly require speed and understand its implications!!",
    'text22': "I'm sorry, this feature is only available for VIP Key users. Please contact the ADMIN for more details!",
    'text23': "Lesson Pass Mode",
    'text24': "- LESSON PASS MODE:\nWhen activated, the system won't repeat exercises as in the regular mode but will engage in exercises actively selected by the user. This mode is used for legendary exercises, story exercises, and most other similar exercises. You need to enter the lesson you want to pass in, and then the system will automatically complete that lesson for you!\nWhen this mode is activated, the basic auto button will be temporarily disabled.",
    'text25': "XP Target Mode",
    'text26': "- EXPERIENCE POINT TARGET MODE:\nBy setting an experience point target, the system will automatically stop auto mode when the total experience points obtained equal or exceed the specified target.\nThis helps you better control the auto function, preventing unintentional accumulation of excess experience points due to forgetting to turn off auto mode!\n\n- Note: The experience point target must be greater than the current amount of experience points obtained through auto mode!",
    'text27': "Are you sure you want to cancel the current target?",
    'text28': "By setting an experience point target, the system will automatically stop auto mode when the total experience points obtained equal or exceed the specified target.\n# Note: The target XP must be greater than the current obtained XP!\n\nEnter the target experience points you wish for:",
    'text29': "Invalid value, please try again!",
    'text30': "The target XP must be greater than the current auto XP (%v), please try again!",
    'text31': "The value is too large, please try again!",
    'text32': "Auto Pass Mode",
    'text33': "- AUTO PASS MODE:\nBy setting the number of lessons you wish to pass, the system will automatically pass the corresponding number of new lessons as per the value you've set!\n\n- Note: the lesson value should be within the range of 1 - 1000 (Enter 0 for unlimited auto)!",
    'text34': "Are you sure you want to stop the auto?",
    'text35': "By setting the number of lessons you wish to pass, the system will automatically pass the corresponding number of new lessons as per the value you've set! (Enter 0 for unlimited auto)\n\nEnter the number of lessons you wish to pass (1 - 1000):",
    'text36': "START FARM XP",
    'text37': "STOP FARM XP",
    'text38': "DROP KEY",
    'text39': "Are you sure you want to remove the current Key? (After removal, the page will automatically refresh to update)",
    'text40': "After enabling, the auto speed will be very fast; however, it will consume more device performance (not recommended for low-performance devices). Are you sure you want to activate this mode?",
    'text41': "[Auto Pass Mode] %v new lessons have been completed.\nAuto has automatically stopped!",
    'text42': "Inappropriate location: Only enable auto when on the home page or practice page (with the dumbbell icon) of Duolingo Super!\n- If you want to Farm XP at a specific lesson, please enable the 'Set XP Farm Location' feature in the tool's settings!\n- Enabling auto on the homepage will automatically farm practice exercises (10 XP), while enabling auto on Duolingo Super's practice page will automatically farm listening exercises (20 XP).\n- If you wish to auto complete legendary exercises or unlock other exercises, please enable the Lesson Pass Mode.",
    'text43': '',
    'text44': "[Auto Pass Mode] You have completed all exercises in this course!!",
    'text45': "Undefined challenge!!",
    'text46': "This exercise is currently not supported. Please report this issue to the Admin or temporarily work on this exercise manually before re-enabling auto! [%v]",
    'text47': "Lesson data not found.",
    'text48': "No suitable option found.",
    'text49': "No corresponding result found!",
    'text50': "No suitable answer found!",
    'text51': "\n(Auto Pass Mode - %v/%v new lessons!)",
    'text52': "[Target Mode] Achieved target experience level (%v / %v XP).\nAuto has been automatically turned off!",
    'text53': "An error occurred while reading the story!",
    'text54': "No answer found!",
    'text55': "No matching word found!",
    'text56': "There is an error when finding the react props",
    'text57': "There was an error while loading challenge data!",
    'text58': "There was an error while getting the data!",
    'text59': "Auto pass new exercises: %v / %v lessons!",
    'text60': "+++++ GUIDE +++++\n\n- An activation key is required for auto functionality! This key is the sole method to maintain and develop AutoDuolingo, so I hope for your understanding and support. Thank you very much!\n___________________________\n- Currently, there are two methods to obtain the key as follows:\n+ Obtain the 24-hour key by surpassing a few links containing advertisements (Vietnamese support only).\n+ Buy a long-term and more stable VIP Key. (To buy a Key, please directly contact the Admin through the contact methods at the end of the tool).\n___________________________\n- Join the AutoDuo Zalo or AutoDuo Telegram community for support and updates on the latest information!\n\nAuto-Duolingo By DevX!",
    'text61': "Auto will continue in:",
    'text62': "Need to refresh the page to update the language, refresh now?",
    'text63': "XP Target: ",
    'text64': 'FEEDBACK',
    'text65': " If you are currently displaying the pronunciation guide, please turn it off first, then reload the page, and finally turn on auto again!",
    'text66': "Do you want to automatically pass combined legendary exercises?\n\nNOTE:\n+ The auto pass for legendary exercises only works with accounts that have unlimited hearts! DO NOT enable this option for accounts without unlimited hearts as it may lead to getting stuck during auto pass.\n+ The system will only pass previously combined legendary exercises within a close scope to the current lesson; it will automatically skip further ones!",
    'text67': "Authentication failed because the key has reached the maximum allowed number of IP!\nNote: For the 24-hour key, only one IP address is supported per key. Therefore, if your IP address changes during usage (due to network changes, VPN usage, or network resets, etc.), reactivation will not be possible even if the key is still valid.\n- If your IP address frequently changes, consider using a long-term Key Vip service for more stable and long-lasting usage!",
    'text68': "Set XP Farm Location",
    'text69': "SET XP FARM LOCATION\n- By default, the system can only Farm XP in practice exercises or listening practices. However, with this feature, you can Farm XP in any lesson you want, even in story lessons!\n- Usage: Activate the feature and enter the URL of the lesson you want, then enable the XP Farm mode to start farming.\n- NOTE: The URL to the lesson must be accurate and the lesson must be repeatable. Entering an inaccurate URL may lead to errors or even pose risks to your account!",
    'text70': "By entering the URL of the lesson you want, the system will help you Farm XP in that lesson! Please note that the URL to the lesson must be accurate to avoid errors or potential risks to your account!\n\nEnter the URL of the lesson you want:\n(Example: https://www.duolingo.com/practice)",
    'text71': "The entered URL is invalid, please try again!",
    'text72': "The automation has stopped because it couldn't Farm XP at the designated location!",
    'text73': "Farming at the location",
    'text74': "Other settings",
    'text75': "Close",
    'text76': "Dark Mode",
    'text77': "DARK MODE\n- Enable/disable website dark mode faster!",
    'text78': "Auto Collect 2x XP",
    'text79': "AUTO COLLECT 2x XP:\n- This is a supplementary feature for \"Auto Farm XP\", helping to maintain the 2x XP status during farming. When enabled, it will check and automatically do new lessons to get 2x XP rewards if it detects the current state doesn't have 2x. This will help you farm more XP points than usual. \n\n- NOTE: This feature will do new lessons to maintain the 2x status, so consider before enabling it if you have constraints with these lessons.",
    'text80': "Auto-Duolingo is automatically collecting 2x XP...",
    'text81': "You can't access this feature while \"%v\" is enabled.To use this, please turn off the \"%v\" feature first!",
    'text82': "[WARNING] The auto collect 2x XP feature is working. Turning off auto now will cancel this process. Are you sure?",
    'text83': "The automatic 2x XP has been turned off because no new lessons were found!"
  };
  let _0x2b3d50 = {
    ..._0x56310b,
    'setLanguage': function (_0x4b3752) {
      let _0x25dd75;
      if ('vi' === _0x4b3752) {
        _0x25dd75 = _0x3e6885;
        Object.assign(_0x2b3d50, _0x25dd75);
      }
    }
  };
  function _0x424dc6(_0x26361f, ..._0x374c14) {
    if (0x0 === _0x374c14.length) {
      return _0x2b3d50[_0x26361f];
    }
    let _0x25b265 = _0x2b3d50[_0x26361f].replace(/%v/g, () => _0x374c14.shift());
    return _0x25b265;
  }
  function _0x34fada(_0x2f4226) {
    let _0x1907bd = String(parseInt(_0x2f4226 / 0x3e8 / 0x3c / 0x3c));
    let _0x1c6e37 = String(parseInt(_0x2f4226 / 0x3e8 / 0x3c % 0x3c));
    return _0x1907bd.padStart(0x2, '0') + 'h:' + _0x1c6e37.padStart(0x2, '0') + 'm';
  }
  function _0x5e5441(_0x152a46) {
    if (_0x152a46.getTime() >= 0x1b8dac5b400) {
      return _0x424dc6("text11");
    }
    let _0x486c1b = String(_0x152a46.getDate()).padStart(0x2, '0');
    let _0x42b39d = String(_0x152a46.getMonth() + 0x1).padStart(0x2, '0');
    let _0x24388c = _0x152a46.getFullYear();
    let _0x1d503a = String(_0x152a46.getHours()).padStart(0x2, '0');
    let _0x108731 = String(_0x152a46.getMinutes()).padStart(0x2, '0');
    return _0x486c1b + '/' + _0x42b39d + '/' + _0x24388c + " - " + _0x1d503a + ':' + _0x108731 + " <span>(GMT+7)</span>";
  }
  let _0x410634 = document.querySelector.bind(document);
  let _0x4181bd = document.querySelectorAll.bind(document);
  let _0x3d2e46 = document.createElement('iframe');
  _0x3d2e46.style.display = 'none';
  document.body.appendChild(_0x3d2e46);
  let _0x4a7f69 = _0x3d2e46.contentWindow.console.log;
  window.log = _0x4a7f69;
  function _0x139a94() {
    let _0x1fd4a2 = sessionStorage.getItem("autoDuolingoStorage") || '{}';
    try {
      return JSON.parse(_0x1fd4a2);
    } catch (_0x417402) {
      return {};
    }
  }
  function _0x5f0d10(_0xaa6e80, _0x15d2fd) {
    let _0x5bfc55 = _0x139a94();
    if (_0xaa6e80 instanceof Object) {
      Object.assign(_0x5bfc55, _0xaa6e80);
    } else {
      _0x5bfc55[_0xaa6e80] = _0x15d2fd;
    }
    sessionStorage.setItem("autoDuolingoStorage", JSON.stringify(_0x5bfc55));
  }
  function _0x3207ea() {
    sessionStorage.removeItem("autoDuolingoStorage");
  }
  function _0x33ff2b() {
    let _0x4158a3 = localStorage.getItem("autoDuolingoStorage") || '{}';
    try {
      return JSON.parse(_0x4158a3);
    } catch (_0x4b3691) {
      return {};
    }
  }
  function _0x3b3b34(_0x37077f, _0x120086) {
    let _0x2e4903 = _0x33ff2b();
    _0x2e4903[_0x37077f] = _0x120086;
    localStorage.setItem("autoDuolingoStorage", JSON.stringify(_0x2e4903));
  }
  function _0x54ae07(_0x4b4398) {
    let _0x5e8e3f = _0x33ff2b();
    return _0x5e8e3f[_0x4b4398];
  }
  let _0x5f0323 = new _0x19ea1f();
  _0x5f0323.setup();
})();
