var ed = ace.edit("aman_editor");
ed.commands.addCommand({
  name: "breakTheEditor",
  // bindKey: "ctrl-v|ctrl-x|ctrl-shift-v|shift-del|cmd-c|cmd-v|cmd-x",
  exec: function () {},
});
// ed.setOptions({
//   fontFamily: "JetBrains Mono",
//   // fontSize: "16px",
// });
ed.renderer.setShowGutter(true);
ed.setTheme("ace/theme/xcode");
ed.session.setMode("ace/mode/c_cpp");

console.log("tried");
