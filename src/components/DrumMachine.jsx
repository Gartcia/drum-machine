import { useEffect, useState } from 'react'
import Button from './Buttons'
import CEV from '../assets/Cev_H2.mp3'
import DSC from '../assets/Dsc_Oh.mp3'
import HE from '../assets/Heater-1.mp3'
import HEA from '../assets/Heater-2.mp3'
import HEAT from '../assets/Heater-3.mp3'
import HEATE from '../assets/Heater-4_1.mp3'
import HEATER from '../assets/Heater-6.mp3'
import HAT from '../assets/Kick_n_Hat.mp3'
import KICK from '../assets/RP4_KICK_1.mp3'
const drums = [
    {
      id: "Q",
      display: "CEV-H2",
      audio: CEV
    },
    {
      id: "W",
      display: "DSC-OH",
      audio: DSC
    },
    {
      id: "E",
      display: "HEATER-1",
      audio: HE
    },
    {
      id: "A",
      display: "HEATER-2",
      audio: HEA
    },
    {
      id: "S",
      display: "HEATER-3",
      audio: HEAT
    },
    {
      id: "D",
      display: "HEATER-4",
      audio: HEATE
    },
    {
      id: "Z",
      display: "HEATER-5",
      audio: HEATER
    },
    {
      id: "X",
      display: "KICK-N-HAT",
      audio: HAT
    },
    {
      id: "C",
      display: "RP4-KICK",
      audio: KICK
    }
  ]
function DrumMachine(){
    const[display, setDisplay] = useState("");
    function play(id){
        document.getElementById(id).play();
    }
    function handleClick(id){
        switch(id) {
            case "Q":
                play("Q");
                setDisplay(drums[0].display);
                break;
            case "W":
                play("W");
                setDisplay(drums[1].display);
                break;
            case "E":
                play("E");
                setDisplay(drums[2].display);
                break;
            case "A":
                play("A");
                setDisplay(drums[3].display);
                break;
            case "S":
                play("S");
                setDisplay(drums[4].display);
                break;
            case "D":
                play("D");
                setDisplay(drums[5].display);
                break;
            case "Z":
                play("Z");
                setDisplay(drums[6].display);
                break;
            case "X":
                play("X");
                setDisplay(drums[7].display);
                break;
            case "C":
                play("C");
                setDisplay(drums[8].display);
                break;
            default:
                setDisplay("");
        }
    }
    function onKeyDown(e) {
      play(e.key.toUpperCase());
      drums.forEach(f => {if(e.key.toUpperCase() === f.id){
        setDisplay(f.display);
      }})
    }
    useEffect(() => {
      window.addEventListener("keydown", onKeyDown);
  
      return () => {
        window.removeEventListener("keydown", onKeyDown);
      };
    }, []);
    return (
    <div id="drum-machine" className='d-flex bg-light p-2 flex-column'>
        <div className="buttons m-1 d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex gap-1">
                <Button audio={drums[0].audio} id={drums[0].id} display={drums[0].display} handleClick={handleClick} />
                <Button audio={drums[1].audio} id={drums[1].id} display={drums[1].display} handleClick={handleClick}/>
                <Button audio={drums[2].audio} id={drums[2].id} display={drums[2].display} handleClick={handleClick}/>
            </div>
            <div className="d-flex gap-1">
                <Button audio={drums[3].audio} id={drums[3].id} display={drums[3].display} handleClick={handleClick}/>
                <Button audio={drums[4].audio} id={drums[4].id} display={drums[4].display} handleClick={handleClick}/>
                <Button audio={drums[5].audio} id={drums[5].id} display={drums[5].display} handleClick={handleClick}/>
            </div>
            <div className="d-flex gap-1">
                <Button audio={drums[6].audio} id={drums[6].id} display={drums[6].display} handleClick={handleClick}/>
                <Button audio={drums[7].audio} id={drums[7].id} display={drums[7].display} handleClick={handleClick}/>
                <Button audio={drums[8].audio} id={drums[8].id} display={drums[8].display} handleClick={handleClick}/>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div id="display" className='bg-secondary text-light d-flex justify-content-center align-items-center w-100 m-1'>
              {display}
          </div>
        </div>
    </div>
    )
}

export default DrumMachine;