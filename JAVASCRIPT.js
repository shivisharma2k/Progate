const game =() =>{
	let pScore=0;
	let cScore=0;
	const playMatch =() =>{
		const options = document.querySelectorAll('.content-image  button');
		const playerHand = document.querySelector('.player');
		const compHand = document.querySelector('.computer');

		const computerOption = ["rock", "paper", "scissors"];
		options.forEach(option=>{
			option.addEventListener('click',function(){
				if(this.className==='reset'){
					pScore=0, cScore=0;
					playerHand.src = 'rock.png';
					compHand.src = 'rock.png';
					const winner = document.querySelector('.winner');
					winner.textContent = 'Welcome!';
					updateScore();
				}
				else{
					const computerNumber = Math.floor(Math.random()*3);
					const computerChoice = computerOption[computerNumber];
				
					compareHands(this.className, computerChoice);
			
					playerHand.src = `${this.className}.png`;
					compHand.src = `${computerChoice}.png`;
				}
			});
		});
	};
	const reset = () =>{
		
	};
	const updateScore = () => {
		const playerScore = document.querySelector('.score1');
		const compScore = document.querySelector('.score2');
		playerScore.textContent = `You : ${pScore}`;
		compScore.textContent = `Computer : ${cScore}`;
	};
	
	const compareHands = (playerChoice, computerChoice) =>{
		const winner = document.querySelector('.winner');
		if(playerChoice===computerChoice){
			winner.textContent = 'It is a tie';
			return;
		}
		if(playerChoice === 'rock'){
			if(computerChoice === 'scissors'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
			else{
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
		if(playerChoice === 'paper'){
			if(computerChoice === 'scissors'){
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
			else{
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}
		if(playerChoice === 'scissors'){
			if(computerChoice === 'paper'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
			else{
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
	};
	playMatch();
};
game();