var add_ele = `
      <div id="aman_box">
        <div id="aman_hnt">  
            <div id="aman_header_container">
                <div id="aman_header">
                    <div id="aman_title_box">    
                        <p id="aman_title">Amaditor</p>
                        <p id="aman_subtitle">(BETA)</p>
                    </div>
                    <div>
                        <button id="modify_temp_btn" title="Update Template">📒</button>
                        <button id="add_temp_btn" title="Write Template">✍🏻</button>
                        <button id="clear_btn" title="Clear">⚓</button>
                        <button id="send_username_btn" title="Last Submitted">🔖</button> 
                    </div>
                </div>
            </div>
        </div>

        
        <iframe id="aman_editor" src="https://amansaxena1.github.io/codeforces_extension/" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" frameborder="0"></iframe>  
        <div id="aman_button_container">
         <div id="aman_button_box">
          <button id="aman_run_btn">Run</button>
          <button id="aman_submit_btn">Submit</button>
          </div>
        </div>
      <div>`;
var parent = document.getElementById("pageContent");
var change = document.getElementsByClassName("diff-notifier");
change.innerHTML = "";
parent.innerHTML = parent.innerHTML + add_ele;
document.getElementById("aman_box").style.overflow = "hidden";
document.getElementById("aman_editor").style.height = "808px";
// document.getElementById("aman_editor").style.borderStyle = "solid";
// document.getElementById("aman_editor").style.borderWidth = ".5px";
// document.getElementById("aman_editor").style.borderColor = "#484848";
// document.getElementById("aman_frameset").style.padding = "0px";

document.getElementById("aman_header_container").style.padding = "7px";
document.getElementById("aman_header_container").style.paddingTop = "0px";
document.getElementById("aman_header_container").style.paddingBottom = "0px";

document.getElementById("aman_title_box").style.display = "flex";
document.getElementById("aman_title_box").style.flexDirection = "row";
document.getElementById("aman_subtitle").style.fontSize = "8px";
document.getElementById("aman_subtitle").style.fontWeight = "Bold";

// document.getElementById("aman_box").style.padding = "6px";
document.getElementById("aman_box").style.paddingTop = "0px";
document.getElementById("aman_box").style.paddingBottom = "0px";
// document.getElementById("aman_box").style.backgroundColor = "#ff0000";

document.getElementById("aman_box").style.borderStyle = "solid";
document.getElementById("aman_box").style.borderWidth = "0.5px";
document.getElementById("aman_box").style.borderColor = "#484848";

document.getElementById("aman_title").style.fontSize = "18px";
document.getElementById("aman_title").style.fontWeight = "bold";

// document.getElementById("aman_header").style.paddingLeft = "8px";
// document.getElementById("aman_header").style.paddingRight = "8px";
document.getElementById("aman_header").style.paddingTop = "4px";
document.getElementById("aman_header").style.paddingBottom = "0px";
document.getElementById("aman_header").style.display = "flex";
document.getElementById("aman_header").style.flexDirection = "row";
document.getElementById("aman_header").style.justifyContent = "space-between";

// document.getElementById("aman_template_box").style.display = "flex";
// document.getElementById("aman_template_box").style.mar = "center";

// document.getElementById("send_username_btn").style.backgroundColor = "#484848";
// document.getElementById("send_username_btn").style.borderRadius = "3px";
// document.getElementById("send_username_btn").style.borderColor = "#484848";

// document.getElementById("aman_header").style.borderStyle = "solid";
// document.getElementById("aman_header").style.borderWidth = "0.5px";
// document.getElementById("aman_header").style.borderColor = "#484848";
// document.getElementById("aman_header").style.borderBottom = "none";

// // parent.innerHTML = parent.innerHTML + customInput;
// // document.getElementById("aman_io_box").style.padding = "1%";
// document.getElementById("aman_input_title").style.marginTop = "10px";
// document.getElementById("aman_input_title").style.fontWeight = "bold";
// document.getElementById("aman_input").style.width = "99.4%";
// document.getElementById("aman_input").style.height = "100px";
// document.getElementById("aman_input").style.backgroundColor = "#efefef";
// document.getElementById("aman_input").style.outline = "none";

// document.getElementById("aman_output_box").style.marginTop = "10px";
// document.getElementById("aman_output_box").style.marginRight = "3px";

// document.getElementById("aman_output_box").style.display = "flex";
// document.getElementById("aman_output_box").style.flexDirection = "row";
// document.getElementById("aman_output_box").style.justifyContent =
//   "space-between";

// // document.getElementById("aman_output_box").style.marginRight = "10px";
// document.getElementById("aman_user_output").style.minWidth = "48.5%";
// document.getElementById("aman_output_text").style.backgroundColor = "#efefef";
// document.getElementById("aman_output_text").style.width = "100%";
// document.getElementById("aman_output_text").style.outline = "none";
// document.getElementById("aman_output_text").style.height = "100px";
// document.getElementById("aman_user_output_heading").style.fontWeight = "bold";

// document.getElementById("aman_expected_output").style.minWidth = "48.5%";
// document.getElementById("aman_expected_output_text").style.borderStyle =
//   "solid";
// document.getElementById("aman_expected_output_text").style.backgroundColor =
//   "#efefef";
// document.getElementById("aman_expected_output_text").style.width = "100%";
// document.getElementById("aman_expected_output_text").style.outline = "none";
// document.getElementById("aman_expected_output_text").style.height = "100px";
// document.getElementById("aman_expected_output_heading").style.fontWeight =
//   "bold";

document.getElementById("aman_button_container").style.display = "flex";
document.getElementById("aman_button_container").style.justifyContent =
  "flex-end";
document.getElementById("aman_button_container").style.paddingLeft = "7px";
document.getElementById("aman_button_container").style.paddingRight = "7px";
document.getElementById("aman_button_container").style.paddingBottom = "7px";

document.getElementById("aman_button_box").style.display = "flex";
document.getElementById("aman_button_box").style.flexDirection = "row";
// document.getElementById("aman_button_box").style.marginBottom = "8px";
// document.getElementById("aman_run_btn").style.marginBottom = "6px";
document.getElementById("aman_run_btn").style.marginRight = "5px";
// document.getElementById("aman_submit_btn").style.marginBottom = "3px";

var aman_url = "";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({
    response: sender.tab.url,
  });
});

window.onload = function () {
  chrome.runtime.sendMessage(
    {
      method: "postList",
      post_list: "ThePostList",
    },
    function (response) {
      aman_url = response.response;
      // alert(aman_url);
    }
  );
};

document.getElementById("clear_btn").onclick = async function (event) {
  document
    .getElementById("aman_editor")
    .contentWindow.postMessage("aman_clear_editor", "*");
};

document.getElementById("send_username_btn").onclick = async function (event) {
  var username = document.getElementsByTagName("a");
  for (var i = 0; i < username.length; i++) {
    if (username[i].href.includes("/profile/")) {
      document
        .getElementById("aman_editor")
        .contentWindow.postMessage(
          "last_submission/" + aman_url + "/" + username[i].innerHTML,
          "*"
        );
      break;
    }
  }
};
document.getElementById("add_temp_btn").onclick = async function (event) {
  var username = document.getElementsByTagName("a");
  for (var i = 0; i < username.length; i++) {
    if (username[i].href.includes("/profile/")) {
      document
        .getElementById("aman_editor")
        .contentWindow.postMessage(
          "add_template/" + username[i].innerHTML,
          "*"
        );
      break;
    }
  }
};
var a = false;
document.getElementById("modify_temp_btn").onclick = async function (event) {
  if (!a) {
    document.getElementById("aman_editor").style.width = "102%";
    document.getElementById("aman_header").style.marginBottom = "4px";
  } else {
    document.getElementById("aman_editor").style.width = "100%";
    document.getElementById("aman_header").style.marginBottom = "0px";
  }
  a = !a;
  var found = false;
  var username = document.getElementsByTagName("a");
  for (var i = 0; i < username.length; i++) {
    if (username[i].href.includes("/profile/")) {
      found = true;
      document
        .getElementById("aman_editor")
        .contentWindow.postMessage(
          "modify_temp_btn/" + username[i].innerHTML,
          "*"
        );
      window.addEventListener("message", (event) => {
        const { data } = event;
        a = false;
        document.getElementById("aman_editor").style.width = "100%";
        document.getElementById("aman_header").style.marginBottom = "0px";
      });
      break;
    }
  }
  if (!found) {
    alert("No user found");
  }

  // ============================================

  //   var temp_code = `<div id="aman_temp_box">
  //                 <textarea id="aman_temp"></textarea>
  //                 <div id="aman_temp_btn_box">
  //                     <button id="aman_temp_cancel" title="Cancel">Cancel</button>
  //                     <button id="aman_temp_save" title="Run">Save</button>
  //                 </div>
  //             </div>`;

  //==============================================
};

document.getElementById("aman_run_btn").onclick = async function (event) {
  //   var user_code = encodeURIComponent(ace.edit("aman_editor").getValue());
  //   console.log(user_code);
  //   console.log(decodeURIComponent(user_code));

  //   var user_input = encodeURIComponent(
  //     document.getElementById("aman_input").value
  //   );

  //   var aman_contest_id = encodeURIComponent(myArray[myArray.length - 2]);
  //   var aman_index = encodeURIComponent(myArray[myArray.length - 1]);
  //   const myArray = aman_url.split("/");
  //   var aman_contest_id = myArray[myArray.length - 2];
  //   var aman_index = myArray[myArray.length - 1];

  //   var message = aman_contest_id + "_" + aman_index;

  document
    .getElementById("aman_editor")
    .contentWindow.postMessage(aman_url, "*");

  // window.postMessage(message, "*");

  // window.onmessage = function (e) {
  //   if (e.data !== "") {
  //     alert(e.data);
  //   }
  // };

  // console.log(
  //   "https://codeforces-questions.herokuapp.com/?contest=" +
  //     aman_contest_id +
  //     "&index=" +
  //     aman_index +
  //     "&input=" +
  //     user_input +
  //     "&code=" +
  //     user_code
  // );
  // await fetch(
  //   "https://codeforces-questions.herokuapp.com/?contest=" +
  //     aman_contest_id +
  //     "&index=" +
  //     aman_index +
  //     "&input=" +
  //     user_input +
  //     "&code=" +
  //     user_code
  // )
  //   .then((res) => res.json())
  //   .then((d) => {
  //     document.getElementById("aman_output_text").disabled = false;
  //     document.getElementById("aman_expected_output_text").disabled = false;
  //     document.getElementById("aman_output_text").value = d.your_output;
  //     document.getElementById("aman_expected_output_text").value =
  //       d.expected_output;
  //     document.getElementById("aman_output_text").disabled = true;
  //     document.getElementById("aman_expected_output_text").disabled = true;
  //     // console.log(d);
  //   });

  // console.log("check01");
};

document.getElementById("aman_submit_btn").onclick = async function (e) {
  var submit_code_window = `<div id="amanparse"><html lang="en"><head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="X-Csrf-Token" content="8beb62afc8d3bb42c0eae0a34f1913d5">
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=0.01">


    <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script><script type="text/javascript" src="//codeforces.org/s/0/js/jquery-1.8.3.js"></script>
    <script type="application/javascript">
        window.standaloneContest = false;
        function adjustViewport() {
            var screenWidthPx = Math.min($(window).width(), window.screen.width);
            var siteWidthPx = 1100; // min width of site
            var ratio = Math.min(screenWidthPx / siteWidthPx, 1.0);
            var viewport = "width=device-width, initial-scale=" + ratio;
            $('#viewport').attr('content', viewport);
            var style = $('<style>html * { max-height: 1000000px; }</style>');
            $('html > head').append(style);
        }

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            adjustViewport();
        }

        /* Protection against trailing dot in domain. */
        let hostLength = window.location.host.length;
        if (hostLength > 1 && window.location.host[hostLength - 1] === '.') {
            window.location = window.location.protocol + "//" + window.location.host.substring(0, hostLength - 1);
        }
    </script>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="expires" content="-1">
    <meta http-equiv="profileName" content="j1">
    <meta name="google-site-verification" content="OTd2dN5x4nS4OPknPI9JFg36fKxjqY0i1PSfFPv_J90">
    <meta property="fb:admins" content="100001352546622">
    <meta property="og:image" content="//codeforces.org/s/0/images/codeforces-telegram-square.png">
    <link rel="image_src" href="//codeforces.org/s/0/images/codeforces-telegram-square.png">
    <meta property="og:title" content="Submit - Codeforces">
    <meta property="og:description" content="">
    
    <meta property="og:site_name" content="Codeforces">
    <meta name="uc" content="29b4ea299e88dfeb55e3640c79f8f4f176bbf12f">
    <meta name="usmc" content="f31e07d2084b3baf861d42231b7a687c59edba90">
    <meta name="gc" content="7bf17394dc32cc2d4d6234197d8d58178ed01ff7">
    
    
    
    <meta name="utc_offset" content="+03:00">
    <meta name="verify-reformal" content="f56f99fd7e087fb6ccb48ef2">
    <title>Submit - Codeforces</title>
        <meta name="description" content="Codeforces. Programming competitions and contests, programming community">
        <meta name="keywords" content="programming algorithm contest competition informatics olympiads c++ java graphs vkcup">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="//codeforces.org/s/23975/css/font-awesome.min.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/line-awesome.min.css" type="text/css" charset="utf-8">

        <link href="//fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
        <link href="//fonts.googleapis.com/css?family=Cuprum&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">


    <link rel="apple-touch-icon" sizes="57x57" href="//codeforces.org/s/0/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="//codeforces.org/s/0/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="//codeforces.org/s/0/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="//codeforces.org/s/0/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="//codeforces.org/s/0/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="//codeforces.org/s/0/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="//codeforces.org/s/0/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="//codeforces.org/s/0/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="//codeforces.org/s/0/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="//codeforces.org/s/0/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="//codeforces.org/s/0/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="//codeforces.org/s/0/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="//codeforces.org/s/0/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="//codeforces.org/s/0/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!--CombineResourcesFilter-->
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/prettify.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/clear.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/style.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/ttypography.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/problem-statement.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/second-level-menu.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/roundbox.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/datatable.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/table-form.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/topic.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/jquery.jgrowl.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/facebox.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/jquery.wysiwyg.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/jquery.autocomplete.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/codeforces.datepick.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/colorbox.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/css/jquery.drafts.css" type="text/css" charset="utf-8">
        <link rel="stylesheet" href="//codeforces.org/s/23975/css/community.css" type="text/css" charset="utf-8">

    <!-- MathJax -->
    <script type="text/x-mathjax-config;executed=true">
    MathJax.Hub.Config({
      tex2jax: {inlineMath: [['$$$','$$$']], displayMath: [['$$$$$$','$$$$$$']]}
    });
    MathJax.Hub.Register.StartupHook("End", function () {
        Codeforces.runMathJaxListeners();
    });
    </script>
    <script type="text/javascript" async="" src="https://mathjax.codeforces.org/MathJax.js?config=TeX-AMS_HTML-full">
    </script>
    <!-- /MathJax -->

    <script type="text/javascript" src="//codeforces.org/s/23975/js/prettify/prettify.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/pushstream.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.lavalamp.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.jgrowl.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.swipe.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.hotkeys.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/facebox.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.wysiwyg.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/controls/wysiwyg.colorpicker.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/controls/wysiwyg.table.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/controls/wysiwyg.image.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/controls/wysiwyg.link.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.autocomplete.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/ua-parser.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.datepick.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.ie6blocker.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.colorbox-min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.ba-bbq.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/jquery.drafts.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/clipboard.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/autosize.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/sjcl.js"></script>
    <script type="text/javascript" src="/scripts/d1de6ff26236cb3297e8e8e6911c721f/en/codeforces-options.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/codeforces.js?v=20160131"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/EventCatcher.js?v=20160131"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/js/preparedVerdictFormats-en.js"></script>
    <!--/CombineResourcesFilter-->

    <link rel="stylesheet" href="//codeforces.org/s/23975/markitup/skins/markitup/style.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="//codeforces.org/s/23975/markitup/sets/markdown/style.css" type="text/css" charset="utf-8">


    <script type="text/javascript" src="//codeforces.org/s/23975/markitup/jquery.markitup.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/23975/markitup/sets/markdown/set.js"></script>

    <!--[if IE]>
    <style>
        #sidebar {
            padding-left: 1em;
            margin: 1em 1em 1em 0;
        }
    </style>
    <![endif]-->


        <script id="nocomb.ace-builds/ace.js" src="//codeforces.org/s/23975/js/ace-builds/ace.js" type="text/javascript"></script><style id="ace_editor.css">.ace_editor {position: relative;overflow: hidden;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}
/*# sourceURL=ace/css/ace_editor.css */</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style>
        <script id="nocomb.ace-builds/ext-language_tools.js" src="//codeforces.org/s/23975/js/ace-builds/ext-language_tools.js" type="text/javascript"></script><style>.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}</style><style>.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}</style>
        <script id="nocomb.ace-builds/ext-modelist.js" src="//codeforces.org/s/23975/js/ace-builds/ext-modelist.js" type="text/javascript"></script>
        <script id="nocomb.edit_area/edit_area_full.js" src="//codeforces.org/s/23975/js/edit_area/edit_area_full.js" type="text/javascript"></script>


<script src="https://codeforces.org/s/23975/js/ace-builds/theme-chrome.js"></script><script src="https://codeforces.org/s/23975/js/ace-builds/mode-c_cpp.js"></script><style>@media print {#ghostery-tracker-tally {display:none !important}}</style><style id="ace-chrome">.ace-chrome .ace_gutter {background: #ebebeb;color: #333;overflow : hidden;}.ace-chrome .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-chrome {background-color: #FFFFFF;color: black;}.ace-chrome .ace_cursor {color: black;}.ace-chrome .ace_invisible {color: rgb(191, 191, 191);}.ace-chrome .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-chrome .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-chrome .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-chrome .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-chrome .ace_fold {}.ace-chrome .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-chrome .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-chrome .ace_support.ace_type,.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {color: rgb(109, 121, 222);}.ace-chrome .ace_variable.ace_parameter {font-style:italic;color:#FD971F;}.ace-chrome .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-chrome .ace_comment {color: #236e24;}.ace-chrome .ace_comment.ace_doc {color: #236e24;}.ace-chrome .ace_comment.ace_doc.ace_tag {color: #236e24;}.ace-chrome .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-chrome .ace_variable {color: rgb(49, 132, 149);}.ace-chrome .ace_xml-pe {color: rgb(104, 104, 91);}.ace-chrome .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-chrome .ace_heading {color: rgb(12, 7, 255);}.ace-chrome .ace_list {color:rgb(185, 6, 144);}.ace-chrome .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-chrome .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-chrome .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-chrome .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-chrome .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-chrome .ace_gutter-active-line {background-color : #dcdcdc;}.ace-chrome .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-chrome .ace_storage,.ace-chrome .ace_keyword,.ace-chrome .ace_meta.ace_tag {color: rgb(147, 15, 128);}.ace-chrome .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-chrome .ace_string {color: #1A1AA6;}.ace-chrome .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-chrome .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-chrome */</style><style type="text/css">.MathJax_Hover_Frame {border-radius: .25em; -webkit-border-radius: .25em; -moz-border-radius: .25em; -khtml-border-radius: .25em; box-shadow: 0px 0px 15px #83A; -webkit-box-shadow: 0px 0px 15px #83A; -moz-box-shadow: 0px 0px 15px #83A; -khtml-box-shadow: 0px 0px 15px #83A; border: 1px solid #A6D ! important; display: inline-block; position: absolute}
.MathJax_Menu_Button .MathJax_Hover_Arrow {position: absolute; cursor: pointer; display: inline-block; border: 2px solid #AAA; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px; font-family: 'Courier New',Courier; font-size: 9px; color: #F0F0F0}
.MathJax_Menu_Button .MathJax_Hover_Arrow span {display: block; background-color: #AAA; border: 1px solid; border-radius: 3px; line-height: 0; padding: 4px}
.MathJax_Hover_Arrow:hover {color: white!important; border: 2px solid #CCC!important}
.MathJax_Hover_Arrow:hover span {background-color: #CCC!important}
</style><style type="text/css">#MathJax_About {position: fixed; left: 50%; width: auto; text-align: center; border: 3px outset; padding: 1em 2em; background-color: #DDDDDD; color: black; cursor: default; font-family: message-box; font-size: 120%; font-style: normal; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 15px; -webkit-border-radius: 15px; -moz-border-radius: 15px; -khtml-border-radius: 15px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
#MathJax_About.MathJax_MousePost {outline: none}
.MathJax_Menu {position: absolute; background-color: white; color: black; width: auto; padding: 2px; border: 1px solid #CCCCCC; margin: 0; cursor: default; font: menu; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
.MathJax_MenuItem {padding: 2px 2em; background: transparent}
.MathJax_MenuArrow {position: absolute; right: .5em; padding-top: .25em; color: #666666; font-size: .75em}
.MathJax_MenuActive .MathJax_MenuArrow {color: white}
.MathJax_MenuArrow.RTL {left: .5em; right: auto}
.MathJax_MenuCheck {position: absolute; left: .7em}
.MathJax_MenuCheck.RTL {right: .7em; left: auto}
.MathJax_MenuRadioCheck {position: absolute; left: 1em}
.MathJax_MenuRadioCheck.RTL {right: 1em; left: auto}
.MathJax_MenuLabel {padding: 2px 2em 4px 1.33em; font-style: italic}
.MathJax_MenuRule {border-top: 1px solid #CCCCCC; margin: 4px 1px 0px}
.MathJax_MenuDisabled {color: GrayText}
.MathJax_MenuActive {background-color: Highlight; color: HighlightText}
.MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus {background-color: #E8E8E8}
.MathJax_ContextMenu:focus {outline: none}
.MathJax_ContextMenu .MathJax_MenuItem:focus {outline: none}
#MathJax_AboutClose {top: .2em; right: .2em}
.MathJax_Menu .MathJax_MenuClose {top: -10px; left: -10px}
.MathJax_MenuClose {position: absolute; cursor: pointer; display: inline-block; border: 2px solid #AAA; border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; -khtml-border-radius: 18px; font-family: 'Courier New',Courier; font-size: 24px; color: #F0F0F0}
.MathJax_MenuClose span {display: block; background-color: #AAA; border: 1.5px solid; border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; -khtml-border-radius: 18px; line-height: 0; padding: 8px 0 6px}
.MathJax_MenuClose:hover {color: white!important; border: 2px solid #CCC!important}
.MathJax_MenuClose:hover span {background-color: #CCC!important}
.MathJax_MenuClose:hover:focus {outline: none}
</style><style type="text/css">.MathJax_Preview .MJXf-math {color: inherit!important}
</style><style type="text/css">.MJX_Assistive_MathML {position: absolute!important; top: 0; left: 0; clip: rect(1px, 1px, 1px, 1px); padding: 1px 0 0 0!important; border: 0!important; height: 1px!important; width: 1px!important; overflow: hidden!important; display: block!important; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none}
.MJX_Assistive_MathML.MJX_Assistive_MathML_Block {width: 100%!important}
</style><style type="text/css">#MathJax_Zoom {position: absolute; background-color: #F0F0F0; overflow: auto; display: block; z-index: 301; padding: .5em; border: 1px solid black; margin: 0; font-weight: normal; font-style: normal; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; box-shadow: 5px 5px 15px #AAAAAA; -webkit-box-shadow: 5px 5px 15px #AAAAAA; -moz-box-shadow: 5px 5px 15px #AAAAAA; -khtml-box-shadow: 5px 5px 15px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
#MathJax_ZoomOverlay {position: absolute; left: 0; top: 0; z-index: 300; display: inline-block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
#MathJax_ZoomFrame {position: relative; display: inline-block; height: 0; width: 0}
#MathJax_ZoomEventTrap {position: absolute; left: 0; top: 0; z-index: 302; display: inline-block; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
</style><style type="text/css">.MathJax_Preview {color: #888; display: contents}
#MathJax_Message {position: fixed; left: 1em; bottom: 1.5em; background-color: #E6E6E6; border: 1px solid #959595; margin: 0px; padding: 2px 8px; z-index: 102; color: black; font-size: 80%; width: auto; white-space: nowrap}
#MathJax_MSIE_Frame {position: absolute; top: 0; left: 0; width: 0px; z-index: 101; border: 0px; margin: 0px; padding: 0px}
.MathJax_Error {color: #CC0000; font-style: italic}
</style><style type="text/css">.MJXp-script {font-size: .8em}
.MJXp-right {-webkit-transform-origin: right; -moz-transform-origin: right; -ms-transform-origin: right; -o-transform-origin: right; transform-origin: right}
.MJXp-bold {font-weight: bold}
.MJXp-italic {font-style: italic}
.MJXp-scr {font-family: MathJax_Script,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-frak {font-family: MathJax_Fraktur,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-sf {font-family: MathJax_SansSerif,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-cal {font-family: MathJax_Caligraphic,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-mono {font-family: MathJax_Typewriter,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-largeop {font-size: 150%}
.MJXp-largeop.MJXp-int {vertical-align: -.2em}
.MJXp-math {display: inline-block; line-height: 1.2; text-indent: 0; font-family: 'Times New Roman',Times,STIXGeneral,serif; white-space: nowrap; border-collapse: collapse}
.MJXp-display {display: block; text-align: center; margin: 1em 0}
.MJXp-math span {display: inline-block}
.MJXp-box {display: block!important; text-align: center}
.MJXp-box:after {content: " "}
.MJXp-rule {display: block!important; margin-top: .1em}
.MJXp-char {display: block!important}
.MJXp-mo {margin: 0 .15em}
.MJXp-mfrac {margin: 0 .125em; vertical-align: .25em}
.MJXp-denom {display: inline-table!important; width: 100%}
.MJXp-denom > * {display: table-row!important}
.MJXp-surd {vertical-align: top}
.MJXp-surd > * {display: block!important}
.MJXp-script-box > *  {display: table!important; height: 50%}
.MJXp-script-box > * > * {display: table-cell!important; vertical-align: top}
.MJXp-script-box > *:last-child > * {vertical-align: bottom}
.MJXp-script-box > * > * > * {display: block!important}
.MJXp-mphantom {visibility: hidden}
.MJXp-munderover, .MJXp-munder {display: inline-table!important}
.MJXp-over {display: inline-block!important; text-align: center}
.MJXp-over > * {display: block!important}
.MJXp-munderover > *, .MJXp-munder > * {display: table-row!important}
.MJXp-mtable {vertical-align: .25em; margin: 0 .125em}
.MJXp-mtable > * {display: inline-table!important; vertical-align: middle}
.MJXp-mtr {display: table-row!important}
.MJXp-mtd {display: table-cell!important; text-align: center; padding: .5em 0 0 .5em}
.MJXp-mtr > .MJXp-mtd:first-child {padding-left: 0}
.MJXp-mtr:first-child > .MJXp-mtd {padding-top: 0}
.MJXp-mlabeledtr {display: table-row!important}
.MJXp-mlabeledtr > .MJXp-mtd:first-child {padding-left: 0}
.MJXp-mlabeledtr:first-child > .MJXp-mtd {padding-top: 0}
.MJXp-merror {background-color: #FFFF88; color: #CC0000; border: 1px solid #CC0000; padding: 1px 3px; font-style: normal; font-size: 90%}
.MJXp-scale0 {-webkit-transform: scaleX(.0); -moz-transform: scaleX(.0); -ms-transform: scaleX(.0); -o-transform: scaleX(.0); transform: scaleX(.0)}
.MJXp-scale1 {-webkit-transform: scaleX(.1); -moz-transform: scaleX(.1); -ms-transform: scaleX(.1); -o-transform: scaleX(.1); transform: scaleX(.1)}
.MJXp-scale2 {-webkit-transform: scaleX(.2); -moz-transform: scaleX(.2); -ms-transform: scaleX(.2); -o-transform: scaleX(.2); transform: scaleX(.2)}
.MJXp-scale3 {-webkit-transform: scaleX(.3); -moz-transform: scaleX(.3); -ms-transform: scaleX(.3); -o-transform: scaleX(.3); transform: scaleX(.3)}
.MJXp-scale4 {-webkit-transform: scaleX(.4); -moz-transform: scaleX(.4); -ms-transform: scaleX(.4); -o-transform: scaleX(.4); transform: scaleX(.4)}
.MJXp-scale5 {-webkit-transform: scaleX(.5); -moz-transform: scaleX(.5); -ms-transform: scaleX(.5); -o-transform: scaleX(.5); transform: scaleX(.5)}
.MJXp-scale6 {-webkit-transform: scaleX(.6); -moz-transform: scaleX(.6); -ms-transform: scaleX(.6); -o-transform: scaleX(.6); transform: scaleX(.6)}
.MJXp-scale7 {-webkit-transform: scaleX(.7); -moz-transform: scaleX(.7); -ms-transform: scaleX(.7); -o-transform: scaleX(.7); transform: scaleX(.7)}
.MJXp-scale8 {-webkit-transform: scaleX(.8); -moz-transform: scaleX(.8); -ms-transform: scaleX(.8); -o-transform: scaleX(.8); transform: scaleX(.8)}
.MJXp-scale9 {-webkit-transform: scaleX(.9); -moz-transform: scaleX(.9); -ms-transform: scaleX(.9); -o-transform: scaleX(.9); transform: scaleX(.9)}
.MathJax_PHTML .noError {vertical-align: ; font-size: 90%; text-align: left; color: black; padding: 1px 3px; border: 1px solid}
</style><style type="text/css">.MathJax_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax .merror {background-color: #FFFF88; color: #CC0000; border: 1px solid #CC0000; padding: 1px 3px; font-style: normal; font-size: 90%}
.MathJax .MJX-monospace {font-family: monospace}
.MathJax .MJX-sans-serif {font-family: sans-serif}
#MathJax_Tooltip {background-color: InfoBackground; color: InfoText; border: 1px solid black; box-shadow: 2px 2px 5px #AAAAAA; -webkit-box-shadow: 2px 2px 5px #AAAAAA; -moz-box-shadow: 2px 2px 5px #AAAAAA; -khtml-box-shadow: 2px 2px 5px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true'); padding: 3px 4px; z-index: 401; position: absolute; left: 0; top: 0; width: auto; height: auto; display: none}
.MathJax {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax:focus, body :focus .MathJax {display: inline-table}
.MathJax.MathJax_FullWidth {text-align: center; display: table-cell!important; width: 10000em!important}
.MathJax img, .MathJax nobr, .MathJax a {border: 0; padding: 0; margin: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; vertical-align: 0; line-height: normal; text-decoration: none}
img.MathJax_strut {border: 0!important; padding: 0!important; margin: 0!important; vertical-align: 0!important}
.MathJax span {display: inline; position: static; border: 0; padding: 0; margin: 0; vertical-align: 0; line-height: normal; text-decoration: none; box-sizing: content-box}
.MathJax nobr {white-space: nowrap!important}
.MathJax img {display: inline!important; float: none!important}
.MathJax * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.MathJax_Processing {visibility: hidden; position: fixed; width: 0; height: 0; overflow: hidden}
.MathJax_Processed {display: none!important}
.MathJax_test {font-style: normal; font-weight: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-transform: none; letter-spacing: normal; word-spacing: normal; overflow: hidden; height: 1px}
.MathJax_test.mjx-test-display {display: table!important}
.MathJax_test.mjx-test-inline {display: inline!important; margin-right: -1px}
.MathJax_test.mjx-test-default {display: block!important; clear: both}
.MathJax_ex_box {display: inline-block!important; position: absolute; overflow: hidden; min-height: 0; max-height: none; padding: 0; border: 0; margin: 0; width: 1px; height: 60ex}
.MathJax_em_box {display: inline-block!important; position: absolute; overflow: hidden; min-height: 0; max-height: none; padding: 0; border: 0; margin: 0; width: 1px; height: 60em}
.mjx-test-inline .MathJax_left_box {display: inline-block; width: 0; float: left}
.mjx-test-inline .MathJax_right_box {display: inline-block; width: 0; float: right}
.mjx-test-display .MathJax_right_box {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
.MathJax .MathJax_HitBox {cursor: text; background: white; opacity: 0; filter: alpha(opacity=0)}
.MathJax .MathJax_HitBox * {filter: none; opacity: 1; background: transparent}
#MathJax_Tooltip * {filter: none; opacity: 1; background: transparent}
@font-face {font-family: MathJax_Main; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Main-Regular.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Main-Regular.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Main-bold; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Main-Bold.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Main-Bold.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Main-italic; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Main-Italic.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Main-Italic.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Math-italic; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Math-Italic.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Math-Italic.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Caligraphic; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Caligraphic-Regular.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Caligraphic-Regular.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Size1; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Size1-Regular.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Size1-Regular.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Size2; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Size2-Regular.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Size2-Regular.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Size3; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Size3-Regular.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Size3-Regular.otf?V=2.7.9') format('opentype')}
@font-face {font-family: MathJax_Size4; src: url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/woff/MathJax_Size4-Regular.woff?V=2.7.9') format('woff'), url('https://mathjax.codeforces.org/fonts/HTML-CSS/TeX/otf/MathJax_Size4-Regular.otf?V=2.7.9') format('opentype')}
.MathJax .noError {vertical-align: ; font-size: 90%; text-align: left; color: black; padding: 1px 3px; border: 1px solid}
</style></head>
<body class="vsc-initialized"><div style="visibility: hidden; overflow: hidden; position: absolute; top: 0px; height: 1px; width: auto; padding: 0px; border: 0px; margin: 0px; text-align: left; text-indent: 0px; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal;"><div id="MathJax_Hidden"></div></div><div id="MathJax_Message" style="display: none;"></div><span style="display:none;" class="csrf-token" data-csrf="8beb62afc8d3bb42c0eae0a34f1913d5">&nbsp;</span>

<!-- .notificationTextCleaner used in Codeforces.showAnnouncements() -->
<div class="notificationTextCleaner" style="font-size: 0"></div>
<div class="button-up" style="display: none; opacity: 0.7; width: 30px; height: 100%; position: fixed; left: 0px; top: 0px; cursor: pointer; text-align: center; line-height: 30px; color: rgb(211, 219, 228); font-weight: bold; font-size: 20px;"><i class="icon-circle-arrow-up"></i></div>
<div class="verdictPrototypeDiv" style="display: none;"></div>

<!-- Codeforces JavaScripts. -->
<script type="text/javascript">
    String.prototype.hashCode = function() {
        var hash = 0, i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    var queryMobile = Codeforces.queryString.mobile;
    if (queryMobile === "true" || queryMobile === "false") {
        Codeforces.putToStorage("useMobile", queryMobile === "true");
    } else {
        var useMobile = Codeforces.getFromStorage("useMobile");
        if (useMobile === true || useMobile === false) {
            if (useMobile != false) {
                Codeforces.redirect(Codeforces.updateUrlParameter(document.location.href, "mobile", useMobile));
            }
        }
    }
</script>

<script type="text/javascript">
    if (window.parent.frames.length > 0) {
        window.stop();
    }
</script>





    <script type="text/javascript">
        $(document).ready(function () {
    (function () {
        jQuery.expr[':'].containsCI = function(elem, index, match) {
            return !match || !match.length || match.length < 4 || !match[3] || (
                    elem.textContent || elem.innerText || jQuery(elem).text() || ''
            ).toLowerCase().indexOf(match[3].toLowerCase()) >= 0;
        }
    }(jQuery));

    $.ajaxPrefilter(function(options, originalOptions, xhr) {
        var csrf = Codeforces.getCsrfToken();

        if (csrf) {
            var data = originalOptions.data;
            if (originalOptions.data !== undefined) {
                if (Object.prototype.toString.call(originalOptions.data) === '[object String]') {
                    data = $.deparam(originalOptions.data);
                }
            } else {
                data = {};
            }
            options.data = $.param($.extend(data, { csrf_token: csrf }));
        }
    });

    window.getCodeforcesServerTime = function(callback) {
        $.post("/data/time", {}, callback, "json");
    }

    window.updateTypography = function () {
        $("div.ttypography code").addClass("tt");
        $("div.ttypography pre>code").addClass("prettyprint").removeClass("tt");
        $("div.ttypography table").addClass("bordertable");
        prettyPrint();
    }

    $.ajaxSetup({ scriptCharset: "utf-8" ,contentType: "application/x-www-form-urlencoded; charset=UTF-8", headers: {
        'X-Csrf-Token': Codeforces.getCsrfToken()
    }});

    window.updateTypography();

    Codeforces.signForms();

    setTimeout(function() {
        $(".second-level-menu-list").lavaLamp({
            fx: "backout",
            speed: 700
        });
    }, 100);


    Codeforces.countdown();
    $("a[rel='photobox']").colorbox();

        var count = 0;

        function getDelay() {
            var delay = 0;
            var last = Codeforces.getFromStorage("LastOnlineTimeUpdaterMillis", 0);
            if (last && last != null) {
                var period = count < 20 ? 360 * 1000 : 600 * 1000;
                delay = period - (new Date().getTime() - last);
                if (delay < 0)
                    delay = 0;
            }
            return delay;
        }

        window.setInterval(function () {
            if (getDelay() <= 0 && count < 120) {
                ++count;
                Codeforces.ping("/data/update-online");
            }
        }, 5000);

        var handle = "meghasehgal";
        $("a.rated-user:contains(" + handle + "), span.participant:contains(" + handle + ")").each(function () {
            if ($(this).text() == handle) {
                var td = $(this).parent();
                var tr = $(this).parent().parent();
                if (td.is("td") && tr.is("tr") && !tr.hasClass("disable-highlight-self")) {
                    info(handle);
                    tr.addClass("highlighted-row");
                }
            }
        });

    function showAnnouncements(json) {
        //info("j=" + JSON.stringify(json));

        if (json.t != "a") {
            return;
        }

        setTimeout(function() {
            Codeforces.showAnnouncements(json.d, "en");
        }, Math.random() * 500);
    }

    function showEventCatcherUserMessage(json) {
        if (json.t == "s") {
            var points = json.d[5];
            var passedTestCount = json.d[7];
            var judgedTestCount = json.d[8];
            var verdict = preparedVerdictFormats[json.d[12]];
            var verdictPrototypeDiv = $(".verdictPrototypeDiv");
            verdictPrototypeDiv.html(verdict);
            if (judgedTestCount != null && judgedTestCount != undefined) {
                verdictPrototypeDiv.find(".verdict-format-judged").text(judgedTestCount);
            }
            if (passedTestCount != null && passedTestCount != undefined) {
                verdictPrototypeDiv.find(".verdict-format-passed").text(passedTestCount);
            }
            if (points != null && points != undefined) {
                verdictPrototypeDiv.find(".verdict-format-points").text(points);
            }
            Codeforces.showMessage(verdictPrototypeDiv.text());
        }
    }

    $(".clickable-title").each(function() {
        var title = $(this).attr("data-title");
        if (title) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = title;
            $(this).attr("title", tmp.textContent || tmp.innerText || "");
        }
    });

    $(".clickable-title").click(function() {
        var title = $(this).attr("data-title");
        if (title) {
            Codeforces.alert(title);
        } else {
            Codeforces.alert($(this).attr("title"));
        }
    }).css("position", "relative").css("bottom", "3px");

        Codeforces.showDelayedMessage();

    Codeforces.reformatTimes();

    //Codeforces.initializePubSub();
    if (window.codeforcesOptions.subscribeServerUrl) {
        window.eventCatcher = new EventCatcher(
            window.codeforcesOptions.subscribeServerUrl,
            [
                Codeforces.getGlobalChannel(),
                Codeforces.getUserChannel(),
                Codeforces.getUserShowMessageChannel(),
                Codeforces.getContestChannel(),
                Codeforces.getParticipantChannel(),
                Codeforces.getTalkChannel()
            ]
        );

        if (Codeforces.getParticipantChannel()) {
            window.eventCatcher.subscribe(Codeforces.getParticipantChannel(), function(json) {
                showAnnouncements(json);
            });
        }

        if (Codeforces.getContestChannel()) {
            window.eventCatcher.subscribe(Codeforces.getContestChannel(), function(json) {
                showAnnouncements(json);
            });
        }

        if (Codeforces.getGlobalChannel()) {
            window.eventCatcher.subscribe(Codeforces.getGlobalChannel(), function(json) {
                showAnnouncements(json);
            });
        }

        if (Codeforces.getUserChannel()) {
            window.eventCatcher.subscribe(Codeforces.getUserChannel(), function(json) {
                showAnnouncements(json);
            });
        }

        if (Codeforces.getUserShowMessageChannel()) {
            window.eventCatcher.subscribe(Codeforces.getUserShowMessageChannel(), function(json) {
                showEventCatcherUserMessage(json);
            });
        }
    }

    Codeforces.setupContestTimes("/data/contests");
    Codeforces.setupSpoilers();
    Codeforces.setupTutorials("/data/problemTutorial");
        });
    </script>

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-743380-5']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = (document.location.protocol == 'https:' ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>


<div id="body">
            <script type="application/javascript">
                window.setTimeout(function () {
                    var url = location.href;
                    var hashCode32 = Math.abs(url.hashCode()).toString();
                    var hashCode = "p" + hashCode32 + Math.abs((hashCode32 + url).hashCode());
                    var pvs = Codeforces.getFromStorage("pvs" + hashCode);
                    if (!pvs) {
                        $.post("/data/apv", {
                            ftaa: window._ftaa,
                            bfaa: window._bfaa,
                            url: url
                        }, function (json) {
                            if (json["success"] === "true") {
                                Codeforces.putToStorage("pvs" + hashCode, true);
                            }
                        }, "json");
                    }
                }, 5000);
            </script>
        

<div class="side-bell" style="visibility: hidden; display: none; opacity: 0.7; width: 30px; position: fixed; right: 0px; top: 0px; cursor: pointer; text-align: center; line-height: 30px; color: rgb(211, 219, 228); font-weight: bold; font-size: 10px;">
    <span class="icon-stack" style="width: 100%;">
        <i class="icon-circle icon-stack-base"></i>
        <i class="icon-bell-alt icon-light"></i>
    </span>
    <br>
    <span class="side-bell__count" style="position: relative; top: -10px;"></span>
</div>




<style>
    .header-bell {
        display: inline-block;
        position: relative;
        cursor: pointer;
    }

    .header-bell__img {
        opacity: 0.5;
        background-image: url("//codeforces.org/s/98670/images/icons/bell_inactive-20x20.png");
        position: relative;
        bottom: 1px;
        width: 20px;
        height: 20px;
    }

    .header-bell__img-active  {
        opacity: 1 !important;
        background-image: url("//codeforces.org/s/98670/images/icons/bell_active-20x20.png") !important;
    }

    .header-bell__count {
        position: absolute;
        top: 8px;
        left: 18px;
        font-weight: bold;
        font-size: 10px;
    }

    .bell-details {
        display: none;
        z-index: 5;
        border: 1px solid rgb(185, 185, 185);
        width: 40rem;
        max-height: 60rem;
        padding: 0;
        position: absolute;
        top: 20px;
        right: 0;
        background-color: white;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .bell-details.sidebar-bell {
        position: fixed;
        right: 50px;
    }

    .bell-details__no-new {
        font-size: 1.3rem;
        display: block;
        text-align: center;
        color: #888 !important;
        padding: 1em;
    }

    .bell-details__recent-link {
        margin: 0;
        padding: 0.5em;
        text-align: center;
        border-top: 1px solid rgb(185, 185, 185);
    }

    .bell-details__recent-link a {
        font-size: 1.2rem;
    }

    .bell-details__proto-row-comment {
        display: none;
    }

    .bell-details__proto-row-blog-entry {
        display: none;
    }

    .bell-details__proto-row-comment-reply {
        display: none;
    }

    .bell-details__row {
        text-align: left;
        margin: 0.5em;
        padding: 0.25em 0.25em 0.75em 0.25em;
        clear: both;
    }

    .bell-details__row:hover {
        cursor: pointer;
        background-color: #def;
    }

    .bell-details__row-active {
        background-color: #def;
    }

    .bell-details__thumbnail-a {
        text-decoration: none;
    }

    .bell-details__row img {
        zoom: 50%;
        margin-right: 2em;
        float: left;
    }

    .bell-details__comment {
        padding-left: 45px;
        font-size: 1.3rem;
    }

    .bell-details__blog-entry {
        padding-left: 45px;
        font-size: 1.3rem;
    }

    .bell-details__comment-reply {
        padding-left: 45px;
        font-size: 1.3rem;
    }

    .bell-details__time {
        padding-left: 45px;
        margin-top: 0.2em;
        font-size: 1.1rem;
        color: #888 !important;
    }
</style>

<script>
    $(function () {
        if ($(window).width() < 1600) {
            $('.side-bell').css('width', '30px').css('line-height', '30px').css('font-size', '10px');
        }

        if ($(window).width() >= 1200) {
            $ (window).scroll (function () {
                if ($ (this).scrollTop () > 100) {
                    $(".bell-details").addClass("sidebar-bell");
                    $ ('.side-bell').fadeIn();
                } else {
                    $(".bell-details").removeClass("sidebar-bell");
                    $ ('.side-bell').fadeOut();
                }
            });

            $('.side-bell').hover(function () {
                $(this).animate({
                    'opacity':'1'
                }).css({'color':'#6a86a4'});
            }, function () {
                $(this).animate({
                    'opacity':'0.7'
                }).css({'color':'#d3dbe4'});
            });
        }

        $(".lang-chooser>div:first-child").prepend($("<span style='position: relative; bottom: 8px; padding: 0 0.5em;'>|</span>")).prepend($(".header-bell").show());
        function Bell() {
            var bell = this;
            var notifications = JSON.parse("[]");

            bell.notifications = {};

            for (var i in notifications) {
                if (notifications.hasOwnProperty(i)) {
                    bell.notifications[notifications[i].id] = notifications[i];
                }
            }

            function onClick(notification) {
                var notificationIds = [];
                var reason = notification.data.reasonType + "#" + notification.reasonId;
                for (id in bell.notifications) {
                    if (bell.notifications.hasOwnProperty(id)) {
                        var otherNotification = bell.notifications[id];
                        var otherReason = otherNotification.data.reasonType + "#" + otherNotification.reasonId;
                        if (otherReason == reason) {
                            notificationIds.push(otherNotification.id);
                        }
                    }
                }
                $.post("/data/notification", {action: "markAsRead", notificationIds: notificationIds.join(",")}, function(result) {
                    Codeforces.redirect(notification.data.url);
                }, "json");
            }

            var $bellDetails = $(".bell-details");
            bell.newCommentRow = function (notification) {
                var row = $(".bell-details__proto-row-comment").clone();
                row.addClass("bell-details__row").attr("data-notificationId", notification.id);
                row.find(".bell-details__thumbnail-a").attr("href", notification.data.reasonUserUrl);
                row.find("img").attr("src", notification.data.reasonUserThumbnailUrl);
                row.find(".bell-details__comment").html(
                        "ReasonUser mentioned you in a comment".replace("ReasonUser", notification.data.reasonUserHtml)
                );
                row.find(".bell-details__time").html(
                        "<span class='format-systemtimewithseconds'>"
                        + notification.creationTimeString
                        + "</span>"
                );
                row.removeClass("bell-details__proto-row-comment");
                row.click(function() {
                    onClick(notification);
                    return false;
                });
                return row;
            };
            bell.newFriendCommentRow = function (notification) {
                var row = $(".bell-details__proto-row-comment").clone();
                row.addClass("bell-details__row").attr("data-notificationId", notification.id);
                row.find(".bell-details__thumbnail-a").attr("href", notification.data.reasonUserUrl);
                row.find("img").attr("src", notification.data.reasonUserThumbnailUrl);
                row.find(".bell-details__comment").html(
                        "ReasonUser wrote a comment".replace("ReasonUser", notification.data.reasonUserHtml)
                );
                row.find(".bell-details__time").html(
                        "<span class='format-systemtimewithseconds'>"
                        + notification.creationTimeString
                        + "</span>"
                );
                row.removeClass("bell-details__proto-row-comment");
                row.click(function() {
                    onClick(notification);
                    return false;
                });
                return row;
            };
            bell.newCommentReplyRow = function (notification) {
                var row = $(".bell-details__proto-row-comment-reply").clone();
                row.addClass("bell-details__row").attr("data-notificationId", notification.id);
                row.find(".bell-details__thumbnail-a").attr("href", notification.data.reasonUserUrl);
                row.find("img").attr("src", notification.data.reasonUserThumbnailUrl);
                row.find(".bell-details__comment-reply").html(
                        "ReasonUser replied to your comment".replace("ReasonUser", notification.data.reasonUserHtml)
                );
                row.find(".bell-details__time").html(
                        "<span class='format-systemtimewithseconds'>"
                        + notification.creationTimeString
                        + "</span>"
                );
                row.removeClass("bell-details__proto-row-comment-reply");
                row.click(function() {
                    onClick(notification);
                    return false;
                });
                return row;
            };
            bell.newBlogEntryRow = function (notification) {
                var row = $(".bell-details__proto-row-blog-entry").clone();
                row.addClass("bell-details__row").attr("data-notificationId", notification.id);
                row.find(".bell-details__thumbnail-a").attr("href", notification.data.reasonUserUrl);
                row.find("img").attr("src", notification.data.reasonUserThumbnailUrl);
                row.find(".bell-details__blog-entry").html(
                        "ReasonUser mentioned you in a blog entry".replace("ReasonUser", notification.data.reasonUserHtml)
                );
                row.find(".bell-details__time").html(
                        "<span class='format-systemtimewithseconds'>"
                        + notification.creationTimeString
                        + "</span>"
                );
                row.removeClass("bell-details__proto-row-blog-entry");
                row.click(function() {
                    onClick(notification);
                    return false;
                });
                return row;
            };
            bell.newFriendBlogEntryRow = function (notification) {
                var row = $(".bell-details__proto-row-blog-entry").clone();
                row.addClass("bell-details__row").attr("data-notificationId", notification.id);
                row.find(".bell-details__thumbnail-a").attr("href", notification.data.reasonUserUrl);
                row.find("img").attr("src", notification.data.reasonUserThumbnailUrl);
                row.find(".bell-details__blog-entry").html(
                        "ReasonUser wrote a blog entry".replace("ReasonUser", notification.data.reasonUserHtml)
                );
                row.find(".bell-details__time").html(
                        "<span class='format-systemtimewithseconds'>"
                        + notification.creationTimeString
                        + "</span>"
                );
                row.removeClass("bell-details__proto-row-blog-entry");
                row.click(function() {
                    onClick(notification);
                    return false;
                });
                return row;
            };
            bell.newProposalCommentRow = function (notification) {
                var row = $(".bell-details__proto-row-comment-reply").clone();
                row.addClass("bell-details__row").attr("data-notificationId", notification.id);
                row.find(".bell-details__thumbnail-a").attr("href", notification.data.reasonUserUrl);
                row.find("img").attr("src", notification.data.reasonUserThumbnailUrl);
                row.find(".bell-details__comment-reply").html(
                        "ReasonUser commented on ProposalType Proposal".replace("ReasonUser", notification.data.reasonUserHtml)
                                .replace("ProposalType", "Contest" == notification.data.proposalType ? "contest proposal" : "problem proposal")
                                .replace("Proposal", $("<div/>").text(notification.data.proposalName).html())
                );
                row.find(".bell-details__time").html(
                        "<span class='format-systemtimewithseconds'>"
                        + notification.creationTimeString
                        + "</span>"
                );
                row.removeClass("bell-details__proto-row-comment-reply");
                row.click(function() {
                    onClick(notification);
                    return false;
                });
                return row;
            };

            bell.renderRow = function (notification) {
                var $row = $(".bell-details__row[data-notificationId='" + notification.id + "']");

                if ($bellDetails.css("display") != "block" && notification.read) {
                    $row.hide();
                    return;
                }

                notification.data = JSON.parse(notification.dataJson);

                var reason = notification.data.reasonType + "#" + notification.reasonId;

                var has = false;
                $row.each(function () {
                    has = true;
                });
                if ($(".bell-details__row[data-reason='" + reason + "']").length) {
                    has = true;
                }

                if (!has) {
                    $(".side-bell").css("visibility", "visible");
                    var newRow;
                    if (notification.type == "Comment") {
                        newRow = bell.newCommentRow(notification);
                    } else if (notification.type == "BlogEntry") {
                        newRow = bell.newBlogEntryRow(notification);
                    } else if (notification.type == "CommentReply") {
                        newRow = bell.newCommentReplyRow(notification);
                    } else if (notification.type == "FriendComment") {
                        newRow = bell.newFriendCommentRow(notification);
                    } else if (notification.type == "FriendBlogEntry") {
                        newRow = bell.newFriendBlogEntryRow(notification);
                    } else if (notification.type == "ProposalComment") {
                        newRow = bell.newProposalCommentRow(notification)
                    }
                    if (newRow) {
                        newRow.attr("data-reason", reason);
                        $(".bell-details").prepend(newRow);
                    }
                }
            };

            var $count = $(".header-bell__count, .side-bell__count");
            var $img = $(".header-bell__img");
            var $noNew = $(".bell-details__no-new");

            bell.renewCount = function () {
                Codeforces.reformatTimes();
                var count = 0;
                var counted = {};
                for (var id in bell.notifications)
                    if (bell.notifications.hasOwnProperty(id)) {
                        var notification = bell.notifications[id];
                        if (notification) {
                            var reason = notification.data.reasonType + "#" + notification.reasonId;
                            if (!notification.read && !counted[reason]) {
                                count++;
                                counted[reason] = true;
                            }
                        }
                    }
                if (count > 0) {
                    $count.text(count);
                    $img.addClass("header-bell__img-active");
                    $noNew.hide();
                } else {
                    $count.text("");
                    $img.removeClass("header-bell__img-active");
                    if ($bellDetails.css("display") != "block") {
                        $noNew.show();
                    }
                }
            };

            for (var id in bell.notifications)
                if (bell.notifications.hasOwnProperty(id))
                    bell.renderRow(bell.notifications[id]);

            if (window.eventCatcher) {
                window.eventCatcher.subscribe(Codeforces.getUserChannel(), function(json) {
                    if (json.t === "n") {
                        for (var i in json.d)
                            if (json.d.hasOwnProperty(i)) {
                                var notification = json.d[i];
                                notification.data = JSON.parse(notification.dataJson);
                                bell.notifications[notification.id] = notification;
                                bell.renderRow(notification);
                                bell.renewCount();
                            }
                    }
                });
            }


            $(".header-bell, .side-bell").click(function() {
                if ($bellDetails.css("display") == "none") {
                    for (var id in bell.notifications)
                        if (bell.notifications.hasOwnProperty(id))
                            if (bell.notifications[id].read)
                                bell.renderRow(bell.notifications[id]);
                    bell.renewCount();

                    $bellDetails.css("display", "block");

                    var notificationIds = [];
                    for (id in bell.notifications)
                        if (bell.notifications.hasOwnProperty(id))
                            notificationIds.push(id);

                    setTimeout(function() {
                        if ($bellDetails.css("display") == "block") {
                            $.post("/data/notification", {action: "markAsRead", notificationIds: notificationIds.join(",")}, function(result) {
                                // No operations.
                            }, "json");

                            for (var i in notificationIds) {
                                if (notificationIds.hasOwnProperty(i)) {
                                    bell.notifications[notificationIds[i]].read = true;
                                }
                            }
                            bell.renewCount();
                        }
                    }, 2000);
                } else {
                    var has = false;
                    for (var id in bell.notifications) {
                        if (bell.notifications.hasOwnProperty(id) && !bell.notifications[id].read) {
                            has = true;
                        }
                    }
                    if (!has) {
                        $(".side-bell").css("visibility", "hidden");
                    }
                    $bellDetails.css("display", "none");
                    bell.renewCount();
                }
            });
        }

        bell = new Bell();
        bell.renewCount();
    })
</script>

<div id="header" style="position: relative;">
    <div style="float:left; height: 60px;">
                    <a href="/"><img alt="Codeforces" title="Codeforces" src="//codeforces.org/s/98670/images/codeforces-logo-with-telegram.png"></a>
    </div>
    <div class="lang-chooser">
        <div style="text-align: right;"><div class="header-bell" style="">
    <div class="header-bell__img"><span class="header-bell__count"></span></div>

    <div class="bell-details">
        <div class="bell-details__proto-row-comment">
            <a class="bell-details__thumbnail-a" href="#"><img src=""></a>
            <div class="bell-details__comment"></div>
            <div class="bell-details__time"></div>
        </div>
        <div class="bell-details__proto-row-blog-entry">
            <a class="bell-details__thumbnail-a" href="#"><img src=""></a>
            <div class="bell-details__blog-entry"></div>
            <div class="bell-details__time"></div>
        </div>
        <div class="bell-details__proto-row-comment-reply">
            <a class="bell-details__thumbnail-a" href="#"><img src=""></a>
            <div class="bell-details__comment-reply"></div>
        </div>

        <div class="bell-details__no-new">
            There are no new notifications
        </div>

        <div class="bell-details__recent-link">
            <a href="/notifications">History (at most 100 notifications)</a>
        </div>
    </div>
</div><span style="position: relative; bottom: 8px; padding: 0 0.5em;">|</span>
            <a href="?locale=en"><img src="//codeforces.org/s/98670/images/flags/24/gb.png" title="In English" alt="In English"></a>
            <a href="?locale=ru"><img src="//codeforces.org/s/98670/images/flags/24/ru.png" title="По-русски" alt="По-русски"></a>
        </div>

        <div>
                        <a href="/profile/meghasehgal">meghasehgal</a>
                     | 
                        <a href="/36de56a2a8dd935a3a39354ff947be92/logout">Logout</a>
                    
        </div>

            <div style="background-color: #EAF4FF; padding: 1px 3px; font-size: 1.1rem; margin-top: 3px">
                <img src="//codeforces.org/s/98670/images/icons/mail-16x16.png" style="">
                    <span style="position: relative; bottom: 3px;">
                        You have
                        <b> <a href="/bestRatingChanges/5822751">+120! Wow!</a></b>
                    </span>
            </div>


    </div>
    <br style="clear: both;">
</div>
        

    <div class="roundbox menu-box" style="">
            <div class="roundbox-lt">&nbsp;</div>
            <div class="roundbox-rt">&nbsp;</div>
            <div class="roundbox-lb">&nbsp;</div>
            <div class="roundbox-rb">&nbsp;</div>
    <div class="menu-list-container">
    <ul class="menu-list main-menu-list">
                <li class=""><a href="/">Home</a></li>
                <li class=""><a href="/top">Top</a></li>
                <li class=""><a href="/catalog">Catalog</a></li>
                <li class=""><a href="/contests">Contests</a></li>
                <li class=""><a href="/gyms">Gym</a></li>
                <li class="current"><a href="/problemset">Problemset</a></li>
                <li class=""><a href="/groups/my">Groups</a></li>
                <li class=""><a href="/ratings">Rating</a></li>
                <li class=""><a href="/edu/courses"><span class="edu-menu-item">Edu</span></a></li>
                <li class=""><a href="/apiHelp">API</a></li>
                <li class=""><a href="/calendar">Calendar</a></li>
                <li class=""><a href="/help">Help</a></li>
    </ul>
        <form method="post" action="/search"><input type="hidden" name="csrf_token" value="8beb62afc8d3bb42c0eae0a34f1913d5">
            <input class="search" name="query" data-isplaceholder="true" value="">
        <input type="hidden" name="_tta" value="458"></form>
    <br style="clear: both;">
</div>

    </div>

    <script type="text/javascript">
        $(document).ready(function () {
            $("input.search").focus(function () {
                if ($(this).attr("data-isPlaceholder") === "true") {
                    $(this).val("");
                    $(this).removeAttr("data-isPlaceholder");
                }
            });
        });
    </script>
            <br style="height: 3em; clear: both;">

        <div style="position: relative;">
                        <div id="sidebar">
    <div class="roundbox sidebox" style="">
            <div class="roundbox-lt">&nbsp;</div>
            <div class="roundbox-rt">&nbsp;</div>
        <div class="caption titled">→ Pay attention
            <div class="top-links">
            </div>
        </div>
<div style="padding: 0.5em;">
        <div style="text-align:center;">
            <span class="contest-state-phase">Before contest</span><br><a href="/contests/1681">Educational Codeforces Round 129 (Rated for Div. 2)</a><br><span class="countdown" home="//codeforces.org/s/98670" noredirection="true" textbeforeredirect="" cdid="i1">17:49:23</span><br><a href="/contestRegistration/1681">Register now »</a>
        </div>
</div>
    </div>

    <div class="roundbox sidebox" style="">
            <div class="roundbox-lt">&nbsp;</div>
            <div class="roundbox-rt">&nbsp;</div>
        <div class="caption titled">→ Settings
            <div class="top-links">
            </div>
        </div>
        <div class="smaller" style="margin: 1em">
            <input id="change-hide-tag-status" type="checkbox" data-newshowtagvalue="false" checked="">
            <label for="change-hide-tag-status" style="vertical-align: top">Show tags for unsolved problems</label>
        </div>
        <div class="smaller" style="margin: 1em">
            <input id="change-hide-solved-status" type="checkbox" data-newhidesolvedvalue="true">
            <label for="change-hide-solved-status" style="vertical-align: top">Hide solved problems</label>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready(function () {
        $("#change-hide-tag-status").click(function () {
            $(this).attr("disabled", "true");
            $.post("/data/problemset/setShowTags"
                ,{showTags : $(this).attr("data-newShowTagValue"), action : "setShowTags"}
                ,function(response){
                    if (response["success"] == "true") {
                        location.reload();
                    }
                    $(this).removeAttr("disabled");
                }
                ,"json"
            );
        });

        $("#change-hide-solved-status").click(function () {
            $(this).attr("disabled", "true");
            $.post(
                "/data/problemset/setShowTags",
                {
                    hideSolved: $(this).attr("data-newHideSolvedValue"),
                    action : "setHideSolved"
                },
                function(response) {
                    if (response["success"] == "true") {
                        location.reload();
                    }
                    $(this).removeAttr("disabled");
                },
                "json"
            );
        });
        });
    </script>

    <style type="text/css">
        .text-align-left {
            text-align: left !important;
        }
    </style>
    <div class="roundbox sidebox" style="">
            <div class="roundbox-lt">&nbsp;</div>
            <div class="roundbox-rt">&nbsp;</div>
        <div class="caption titled">→ Last unsolved
            <div class="top-links">
            </div>
        </div>
        <table class="rtable smaller">
            <tbody>
                <tr>
                            <th class="left " style="width:2.25em;">#</th>
                            <th class=" text-align-left">Name</th>
                            <th class=" " style="width:5em;">Last submission</th>
                </tr>
                    <tr>
                                <td class="left  dark "><a href="/problemset/problem/1684/F">1684F</a></td>
                                <td class=" dark text-align-left"><a href="/problemset/problem/1684/F">Diverse Segments</a></td>
                                <td class=" dark "><a href="/contest/1684/submission/158093166">158093166</a></td>
                    </tr>
                    <tr>
                                <td class="left  "><a href="/problemset/problem/1675/B">1675B</a></td>
                                <td class=" text-align-left"><a href="/problemset/problem/1675/B">Make It Increasing</a></td>
                                <td class=" "><a href="/contest/1675/submission/156682038">156682038</a></td>
                    </tr>
                    <tr>
                                <td class="left  dark "><a href="/problemset/problem/1626/B">1626B</a></td>
                                <td class=" dark text-align-left"><a href="/problemset/problem/1626/B">Minor Reduction</a></td>
                                <td class=" dark "><a href="/contest/1626/submission/144457854">144457854</a></td>
                    </tr>
                    <tr>
                                <td class="left  "><a href="/problemset/problem/1593/E">1593E</a></td>
                                <td class=" text-align-left"><a href="/problemset/problem/1593/E">Gardener and Tree</a></td>
                                <td class=" "><a href="/contest/1593/submission/131847370">131847370</a></td>
                    </tr>
                    <tr>
                                <td class="left  dark "><a href="/problemset/problem/1579/D">1579D</a></td>
                                <td class=" dark text-align-left"><a href="/problemset/problem/1579/D">Productive Meeting</a></td>
                                <td class=" dark "><a href="/contest/1579/submission/130186611">130186611</a></td>
                    </tr>
                    <tr>
                                <td class="left  "><a href="/problemset/problem/1579/B">1579B</a></td>
                                <td class=" text-align-left"><a href="/problemset/problem/1579/B">Shifting Sort</a></td>
                                <td class=" "><a href="/contest/1579/submission/130125466">130125466</a></td>
                    </tr>
                    <tr>
                                <td class="left  dark "><a href="/problemset/problem/1574/C">1574C</a></td>
                                <td class=" dark text-align-left"><a href="/problemset/problem/1574/C">Slay the Dragon</a></td>
                                <td class=" dark "><a href="/contest/1574/submission/129412412">129412412</a></td>
                    </tr>
                    <tr>
                                <td class="left  "><a href="/problemset/problem/810/B">810B</a></td>
                                <td class=" text-align-left"><a href="/problemset/problem/810/B">Summer sell-off</a></td>
                                <td class=" "><a href="/contest/810/submission/128977273">128977273</a></td>
                    </tr>
                    <tr>
                                <td class="left  dark "><a href="/problemset/problem/1459/B">1459B</a></td>
                                <td class=" dark text-align-left"><a href="/problemset/problem/1459/B">Move and Turn</a></td>
                                <td class=" dark "><a href="/contest/1459/submission/128379355">128379355</a></td>
                    </tr>
                    <tr>
                                <td class="left  "><a href="/problemset/problem/359/C">359C</a></td>
                                <td class=" text-align-left"><a href="/problemset/problem/359/C">Prime Number</a></td>
                                <td class=" "><a href="/contest/359/submission/128106597">128106597</a></td>
                    </tr>
                    <tr>
                                <td class="left  dark "><a href="/problemset/problem/268/B">268B</a></td>
                                <td class=" dark text-align-left"><a href="/problemset/problem/268/B">Buttons</a></td>
                                <td class=" dark "><a href="/contest/268/submission/127747821">127747821</a></td>
                    </tr>
                    <tr>
                                <td class="left bottom "><a href="/problemset/problem/478/C">478C</a></td>
                                <td class="bottom text-align-left"><a href="/problemset/problem/478/C">Table Decorations</a></td>
                                <td class="bottom "><a href="/contest/478/submission/126641950">126641950</a></td>
                    </tr>
            </tbody>
        </table>
    </div>
</div>
                        <div id="pageContent" class="content-with-sidebar">
                    <div class="second-level-menu">

<ul class="second-level-menu-list"><li class="backLava" style="position: absolute; display: block; margin: 0px; padding: 0px; left: 0px; top: 0px; width: 39px; height: 20px;"><div class="leftLava"></div><div class="bottomLava"></div><div class="cornerLava"></div></li>
        <li class="current selectedLava"><a href="/problemset">Main</a></li>
        <li><a href="/problemsets/acmsguru">acmsguru</a></li>
</ul>
<span style="position:relative;vertical-align:top;">|</span>

<ul class="second-level-menu-list"><li class="backLava" style="position: absolute; display: block; margin: 0px; padding: 0px; left: 63.45px; top: 0px; width: 50px; height: 20px;"><div class="leftLava"></div><div class="bottomLava"></div><div class="cornerLava"></div></li>
        <li><a href="/problemset">Problems</a></li>
        <li class="current selectedLava"><a href="/problemset/submit">Submit</a></li>
        <li><a href="/problemset/status">Status</a></li>
        <li><a href="/problemset/standings">Standings</a></li>
        <li><a href="/problemset/customtest">Custom test</a></li>
</ul>
</div>

<style>
    .submit-form.output-only select[name='programTypeId'],
    .submitForm.output-only select[name='programTypeId'],
    .submit-form.output-only .programSourceTr {
        display: none !important;
    }

    .submit-form.output-only .programTypeNotice,
    .submitForm.output-only .programTypeNotice {
        display: none !important;
    }

    .outputOnlyProgramTypeIdNotice {
        display: none;
        font-size: 1.1rem !important;
    }

    .submit-form.output-only .outputOnlyProgramTypeIdNotice,
    .submitForm.output-only .outputOnlyProgramTypeIdNotice {
        display: block !important;
    }
</style>

    <div style="margin: 0 auto; text-align: center; padding: 1.5em 0 0.5em 0; font-size: 1.25em;">Submit solution</div>


    <form class="submit-form" method="post" action="?csrf_token=8beb62afc8d3bb42c0eae0a34f1913d5" enctype="multipart/form-data"><input type="hidden" name="csrf_token" value="8beb62afc8d3bb42c0eae0a34f1913d5">
        <input type="hidden" name="ftaa" value="">
        <input type="hidden" name="bfaa" value="">
        <input type="hidden" name="action" value="submitSolutionFormSubmitted">

        <table class="table-form" style="width: 90%;">
            <tbody><tr>
                <td class="field-name">Problem:</td>
                <td>
                  <input name="submittedProblemCode" id="amanproblemcode" value="">
                    <span class="small notice">Enter problem code, like 33A</span>
                </td>
            </tr>
            <tr class="subscription-row">
                <td>&nbsp;</td>
                <td>
                    <div class="shiftUp error__submittedProblemIndex" style="width: 300px;">
                        <span class="error for__submittedProblemIndex" style="display: none;">&nbsp;</span>
                        <span class="notice for__submittedProblemIndex">&nbsp;</span>
                    </div>
                </td>
            </tr>

            <tr>
                <td class="field-name">Language:</td>
                <td>
                    <select style="width: 300px;" name="programTypeId">
                            <option value="61">GNU G++17 9.2.0 (64 bit, msys 2)</option>
                            
                    </select>
                    <div><span class="programTypeNotice notice smaller"></span></div>
                    <div class="outputOnlyProgramTypeIdNotice">ZIP</div>
                </td>
            </tr>

            <tr class="programSourceTr">
                <td class="field-name">Source code:</td>
                <td style="padding-bottom: 0.7em;" class="aceEditorTd">
    <textarea id="sourceCodeTextarea" name="source" style="box-sizing: border-box; width: 100%; height: 370px;"></textarea>
    <div id="editor" class="aceSupportsSafeFormsLeave ace_editor ace-chrome" style="box-sizing: border-box; height: 370px; border: 1px solid rgb(170, 170, 170); width: 100% !important; display: block;"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 14.4px; width: 6.59775px; left: 44px; top: 0px;"></textarea><div class="ace_gutter"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 396.8px; width: 40px;"><div class="ace_gutter-cell " style="height: 14.4px;">1</div></div><div class="ace_gutter-active-line" style="top: 0px; height: 14.4px;"></div></div><div class="ace_scroller" style="left: 40px; right: 0px; bottom: 0px;"><div class="ace_content" style="margin-top: 0px; width: 342px; height: 396.8px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 531.82px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height:14.40000057220459px;top:0px;left:0;right:0;"></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:14.40000057220459px"></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="left: 4px; top: 0px; width: 6.59775px; height: 14.4px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="display: none; width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 14.4px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 40px; right: 0px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 382px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>
    <input type="checkbox" id="toggleEditorCheckbox"><label style="font-size: 1.2rem; margin-left: 1em;" for="toggleEditorCheckbox" class="toggleEditorCheckboxLabel">Switch off editor</label>
    <div class="small tabSizeDiv" style="float: right; margin-top: 0.2em;">
        <label for="tabSizeInput" style="margin-right: 1em;">Tab size:</label>
        <input style="width:3em;" type="number" id="tabSizeInput" name="tabSize" value="4">
    </div>
                </td>
            </tr>

            <tr>
                <td class="field-name">Or choose file:</td>
                <td>
                    <input name="sourceFile" type="file" value="">
                </td>
            </tr>


            <tr>
                <td colspan="2">
                    <div style="text-align: center;">

                        <div style="display: inline-block; position: relative;">
                            <input class="submit" type="submit" value="Submit">
                            <img class="ajax-loading-gif" src="//codeforces.org/s/98670/images/ajax-loading-24x24.gif">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody></table>
    <input type="hidden" name="_tta" value="458"></form>

    <script type="text/javascript">
        var extensionMap = {
            "43":
                    "program.c"
                ,
            "52":
                    "program.cpp"
                ,
            "50":
                    "program.cpp"
                ,
            "54":
                    "program.cpp"
                ,
            "73":
                    "program.cpp"
                ,
            "59":
                    "program.cpp"
                ,
            "61":
                    "program.cpp"
                ,
            "65":
                    "program.cs"
                ,
            "79":
                    "program.cs"
                ,
            "9":
                    "program.cs"
                ,
            "28":
                    "program.d"
                ,
            "32":
                    "program.go"
                ,
            "12":
                    "program.hs"
                ,
            "60":
                    "[^{}]*public\\s+(final)?\\s*class\\s+(\\w+).*|$2.java"
                ,
            "36":
                    "[^{}]*public\\s+(final)?\\s*class\\s+(\\w+).*|$2.java"
                ,
            "48":
                    "program.kt"
                ,
            "72":
                    "program.kt"
                ,
            "77":
                    "program.kt"
                ,
            "19":
                    "program.ml"
                ,
            "3":
                    "program.dpr"
                ,
            "4":
                    "program.pas"
                ,
            "51":
                    "program.pas"
                ,
            "13":
                    "program.pl"
                ,
            "6":
                    "program.php"
                ,
            "7":
                    "program.py"
                ,
            "31":
                        "a.py"
                ,
            "40":
                        "a.py"
                ,
            "41":
                        "a.py"
                ,
            "70":
                        "a.py"
                ,
            "67":
                    "program.rb"
                ,
            "75":
                    "program.rs"
                ,
            "20":
                    "[^{}]*object\\s+(\\w+).*|$1.scala"
                ,
            "34":
                    "program.js"
                ,
            "55":
                    "program.js"
                ,
            "14":
                    "program.tcl"
                ,
            "15":
                    "program.io"
                ,
            "17":
                    "program.pike"
                ,
            "18":
                    "program.bfng"
                ,
            "22":
                    "program.opencobol"
                ,
            "25":
                    "program.factor"
                ,
            "26":
                    "program.secret_171"
                ,
            "27":
                    "program.roco"
                ,
            "33":
                    "program.ada"
                ,
            "38":
                    "program.f"
                ,
            "39":
                    "program.false"
                ,
            "44":
                    "program.pi"
                ,
            "45":
                    "program.cpp11-zip"
                ,
            "46":
                    "program.java8-zip"
                ,
            "47":
                    "program.ijs"
                ,
            "56":
                    "program.qs"
                ,
            "57":
                    "program.txt"
                ,
            "62":
                    "program.arnoldc"
                ,
            "68":
                    "[^\\\"\']+|program.srs"
                
        };
        $(function() {
            $("#editor").css("display", "block");
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/chrome");
            editor.setShowPrintMargin(false);
            editor.setOptions({
                enableBasicAutocompletion: true,
                tabSize: parseInt($("#tabSizeInput").val())
            });

            var modelist = ace.require("ace/ext/modelist");
            function setAceMode() {
                var filePath = extensionMap[$("select[name=programTypeId]").val()];
                // info("MODE = " + filePath);
                var mode = modelist.getModeForPath(filePath).mode;
                editor.session.setMode(mode);
            }
            setAceMode();
            $("select[name=programTypeId]").change(function() {
                setAceMode();
            });

            editor.getSession().on('change', function() {
                $("#sourceCodeTextarea").val(editor.getValue());
            });

            $("#sourceCodeTextarea").change(function() {
                editor.setValue($(this).val(), 1);
            });

            function hideShowEditor() {
                if ($("#toggleEditorCheckbox").is(":checked")) {
                    $("#editor").hide();
                    $("#sourceCodeTextarea").show();
                    $(".tabSizeDiv").hide();
                } else {
                    $("#editor").show();
                    editor.setValue(editor.getValue());
                    $("#sourceCodeTextarea").hide();
                    $(".tabSizeDiv").show();
                }
            }

            $("#toggleEditorCheckbox").change(function () {
                hideShowEditor();
                var editorEnabled = !$(this).is(":checked");

                $.post("/data/customtest", { communityCode: "", action: "setEditorEnabled", editorEnabled: editorEnabled }, function(response) {
                    // No operations.
                });

                return false;
            });

            $("#tabSizeInput").change(function () {
                var tabSize = $(this).val();
                editor.setOptions({
                    tabSize: tabSize
                });

                $.post("/data/customtest", { communityCode: "", action: "setTabSize", tabSize: tabSize }, function(response) {
                    // No operations.
                });
            });

            hideShowEditor();
        });
    </script>

    <script type="text/javascript">
        $(document).ready(function () {

        function updateFilesAndLimits() {
        if ("false" === "true") {
        return;
        }

        var problemFiles = $("#submittedProblemFiles");
        var problemLimits = $("#submittedProblemLimits");

        var problemIndex = $("select[name=submittedProblemIndex]").val();
        var option = $("select[name=submittedProblemIndex] option:selected");

        var timeLimit = option.attr("data-time-limit");
        var memoryLimit = option.attr("data-memory-limit");
        var inputFile = option.attr("data-input-file");
        var outputFile = option.attr("data-output-file");

        if (problemIndex == "") {
        problemFiles.text("");
        problemLimits.text("");
        } else {
        var filesStyle = "float: left; font-weight: bold";
        if (inputFile == "") {
        if (outputFile == "") {
        filesStyle = "float: left;";
        problemFiles.text("standard input/output");
        } else {
        problemFiles.text("standard input / " + outputFile);
        }
        } else {
        if (outputFile == "") {
        problemFiles.text(inputFile + " / standard output")
        } else {
        problemFiles.text(inputFile + " / " + outputFile);
        }
        }

        problemFiles.attr("style", filesStyle);
        problemLimits.text(timeLimit + " s, " + memoryLimit + " MB");
        }
        }

            function updateSubmitButtonState() {

            var problemIndex = $("select[name=submittedProblemIndex]").val();

            updateFilesAndLimits();
            if (problemIndex == "") {
            $(".submit-form :submit").attr("disabled", "disabled");
            } else {

            $(".submit-form :submit").removeAttr("disabled");
            }
            }

            $("select[name=submittedProblemIndex]").bind('change', updateSubmitButtonState);
            $("select[name=submittedProblemIndex]").bind('keypress', updateSubmitButtonState);
            $("select[name=submittedProblemIndex]").bind('blur', updateSubmitButtonState);
            $("select[name=submittedProblemIndex]").bind('input', updateSubmitButtonState);
            updateSubmitButtonState();



        });
    </script>

        <script type="text/javascript">
            $(function() {
                window._ftaa = "0ou7tp67v491ltuph2";
            })
        </script>

        <script type="text/javascript">
            $(function() {
                window._bfaa = "03c7e8dae486bdf07d9f29816754df03";
            });
        </script>

    <script>
        $(function () {
            function adjustNotice(programTypeId) {
                var $programTypeNotice = $(".programTypeNotice");
                $programTypeNotice.text("");
                if (programTypeId === 7) {
                    $programTypeNotice.text("Almost always, if you send a solution on PyPy, it works much faster");
                }
                if (programTypeId === 31) {
                    $programTypeNotice.text("Almost always, if you send a solution on PyPy, it works much faster");
                }
            }

            adjustNotice(54);

            const $submittedProblemIndex = $("select[name='submittedProblemIndex']");

            function adjustSubmittedProblemIndex() {
                const index = $submittedProblemIndex.val();
                const outputOnlyIndices = [];
                const outputOnly = outputOnlyIndices.indexOf(index) >= 0;
                if (outputOnly) {
                    $submittedProblemIndex.closest(".submit-form").addClass("output-only");
                } else {
                    $submittedProblemIndex.closest(".submit-form").removeClass("output-only");
                }
            }


            $submittedProblemIndex.change(function () {
                adjustSubmittedProblemIndex();
            });

            adjustSubmittedProblemIndex();

            $("select[name='programTypeId']").change(function () {
                adjustNotice(parseInt($(this).val()));
            });

            $(".submit-form, .submitForm").submitOnce(function () {
                var form = $(this);
                var $ftaa = form.find("input[name='ftaa']");
                var $bfaa = form.find("input[name='bfaa']");

                if (window._ftaa && window._bfaa) {
                    $ftaa.val(window._ftaa);
                    $bfaa.val(window._bfaa);
                }

                if (form.attr("enctype") === "multipart/form-data") {
                    var sourceFiles = form.find(".table-form input[name=sourceFile]");

                    if (sourceFiles.length === 1 && sourceFiles[0].files && sourceFiles[0].files.length === 0) {
                        form.removeAttr("enctype");
                    }
                }

                return true;
            });
        });
    </script>
                </div>
        </div>
            <br style="clear: both;">
            <div id="footer">
                <div><a href="https://codeforces.com/">Codeforces</a> (c) Copyright 2010-2022 Mike Mirzayanov</div>
                <div>The only programming contests Web 2.0 platform</div>
                    <div>Server time: May/23/2022 02:15:13<sup title="timezone offset" style="font-size:8px;">UTC+5.5</sup> (j1).</div>
                    <div>Desktop version, switch to <a rel="nofollow" class="switchToMobile" href="?mobile=true">mobile version</a>.</div>
                <div class="smaller"><a href="/privacy">Privacy Policy</a></div>

                    <div style="margin-top: 25px;">
                        Supported by
                    </div>
                    <div style="margin-top: 8px; padding-bottom: 20px; position: relative; left: 10px;">
                        <a href="https://telegram.org/"><img style="margin-right: 2em; width: 60px;" src="//codeforces.org/s/23975/images/telegram-100x100.png" alt="Telegram" title="Telegram"></a>
                        <a href="http://ifmo.ru/en/"><img style="width: 120px;" src="//codeforces.org/s/23975/images/itmo_small_en-logo.png" alt="ИТМО" title="ИТМО"></a>
                    </div>
            </div>
        <script type="text/javascript">
            $(function() {
                $(".switchToMobile").click(function() {
                    Codeforces.redirect(Codeforces.updateUrlParameter(document.location.href, "mobile", "true"));
                    return false;
                });
                $(".switchToDesktop").click(function() {
                    Codeforces.redirect(Codeforces.updateUrlParameter(document.location.href, "mobile", "false"));
                    return false;
                });
            });
        </script>
    <script type="text/javascript">
        $(document).ready(function () {
            if ($(window).width() < 1600) {
                $('.button-up').css('width', '30px').css('line-height', '30px').css('font-size', '20px');
            }

            if ($(window).width() >= 1200) {
                $ (window).scroll (function () {
                    if ($ (this).scrollTop () > 100) {
                        $ ('.button-up').fadeIn();
                    } else {
                        $ ('.button-up').fadeOut();
                    }
                });

                $('.button-up').click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 500);
                    return false;
                });

                $('.button-up').hover(function () {
                    $(this).animate({
                        'opacity':'1'
                    }).css({'background-color':'#e7ebf0','color':'#6a86a4'});
                }, function () {
                    $(this).animate({
                        'opacity':'0.7'
                    }).css({'background':'none','color':'#d3dbe4'});;
                });
            }
            Codeforces.focusOnError();
        });
    </script>
    <div class="userListsFacebox" style="display:none;">
        <div style="padding: 0.5em; width: 600px; max-height: 200px; overflow-y: auto">
<div class="datatable" style="background-color: #E1E1E1; padding-bottom: 3px;">
            <div class="lt">&nbsp;</div>
            <div class="rt">&nbsp;</div>
            <div class="lb">&nbsp;</div>
            <div class="rb">&nbsp;</div>

            <div style="padding: 4px 0 0 6px;font-size:1.4rem;position:relative;">
                User lists

                <div style="position:absolute;right:0.25em;top:0.35em;">
                    <span style="padding:0;position:relative;bottom:2px;" class="rowCount"></span>

                    <img class="closed" src="//codeforces.org/s/23975/images/icons/control.png">

                    <span class="filter" style="display:none;">
                        <img class="opened" src="//codeforces.org/s/23975/images/icons/control-270.png">
                        <input style="padding:0 0 0 20px;position:relative;bottom:2px;border:1px solid #aaa;height:17px;font-size:1.3rem;">
                    </span>
                </div>
            </div>
            <div style="background-color: white;margin:0.3em 3px 0 3px;position:relative;">
            <div class="ilt">&nbsp;</div>
            <div class="irt">&nbsp;</div>
            <table class="">
                <thead>
                <tr>
                    <th class="top left right">Name</th>
                </tr>
                </thead>
                <tbody>
                <tr class="no-items visible"><td style="text-align:left;" colspan="32" class="bottom dark left right">No items</td></tr></tbody>
            </table>
            </div>
        </div>
    <script type="text/javascript">
        $(document).ready(function () {
                // Create new ':containsIgnoreCase' selector for search
                jQuery.expr[':'].containsIgnoreCase = function(a, i, m) {
                    return jQuery(a).text().toUpperCase()
                            .indexOf(m[3].toUpperCase()) >= 0;
                };

                if (window.updateDatatableFilter == undefined) {
                    window.updateDatatableFilter = function(i) {
                        var parent = $(i).parent().parent().parent().parent();
                        $("tr.no-items", parent).remove();
                        $("tr", parent).hide().removeClass('visible');
                        var text = $(i).val();
                        if (text) {
                            $("tr" + ":containsIgnoreCase('" + text + "')", parent).show().addClass('visible');
                        } else {
                            parent.find(".rowCount").text("");
                            $("tr", parent).show().addClass('visible');
                        }

                        var found = false;
                        var visibleRowCount = 0;
                        $("tr", parent).each(function () {
                            if (!found) {
                                if ($(this).find("th").size() > 0) {
                                    $(this).show().addClass('visible');
                                    found = true;
                                }
                            }
                            if ($(this).hasClass('visible')) {
                                visibleRowCount++;
                            }
                        });
                        if (text) {
                            parent.find(".rowCount").text("Matches: " + (visibleRowCount - (found ? 1 : 0)));
                        }
                        if (visibleRowCount == (found ? 1 : 0)) {
                            $("<tr class='no-items visible'><td style=\"text-align:left;\"colspan=\"32\">No items<\/td><\/tr>").appendTo($(parent).find('table'));
                        }
                        $(parent).find("tr td").removeClass("dark");
                        $(parent).find("tr.visible:odd td").addClass("dark");
                    }

                    $(".datatable .closed").click(function () {
                        var parent = $(this).parent();
                        $(this).hide();
                        $(".filter", parent).fadeIn(function () {
                            $("input", parent).val("").focus().css("border", "1px solid #aaa");
                        });
                    });

                    $(".datatable .opened").click(function () {
                        var parent = $(this).parent().parent();
                        $(".filter", parent).fadeOut(function () {
                            $(".closed", parent).show();
                            $("input", parent).val("").each(function () {
                                window.updateDatatableFilter(this);
                            });
                        });
                    });

                    $(".datatable .filter input").keyup(function(e) {
                        window.updateDatatableFilter(this);
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    $(".datatable table").each(function () {
                        var found = false;
                        $("tr", this).each(function () {
                            if (!found && $(this).find("th").size() == 0) {
                                found = true;
                            }
                        });
                        if (!found) {
                            $("<tr class='no-items visible'><td style=\"text-align:left;\"colspan=\"32\">No items<\/td><\/tr>").appendTo(this);
                        }
                    });

                    // Applies styles to datatables.
                    $(".datatable").each(function () {
                        $(this).find("tr:first th").addClass("top");
                        $(this).find("tr:last td").addClass("bottom");
                        $(this).find("tr:odd td").addClass("dark");
                        $(this).find("tr td:first-child, tr th:first-child").addClass("left");
                        $(this).find("tr td:last-child, tr th:last-child").addClass("right");
                    });

                    $(".datatable table.tablesorter").each(function () {
                        $(this).bind("sortEnd", function () {
                            $(".datatable").each(function () {
                                $(this).find("th, td")
                                    .removeClass("top").removeClass("bottom")
                                    .removeClass("left").removeClass("right")
                                    .removeClass("dark");
                                $(this).find("tr:first th").addClass("top");
                                $(this).find("tr:last td").addClass("bottom");
                                $(this).find("tr:odd td").addClass("dark");
                                $(this).find("tr td:first-child, tr th:first-child").addClass("left");
                                $(this).find("tr td:last-child, tr th:last-child").addClass("right");
                            });
                        });
                    });
                }
        });
    </script>
        </div>
    </div>
    <script type="application/javascript">
        $(function() {
            $(".userListMarker").click(function() {
                $.post("/data/lists", {action: "findTouched"}, function(json) {
                    Codeforces.facebox(".userListsFacebox");
                    var tbody = $("#facebox tbody");
                    tbody.empty();
                    for (var i in json) {
                        tbody.append(
                            $("<tr></tr>").append(
                                $("<td></td>").attr("data-readKey", json[i].readKey).text(json[i].name)
                            )
                        );
                    }
                    Codeforces.updateDatatables();
                    tbody.find("td").css("cursor", "pointer").click(function() {
                        document.location = Codeforces.updateUrlParameter(document.location.href, "list", $(this).attr("data-readKey"));
                    });
                }, "json");
            });
        });
    </script>
</div>
    <script type="application/javascript">
        if ('serviceWorker' in navigator && 'fetch' in window && 'caches' in window) {
            var parser = new UAParser();
            var browserName = parser.getBrowser().name;
            var browserVersion = parser.getBrowser().version;

            var supportedBrowser = false;
            var supportedBrowsers = {
                "Chrome": "76",
                "Firefox": "68",
                // "Edge": "18",
                "Safari": "12.1",
                "Opera": "63",
                "Yandex": "19.9"
            };

            for (var name in supportedBrowsers) {
                if (name === browserName && supportedBrowsers[name] <= browserVersion) {
                    supportedBrowser = true;
                }
            }

            if (supportedBrowser) {
                navigator.serviceWorker.register('/service-worker-98670.js')
                    .then(function (registration) {
                        console.log('Service worker registered');
                    })
                    .catch(function (error) {
                        console.log('Registration failed: ', error);
                    });
            } else {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var i = 0; i < registrations.length; i++) {
                        registrations[i].unregister();
                    }
                });
            }
        }
    </script>


<div id="datepick-div" style="display: none;"></div><div id="cboxOverlay" style="display: none;"></div><div id="colorbox" class="" style="display: none; padding-bottom: 42px; padding-right: 42px;"><div id="cboxWrapper"><div><div id="cboxTopLeft" style="float: left;"></div><div id="cboxTopCenter" style="float: left;"></div><div id="cboxTopRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxMiddleLeft" style="float: left;"></div><div id="cboxContent" style="float: left;"><div id="cboxLoadedContent" style="width: 0px; height: 0px; overflow: hidden; float: left;"></div><div id="cboxLoadingOverlay" style="float: left;"></div><div id="cboxLoadingGraphic" style="float: left;"></div><div id="cboxTitle" style="float: left;"></div><div id="cboxCurrent" style="float: left;"></div><div id="cboxNext" style="float: left;"></div><div id="cboxPrevious" style="float: left;"></div><div id="cboxSlideshow" style="float: left;"></div><div id="cboxClose" style="float: left;"></div></div><div id="cboxMiddleRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxBottomLeft" style="float: left;"></div><div id="cboxBottomCenter" style="float: left;"></div><div id="cboxBottomRight" style="float: left;"></div></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div></div><div style="position: absolute; width: 0px; height: 0px; overflow: hidden; padding: 0px; border: 0px; margin: 0px;"><div id="MathJax_Font_Test" style="position: absolute; visibility: hidden; top: 0px; left: 0px; width: auto; min-width: 0px; max-width: none; padding: 0px; border: 0px; margin: 0px; white-space: nowrap; text-align: left; text-indent: 0px; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; font-size: 40px; font-weight: normal; font-style: normal; font-family: MathJax_Size1, sans-serif;"></div></div></body></html></div>`;

  document
    .getElementById("aman_editor")
    .contentWindow.postMessage("send_code", "*");

  window.addEventListener("message", (event) => {
    // alert("aaya");
    const { data } = event;
    // alert(data);
    // if (data == "update_a") {
    // a = false;

    //   document.getElementById("aman_editor").style.width = "100%";
    // } else {
    parent.innerHTML += submit_code_window;
    document.getElementsByClassName("table-form")[0].remove();
    document.getElementById("sourceCodeTextarea").value += data;

    const myArray = aman_url.split("/");
    var aman_contest_id = myArray[myArray.length - 2];
    var aman_index = myArray[myArray.length - 1];
    var questionid = aman_contest_id + aman_index;
    document.getElementById("amanproblemcode").value =
      document.getElementById("amanproblemcode").value + questionid;
    document.getElementById("amanparse").style.display = "none";
    document.getElementsByClassName("submit")[0].click();
  });
};
