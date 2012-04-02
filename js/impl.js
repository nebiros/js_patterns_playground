$(function () {
  Mod.setOptions();
  Mod.doSomething();
  Mod.attach();
  console.log(Mod);

  var p = new Prot();
  console.log(p);
  p.doSomething().attach();
});

var Mod = (function (parent, $) {
  var module = {}
    , defaults = {
      a: "a",
      b: "b",
      ajax: {
        formSelector: "#module_test_form",
        success: success
      }
    }
    , options = {};

  function setOptions(o) {
    if (typeof o === "undefined") o = {};
    parent.setOptions($.extend(true, {}, defaults, o));
    options = parent.getOptions();
  }

  function getOptions() {
    return options;
  }

  function doIt() {
    console.log("Mod#doIt");
  }

  function success(responseText, statusText, xhr, $form) {
    // call original function.
    parent.success(responseText, statusText, xhr, $form);
    // do some other stuff.
    console.log("Mod#success", this, parent.getForm(), options, responseText, statusText, xhr, $form);
    // display response from the server.
    var a = [];
    for (k in responseText) {
      if (responseText.hasOwnProperty(k)) a.push(k + " => " + responseText[k]);
    }
    $("#module_output").html(a.join("<br />"));
  }

  module.setOptions = setOptions;
  module.getOptions = getOptions;
  module.doIt = doIt;

  return $.extend(true, {}, parent, module);
}(App.Module, window.jQuery));

var Prot = (function (Parent, $) {
  function Prot(o) {
    var defaults = {
      ma: "ma",
      mb: "mb",
      ajax: {
        formSelector: "#proto_test_form",
        // http://api.jquery.com/jQuery.proxy/
        // proxy methods using jQuery, to not lose the scope of this class.
        success: $.proxy(this.success, this)
      }
    };

    if (typeof o === "undefined") o = {};
    // call parent constructor.
    this.parent.call(this, $.extend(true, {}, defaults, o));
    // return same object, chaining purposes.
    return this;
  }

  Prot.prototype.constructor = Prot;
  // add Parent class to this prototype chain.
  App.Util.inherits(Prot, Parent);

  Prot.prototype.doIt = function () {
    console.log("Prot#doIt");
    return this;
  };

  Prot.prototype.success = function (responseText, statusText, xhr, $form) {
    // "this" referer our current class instance.

    // call parent method.
    this.parent.prototype.success.call(this, responseText, statusText, xhr, $form);
    // do some other stuff.
    console.log("Prot#success", this, this.$form, this.options, responseText, statusText, xhr, $form);
    // display response from the server.
    var a = [];
    for (k in responseText) {
      if (responseText.hasOwnProperty(k)) a.push(k + " => " + responseText[k]);
    }
    $("#proto_output").html(a.join("<br />"));
  };

  return Prot;
}(App.Proto, window.jQuery));
