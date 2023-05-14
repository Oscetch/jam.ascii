var testButton;

function createButton(canvas) {
  return new Button(
    `
▎ PRESS 
▂▂▂▂▂▂▂`,
    ` ²²² ²² 
²²²²²²²²²
²² ²²²  `,
    canvas,
    function () {
      console.log("clicked");
    }
  );
}
