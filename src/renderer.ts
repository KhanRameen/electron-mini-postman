console.log("renderer running");
console.log("window.versions:", window);

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};

func();

const information = document.getElementById("info");
information!.innerText = `This app is using Chrome`;
