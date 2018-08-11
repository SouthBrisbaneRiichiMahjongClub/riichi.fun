const bool = (x, y, p) => { if(p) { return y; } else { return x; } };

const runTimer = (time) => {
  const t = time.fromNow();
  const after = "You'll have to speak up, I'm on an island";
  const before = `Island ${t}! Get your tiles and beer ready!`;
  const now = moment();
  const duration = moment.duration(time.diff(now));


  document.querySelector('#time').innerHTML = bool(before, after, time < now);
  document.querySelector('#countdown').innerHTML = Math.trunc(duration.asSeconds());
  setTimeout(() => { runTimer(time); }, 1000); 
};
window.onload = () => { 
  runTimer(moment('2018-08-15T09:00:00+1000')); 
};

