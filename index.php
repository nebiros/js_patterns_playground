<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>js_patterns</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">js_patterns playground</a>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
          <div class="well">
            <h1>js_patterns playground</h1>
            <p><ul>
              <li>module pattern</li>
              <li>prototypal inheritance</li>
            </ul></p>
          </div>
          <div class="row-fluid">
            <div id="module_test">
              <form id="module_test_form" name="module_test_form" action="test.php" method="post" class="well">
                <fieldset>
                  <legend>module form test</legend>
                  <label for="module_test_form_text">text:</label>
                  <input type="text" id="module_test_form_text" name="test_form[text]" />
                  <p>
                    <input type="submit" name="send" value="send" class="btn btn-primary" />
                  </p>
                </fieldset>
              </form>
              <p id="module_output" class="well"></p>
            </div>
          </div>
          <div class="row-fluid">
            <div id="proto_test">
              <form id="proto_test_form" name="proto_test_form" action="test.php" method="post" class="well">
                <fieldset>
                  <legend>prototypal inheritance form test</legend>
                  <label for="proto_test_form_text">text:</label>
                  <input type="text" id="proto_test_form_text" name="test_form[text]" />
                  <p>
                    <input type="submit" name="send" value="send" class="btn btn-primary" />
                  </p>
                </fieldset>
              </form>
              <p id="proto_output" class="well"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="http://malsup.github.com/jquery.form.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/impl.js"></script>
  </body>
</html>
