const body = document.querySelector("svg");
const grow = document.querySelector("#grow");
const end = document.querySelector("#end");
const ring = document.querySelector("#ring");

const colors = ["green", "gold", "red"];

let followRing = 170;
let followMouse = 0;

const mod = (n, d) => ((n % d) + d) % d;

function braid(newCount) {
  const count = grow.children.length;
  if (newCount === count) return;

  if (newCount < count) {
    for (let i = newCount; i < count; i++) {
      const g = grow.children[i];
      if (grow.children[i]) grow.removeChild(g);
    }
  } else {
    for (let i = count; i < newCount; i++) {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      grow.append(g);
      if (mod(i, 2)) {
        g.outerHTML = `<g id="run11" mask="url(#mrun1)" transform="matrix(1 0 0 -1 ${
          10 + Math.floor(i / 2) * 20
        } 70)">
   <use xlink:href="#b1" class="thread" />
   <rect x="35" y="10" width="30" height="32" transform="matrix(1,0,0,-1,30,69)" class="shadow-upper" />
   <use xlink:href="#hrun1" transform="matrix(1,0,0,-1,-10,70)" class="light" />
  </g>`;
      } else {
        g.outerHTML = `<g id="run12" mask="url(#mrun1)" transform="translate(${
          Math.floor(i / 2) * 20
        })">
   <use xlink:href="#b1" class="thread" />
   <rect x="35" y="-5" width="30" height="35" transform="translate(30 29)" class="shadow-lower" />
   <use xlink:href="#hrun2" class="light" />
  </g>`;
      }
    }
  }

  end.setAttribute("transform", `translate(${newCount * 10 - 60})`);
  for (let [i, g] of [...end.children].entries()) {
    g.classList.toggle("active", (newCount + i + 1) % 2);

    for (let thread of g.querySelectorAll(".thread")) {
      const base = parseFloat(thread.dataset.color);

      colors.forEach((c) => thread.classList.remove(c));
      thread.classList.add(colors[mod(base + Math.floor(newCount / 2), 3)]);
    }
  }
}

const follow = (event) => {
  const mx = body.getScreenCTM().inverse();
  let x = new DOMPoint(event.clientX, event.clientY).matrixTransform(mx).x;

  x = Math.max(x, 105);
  x = Math.min(x, 585);

  ring.setAttribute("transform", `translate(${followRing + x - followMouse})`);

  braid(Math.floor((x - 105) / 10));
};

ring.addEventListener("mousedown", (event) => {
  const mx = body.getScreenCTM().inverse();
  followMouse = new DOMPoint(event.clientX, event.clientY).matrixTransform(mx)
    .x;

  body.addEventListener("mousemove", follow);
});

body.addEventListener("mouseup", () => {
  body.removeEventListener("mousemove", follow);

  followRing = 110 + grow.children.length * 10;
  ring.setAttribute("transform", `translate(${followRing})`);
});
