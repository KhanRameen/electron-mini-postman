console.log("renderer running");
console.log("window:", window);
console.log("window.versions:", window.versions);

const information = document.getElementById("info");
const chromeVersion = window.versions.chrome();
information!.innerText = `This app is using Chrome V${chromeVersion}`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};

func();
