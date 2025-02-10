// 5. Rotate String 'w3resource' kiPeriodically
function stringRotate(str) {
  setInterval(() => {
    str = str.slice(-1) + str.slice(0, -1);
    // console.clear();
    console.log(str);
  }, 500);
}

stringRotate("w3resource");
