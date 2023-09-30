function draw_like_picaso() {
    const canvas = document.getElementById("canvas");
      if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
      

      ctx.beginPath();
      ctx.arc(275, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(310, 105);
      ctx.fillStyle = "rgb(255, 0, 0)";
      ctx.fill();
      ctx.arc(275, 105, 35, 0, Math.PI* 1.02, true); // Mouth (clockwise)
      ctx.moveTo(265, 55);
      ctx.arc(260, 55, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(295, 55);
      ctx.arc(290, 55, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(475, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(510, 105);
      ctx.fillStyle = "rgb(255, 152, 71)";
      ctx.fill();
      ctx.arc(475, 105, 35, Math.PI* 1.2, Math.PI* 1.2, true); // Mouth (clockwise)
      ctx.moveTo(465, 65);
      ctx.arc(460, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(495, 65);
      ctx.arc(490, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();


  }
  const sad = document.getElementById("canvas");
  if (sad.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(675, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(710, 75);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.arc(675, 75, 35, 0, Math.PI, false,); // Mouth (clockwise)
    ctx.moveTo(665, 65);
    ctx.arc(660, 65, 5, 0, Math.PI , true); // Left eye
    ctx.moveTo(695, 65);
    ctx.arc(690, 65, 5, 0, Math.PI , true); // Right eye
    ctx.stroke();


  }
}
draw_like_picaso();