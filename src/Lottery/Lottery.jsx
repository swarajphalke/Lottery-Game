// Lottery.jsx
import { useState } from "react";
import { genTicket, sum } from "./Helper.js";
import Ticket from './Ticket.jsx'

export default function Lottery({n=3,winningSum=15}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket =()=>{
    setTicket(genTicket(n));
  }

  return (
    <div>
      <h1>Lottery Game !</h1>
       <Ticket ticket={ticket}/>
      <br />
      <button onClick={buyTicket}>
        Buy New Ticket
      </button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
