function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  New folder\\0001.png
  New folder\\0002.png
  New folder\\0003.png
  New folder\\0004.png
  New folder\\0005.png
  New folder\\0006.png
  New folder\\0007.png
  New folder\\0008.png
  New folder\\0009.png
  New folder\\0010.png
  New folder\\0011.png
  New folder\\0012.png
  New folder\\0013.png
  New folder\\0014.png
  New folder\\0015.png
  New folder\\0016.png
  New folder\\0017.png
  New folder\\0018.png
  New folder\\0019.png
  New folder\\0020.png
  New folder\\0021.png
  New folder\\0022.png
  New folder\\0023.png
  New folder\\0024.png
  New folder\\0025.png
  New folder\\0026.png
  New folder\\0027.png
  New folder\\0028.png
  New folder\\0029.png
  New folder\\0030.png
  New folder\\0031.png
  New folder\\0032.png
  New folder\\0033.png
  New folder\\0034.png
  New folder\\0035.png
  New folder\\0036.png
  New folder\\0037.png
  New folder\\0038.png
  New folder\\0039.png
  New folder\\0040.png
  New folder\\0041.png
  New folder\\0042.png
  New folder\\0043.png
  New folder\\0044.png
  New folder\\0045.png
  New folder\\0046.png
  New folder\\0047.png
  New folder\\0048.png
  New folder\\0049.png
  New folder\\0050.png
  New folder\\0051.png
  New folder\\0052.png
  New folder\\0053.png
  New folder\\0054.png
  New folder\\0055.png
  New folder\\0056.png
  New folder\\0057.png
  New folder\\0058.png
  New folder\\0059.png
  New folder\\0060.png
  New folder\\0061.png
  New folder\\0062.png
  New folder\\0063.png
  New folder\\0064.png
  New folder\\0065.png
  New folder\\0066.png
  New folder\\0067.png
  New folder\\0068.png
  New folder\\0069.png
  New folder\\0070.png
  New folder\\0071.png
  New folder\\0072.png
  New folder\\0073.png
  New folder\\0074.png
  New folder\\0075.png
  New folder\\0076.png
  New folder\\0077.png
  New folder\\0078.png
  New folder\\0079.png
  New folder\\0080.png
  New folder\\0081.png
  New folder\\0082.png
  New folder\\0083.png
  New folder\\0084.png
  New folder\\0085.png
  New folder\\0086.png
  New folder\\0087.png
  New folder\\0088.png
  New folder\\0089.png
  New folder\\0090.png
  New folder\\0091.png
  New folder\\0092.png
  New folder\\0093.png
  New folder\\0094.png
  New folder\\0095.png
  New folder\\0096.png
  New folder\\0097.png
  New folder\\0098.png
  New folder\\0099.png
  New folder\\0100.png
New folder (2)\\0101.png
New folder (2)\\0102.png
New folder (2)\\0103.png
New folder (2)\\0104.png
New folder (2)\\0105.png
New folder (2)\\0106.png
New folder (2)\\0107.png
New folder (2)\\0108.png
New folder (2)\\0109.png
New folder (2)\\0110.png
New folder (2)\\0111.png
New folder (2)\\0112.png
New folder (2)\\0113.png
New folder (2)\\0114.png
New folder (2)\\0115.png
New folder (2)\\0116.png
New folder (2)\\0117.png
New folder (2)\\0118.png
New folder (2)\\0119.png
New folder (2)\\0120.png
New folder (2)\\0121.png
New folder (2)\\0122.png
New folder (2)\\0123.png
New folder (2)\\0124.png
New folder (2)\\0125.png
New folder (2)\\0126.png
New folder (2)\\0127.png
New folder (2)\\0128.png
New folder (2)\\0129.png
New folder (2)\\0130.png
New folder (2)\\0131.png
New folder (2)\\0132.png
New folder (2)\\0133.png
New folder (2)\\0134.png
New folder (2)\\0135.png
New folder (2)\\0136.png
New folder (2)\\0137.png
New folder (2)\\0138.png
New folder (2)\\0139.png
New folder (2)\\0140.png
New folder (2)\\0141.png
New folder (2)\\0142.png
New folder (2)\\0143.png
New folder (2)\\0144.png
New folder (2)\\0145.png
New folder (2)\\0146.png
New folder (2)\\0147.png
New folder (2)\\0148.png
New folder (2)\\0149.png
New folder (2)\\0150.png
New folder (2)\\0151.png
New folder (2)\\0152.png
New folder (2)\\0153.png
New folder (2)\\0154.png
New folder (2)\\0155.png
New folder (2)\\0156.png
New folder (2)\\0157.png
New folder (2)\\0158.png
New folder (2)\\0159.png
New folder (2)\\0160.png
New folder (2)\\0161.png
New folder (2)\\0162.png
New folder (2)\\0163.png
New folder (2)\\0164.png
New folder (2)\\0165.png
New folder (2)\\0166.png
New folder (2)\\0167.png
New folder (2)\\0168.png
New folder (2)\\0169.png
New folder (2)\\0170.png
New folder (2)\\0171.png
New folder (2)\\0172.png
New folder (2)\\0173.png
New folder (2)\\0174.png
New folder (2)\\0175.png
New folder (2)\\0176.png
New folder (2)\\0177.png
New folder (2)\\0178.png
New folder (2)\\0179.png
New folder (2)\\0180.png
New folder (2)\\0181.png
New folder (2)\\0182.png
New folder (2)\\0183.png
New folder (2)\\0184.png
New folder (2)\\0185.png
New folder (2)\\0186.png
New folder (2)\\0187.png
New folder (2)\\0188.png
New folder (2)\\0189.png
New folder (2)\\0190.png
New folder (2)\\0191.png
New folder (2)\\0192.png
New folder (2)\\0193.png
New folder (2)\\0194.png
New folder (2)\\0195.png
New folder (2)\\0196.png
New folder (2)\\0197.png
New folder (2)\\0198.png
New folder (2)\\0199.png
New folder (2)\\0200.png
New folder (3)\\0201.png
New folder (3)\\0202.png
New folder (3)\\0203.png
New folder (3)\\0204.png
New folder (3)\\0205.png
New folder (3)\\0206.png
New folder (3)\\0207.png
New folder (3)\\0208.png
New folder (3)\\0209.png
New folder (3)\\0210.png
New folder (3)\\0211.png
New folder (3)\\0212.png
New folder (3)\\0213.png
New folder (3)\\0214.png
New folder (3)\\0215.png
New folder (3)\\0216.png
New folder (3)\\0217.png
New folder (3)\\0218.png
New folder (3)\\0219.png
New folder (3)\\0220.png
New folder (3)\\0221.png
New folder (3)\\0222.png
New folder (3)\\0223.png
New folder (3)\\0224.png
New folder (3)\\0225.png
New folder (3)\\0226.png
New folder (3)\\0227.png
New folder (3)\\0228.png
New folder (3)\\0229.png
New folder (3)\\0230.png
New folder (3)\\0231.png
New folder (3)\\0232.png
New folder (3)\\0233.png
New folder (3)\\0234.png
New folder (3)\\0235.png
New folder (3)\\0236.png
New folder (3)\\0237.png
New folder (3)\\0238.png
New folder (3)\\0239.png
New folder (3)\\0240.png
New folder (3)\\0241.png
New folder (3)\\0242.png
New folder (3)\\0243.png
New folder (3)\\0244.png
New folder (3)\\0245.png
New folder (3)\\0246.png
New folder (3)\\0247.png
New folder (3)\\0248.png
New folder (3)\\0249.png
New folder (3)\\0250.png
New folder (3)\\0251.png
New folder (3)\\0252.png
New folder (3)\\0253.png
New folder (3)\\0254.png
New folder (3)\\0255.png
New folder (3)\\0256.png
New folder (3)\\0257.png
New folder (3)\\0258.png
New folder (3)\\0259.png
New folder (3)\\0260.png
New folder (3)\\0261.png
New folder (3)\\0262.png
New folder (3)\\0263.png
New folder (3)\\0264.png
New folder (3)\\0265.png
New folder (3)\\0266.png
New folder (3)\\0267.png
New folder (3)\\0268.png
New folder (3)\\0269.png
New folder (3)\\0270.png
New folder (3)\\0271.png
New folder (3)\\0272.png
New folder (3)\\0273.png
New folder (3)\\0274.png
New folder (3)\\0275.png
New folder (3)\\0276.png
New folder (3)\\0277.png
New folder (3)\\0278.png
New folder (3)\\0279.png
New folder (3)\\0280.png
New folder (3)\\0281.png
New folder (3)\\0282.png
New folder (3)\\0283.png
New folder (3)\\0284.png
New folder (3)\\0285.png
New folder (3)\\0286.png
New folder (3)\\0287.png
New folder (3)\\0288.png
New folder (3)\\0289.png
New folder (3)\\0290.png
New folder (3)\\0291.png
New folder (3)\\0292.png
New folder (3)\\0293.png
New folder (3)\\0294.png
New folder (3)\\0295.png
New folder (3)\\0296.png
New folder (3)\\0297.png
New folder (3)\\0298.png
New folder (3)\\0299.png
New folder (3)\\0300.png

 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1",{
  scrollTrigger:{
    trigger:  `#page1`,
    start:`top top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:  `#page2`,
    start:`top top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:  `#page3`,
    start:`top top`,
    pin:true,
    scroller:`#main`
  }
})