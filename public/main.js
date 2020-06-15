console.log("get it ");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log(request.response);
    console.log("success");
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("failure");
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.html");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    } else {
      console.log("加载失败了");
    }
  };
  request.send();
};

changeCOLOR.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = document.createElement("style");
      // 填写 style 内容
      style.innerHTML = request.response;
      // 插到头里面
      document.head.appendChild(style);
    } else {
      console.log("失败了");
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      console.log(object);
    }
  };
  request.send();
};
