import React from 'react'
import './Cardss.css'
function Cours() {
    return (
      <div className="card2">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img
                alt=""
                className="photo1"
                src="https://d1yd9of8p6r11o.cloudfront.net/prod/article/image/c2e1234f617c34c5c2b112926cc1e310d4bd1cc3.png"
              />
            </div>
            <div className="card-content">
              <h5>Comment appréhender les cours de code en ligne?</h5>
              <p>
                Ce site de code en ligne est bien sûr ouvert à vous. Nous
                essayons d’être au plus proche de vous, c’est pourquoi nous vous
                proposons toujours plus et toujours mieux. Nous espérons que
                vous y prendrez du plaisir alors n’hésitez pas, bien sur, à nous
                laisser un commentaire ou une suggestion pour que nos cours de
                code soient enrichis par vos idées et que nous puissions en
                faire un cours de code interactif au plus proche de vous et de
                vos attentes. Nous essaierons dans un futur proche de faire des
                cours de code en ligne en version anglaise pour ceux qui
                souhaiteraient passer leur permis en France car nous savons que
                beaucoup d’entre vous vivent à des milliers de kilomètres de
                nous et suivent nos cours de code en ligne, peut être pour un
                futur permis français… Nous vous souhaitons à tous bonne chance
                pour vos futurs examens de code. Vous trouverez ci-joint des
                liens utils pour votre révision.
              </p>
              <div class="card-action">
                <a href="https://codes.droit.org/PDF/Code%20de%20la%20route.pdf">
                  Document PDF
                </a>
                <a href="https://www.youtube.com/watch?v=ROcAvatearg&ab_channel=superOrientationbydigiSchool">
                  Vidéo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cours
