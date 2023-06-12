document.querySelector('#flipCoin').addEventListener('click', makeReq)

// Add set time out: letting the coin flip gif complete then show result

async function makeReq(){
  const userBet = document.querySelector("#headsOrTails").value.toLowerCase();
  const res = await fetch(`/api?coin=${userBet}`)
  const data = await res.json()

  console.log(data);

  // Restart coin flip animation when user clicks button
  document.querySelector('img').src = 'https://media.tenor.com/BBNBkurGEwwAAAAC/two-face.gif';

  // Hide previous results when user clicks button again
  document.querySelector('#result').innerText = ''

  // Capitalize display results
  const titleCaseResult = data.result.charAt(0).toUpperCase() + data.result.slice(1);

  // Define if user won or lost bet
  const liveOrDie = userBet === data.result ? 'You Live' : 'You Die';

  // setTimeout for gif animation to complete then display results
  setTimeout(() => document.querySelector("#result").innerText = titleCaseResult + ' : ' + liveOrDie, 3000);
  setTimeout(() => document.querySelector('img').src = data.img, 3000)  ;
}
