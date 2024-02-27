import trophy from "./assets/1.png";
import card from "./assets/2.png";
import image from "./assets/3.png";
import "./Middle.css";
export default function Middle() {
  return (
    <div className="Middle">
      <div className="part1">
        <div className="image">
          <img
            src={trophy}
            alt="Trophy Image"
            height={750}
            className="trophy"
          />
        </div>
        <div className="text">
          <p className="para">
            <span>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </span>
            <ul typeof="disc">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </p>
          <img src={card} alt="Card Image" className="card" />
          <p className="para">
            Government of India has awarded the{" "}
            <span>"National Energy Conservation Award 2018"</span>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className="part2">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={image} alt="" />
        <p>
          Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
    </div>
  );
}
