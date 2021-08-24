import React from "react";

import './Cardss.css';

export default function Home() {
    return (
      <div>
        {/* <span> */}
        <div className="card2">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img
                  alt=""
                  className="photo1"
                  src="data:image/jpeg;base64,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"
                />
                <span className="card-title">Un peu d'Histoire ...</span>
              </div>
              <div className="card-content">
                <p>
                  Dans notre pays, la réglementation routière est née bien avant
                  la naissance de l’automobile. En 1804, Napoléon Ier rend
                  obligatoire de circuler à droite de la chaussée. Il faut
                  savoir qu’avec leur hippomobile, les romains roulaient à
                  gauche. Une ordonnance d’août 1893 oblige à posséder une
                  autorisation de conduire un véhicule à moteur (notre permis de
                  conduire d’aujourd’hui). Le premier décret apparaît le 10 mars
                  1899, il vise à limiter la vitesse des véhicules à vapeur ou à
                  moteur à 30 kms en rase campagne. Pour tenir compte de
                  l’amélioration des véhicules et des voies routières, le code
                  de la route sera modifié à de nombreuses reprises. De nombreux
                  débats et diverses mesures feront aboutir la création du code
                  de la route tel que nous le connaissons aujourd’hui (avec bien
                  sur des modifications) le 27 mai 1921. Sachez qu’en l’an 1896
                  les leçons de conduite n’étaient pas dispensées par une auto
                  école, elles ont vu le jour en 1917, mais par les vendeurs des
                  véhicules à pétroles ou le père du conducteur. En 1922 le
                  certificat de conduire est remplacé par le permis de conduire
                  de couleur rose, puis en 1954, sont mis en place diverses
                  catégories de permis suivant le type de véhicules conduit. Le
                  permis se voit fleurir de 3 volets. C’est en 1958 que le
                  diplôme d’enseignant de la conduite (BEPECASER d’aujourd’hui)
                  voit le jour. L’examen du permis de conduire dans sa version
                  la plus moderne se concrétise en 1972 et c’est en 1992 que
                  naitra le permis à point Le code de la route est un ensemble
                  de lois et de règlements qui a pour but l’utilisation des
                  voies publiques. C’est aussi un savoir vivre ensemble et de
                  civisme. Ne pas respecter le code de la route expose à des
                  sanctions qui vont de l’amende à la peine de prison. Divers
                  livres ont été publiés pour apprendre aux futurs conducteurs
                  les lois et les règles qui régissent nos routes, ils sont
                  communément appelés CODE DE LA ROUTE. Les premiers ouvrages
                  édités par des éditeurs privés se bornaient à reproduire les
                  textes de la législation du code de la route agrémentés de
                  publicités et de quelques informations sur la sécurité et la
                  conduite à tenir en cas d’accident. De nos jours, les livres
                  de codes de la route sont édités par des sociétés
                  spécialisées.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </span>
        <span> */}
        <div class="card2">
          <div class="col s12 m6">
            <div class="card darken-1">
              <div class="card-content black-text">
                <span class="card-title">
                  Pourquoi mieux apprendre à conduire ?
                </span>
                <p>
                  Au-delà du plaisir de conduire, l'utilisation d'une voiture
                  est souvent indispensable pour les études, le travail ou les
                  loisirs. L'objectif général est d'amener tout automobiliste
                  débutant à la maîtrise de compétences en termes de savoir
                  être, savoirs, savoir-faire et savoir-devenir. Apprendre à
                  conduire est une démarche éducative exigeante et le livret
                  d’apprentissage que nous vous remettons, va vous guider dans
                  votre progression avec l'aide de votre formateur, enseignant
                  diplômé de la sécurité routière ou de votre accompagnateur.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </span> */}
        <div class="card2">
          <div class="col s12 m6">
            <div class="card darken-1">
              <div class="card-content black-text">
                <span class="card-title">
                  Quelle est l'utilité de votre livret d'apprentissage ?
                </span>
                <p>
                  Il est, avec votre demande de permis de conduire (CERFA
                  02/Facsimilé), le document indispensable et obligatoire lors
                  de vos cours, tant théoriques que pratiques. Dans ce livret,
                  vous trouverez :<br></br> • les documents obligatoires concernant les
                  cursus suivants : formation traditionnelle, apprentissage
                  anticipé de la conduite ou conduite supervisée ; <br></br>• les
                  compétences que votre formateur peut valider. Ce livret va
                  vous guider dans votre parcours d’apprentissage. Il vous
                  permet de savoir « où vous en êtes » mais aussi et surtout «
                  où vous allez ». Vous allez progressivement devenir autonome
                  et compétent.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </span> */}
        <div class="card2">
          <div class="col s12 m6">
            <div class="card darken-1">
              <div class="card-content black-text">
                <span class="card-title">Déroulement de la formation</span>
                <p>
                  <h6>*Partie théorique :</h6> Stage Code de 3 jours dispensé par un
                  enseignant de la conduite et de la sécurité routière. Mardi
                  après-midi cours sur les grands thèmes de la sécurité routière
                  en présentiel d’un enseignant. Accès libre à la salle code
                  pour des entraînements à l’examen sur les heures indiquées au
                  bureau et sur le site de l’auto-école. Accès internet
                  entraînement au code et révision des différents thèmes.
                  <h6>*Partie pratique :</h6> Évaluation Cours pratiques en
                  circulation (1h, 1h30, 2h) avec un enseignant de la conduite
                  et sécurité routière. Durant les cours, l’enseignant alternera
                  entre des phases théoriques et pratiques. Les compétences du
                  REMC (Référentiel pour une Éducation à la Mobilité Citoyenne)
                  seront validées progressivement par le biais d’un bilan à
                  chaque fin de compétences. Cours sur piste et en circulation
                  pour les permis moto et remorque En fin de formation l’élève
                  sera soumis à un examen blanc avant son futur passage à
                  l’examen.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </span> */}
      </div>
    );
}
