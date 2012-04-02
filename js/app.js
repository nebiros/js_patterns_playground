var App = App || {};

App.Util = (function ($) {
  var module = {};

  function inherits(Child, Parent) {
    function I(){};
    I.prototype = Parent.prototype;
    Child.prototype = new I;
    Child.prototype.constructor = Child;
    Child.prototype.parent = Parent;
  }

  module.inherits = inherits;

  return module;
}(window.jQuery));

App.Module = (function ($) {
  var module = {}
    , defaults = {
      ma: "ma",
      mb: "mb",
      ajax: {
        dataType: "json",
        formSelector: null,
        success: success
      }
    }
    , options = {}
    , $form = undefined;

  function setOptions(o) {
    if (typeof o === "undefined") o = {};
    options = $.extend(true, {}, defaults, o);
    $form = (options.ajax.formSelector) ? $(options.ajax.formSelector) : $("form:first");
  }

  function getOptions() {
    return options;
  }

  function getForm() {
    return $form;
  }

  function doSomething() {
    console.log("App.Module#doSomething", options);
  }

  function doOver() {
    console.log("App.Module#doOver", options);
  }

  function success(responseText, statusText, xhr, $form) {
    console.log("App.Module#success", this, options, responseText, statusText, xhr, $form);
  }

  function attach() {
    $form.submit(function() {
      $form.ajaxSubmit(options.ajax);
      // always return false to prevent standard browser submit and page navigation.
      return false;
    });
  }

  module.setOptions = setOptions;
  module.getOptions = getOptions;
  module.getForm = getForm;
  module.$form = $form;
  module.options = options;
  module.doSomething = doSomething;
  module.doOver = doOver;
  module.success = success;
  module.attach = attach;

  return module;
}(window.jQuery));

App.Proto = (function ($) {
  function Proto(o) {
    var defaults = {
      ma: "ma",
      mb: "mb",
      ajax: {
        dataType: "json",
        formSelector: null,
        success: this.success
      }
    };

    if (typeof o === "undefined") o = {};
    this.options = $.extend(true, {}, defaults, o);
    this.$form = (this.options.ajax.formSelector) ? $(this.options.ajax.formSelector) : $("form:first");
    return this;
  }

  Proto.prototype.constructor = Proto;

  Proto.prototype.doSomething = function () {
    console.log("App.Proto#doSomething");
    return this;
  };

  Proto.prototype.doOver = function () {
    console.log("App.Proto#doOver");
    return this;
  };

  Proto.prototype.success = function (responseText, statusText, xhr, $form) {
    console.log("App.Proto#success", this, this.options, responseText, statusText, xhr, $form);
  };

  Proto.prototype.attach = function () {
    // to not lose the scope of the current class.
    var self = this;

    this.$form.submit(function() {
      $(this).ajaxSubmit(self.options.ajax);
      // always return false to prevent standard browser submit and page navigation.
      return false;
    });

    return this;
  };

  return Proto;
}(window.jQuery));
