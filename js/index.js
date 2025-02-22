window.onload = function () {
    let yjms = 1
    let linkElement = document.getElementById('YJ');
    let qhtt = document.getElementById('qhtt');
    function yq() {
        if (yjms == 0) {
            console.log("执行了yq1");
            linkElement.href = 'css/hei.css'
            qhtt.src = 'images/rijian2.png'
            yjms = 1
        } else {
            console.log("执行了yq2")
            linkElement.href = '#'
            yjms = 0
            qhtt.src = 'images/rijian.png'
        }
    }

    document.getElementById('ppt2').addEventListener('click', function () { yq() });


    // --------------------------时间-------------------
  let nowtimeDiv = document.getElementById('nowtime');
  setInterval(() => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedTime = `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
      nowtimeDiv.textContent = `当前时间>> ${formattedTime}`
  }, 1000);
}