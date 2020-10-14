let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG'),
		container = select('#container'),
		seg = select('.seg'),
		allSegs = []

gsap.set('svg', {
	visibility: 'visible'
})
let num = 360 / 15;
let duration = 0.25;
allSegs.push(seg);

for(var i = 1; i < (num - 8); i++) {
	let clone = seg.cloneNode(true);
	container.appendChild(clone);
	gsap.set(clone, {
		rotation: i * 15,
		svgOrigin: '400 300'
	})
	allSegs.push(clone)
}
let mainTl = gsap.timeline({});

allSegs.forEach((item, count) => {
	let tl = gsap.timeline()
	tl.to(item, {
		rotation: '-=120',
		svgOrigin: '400 300',
		repeat: -1,
		repeatRefresh: true,
		ease: 'sine.inOut',
		repeatDelay: (num - 10) * duration
	})
	mainTl.add(tl, count * duration)
})

gsap.to(container, {
	duration: 1,
	rotation: 360,
	svgOrigin: '400 300',
	ease: 'linear',
	repeat: -1
}, 0)

gsap.globalTimeline.timeScale(0.5)
