Template.xedit.rendered = function () {
  $('#textArea.editable').editable({
    success: function(response,newValue) {
      console.log(newValue);
    },
    wysihtml5: {
      "color":true //,
      //"lists":true,
      //"link": true
    }
  });
}
